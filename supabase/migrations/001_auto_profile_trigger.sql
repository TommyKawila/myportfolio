-- Run this ONCE in Supabase SQL Editor if you already ran the old schema.sql
-- Safe to run: recreates profiles table and backfills existing auth users

drop trigger if exists on_auth_user_created on auth.users;
drop function if exists public.handle_new_user();

drop table if exists public.profiles cascade;

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  name text not null,
  title text not null default 'Full-Stack Developer',
  bio text not null default '',
  email text not null,
  github_url text,
  linkedin_url text,
  avatar_url text,
  created_at timestamptz default now()
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, name, title, bio, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'name', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data ->> 'title', 'Full-Stack Developer'),
    coalesce(new.raw_user_meta_data ->> 'bio', ''),
    new.email
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();

-- Backfill profiles for users that registered before this trigger existed
insert into public.profiles (id, name, title, bio, email)
select
  u.id,
  coalesce(u.raw_user_meta_data ->> 'name', split_part(u.email, '@', 1)),
  coalesce(u.raw_user_meta_data ->> 'title', 'Full-Stack Developer'),
  coalesce(u.raw_user_meta_data ->> 'bio', ''),
  u.email
from auth.users u
where not exists (
  select 1 from public.profiles p where p.id = u.id
);

alter table public.profiles enable row level security;

drop policy if exists "Public read profiles" on public.profiles;
drop policy if exists "Users read own profile" on public.profiles;
drop policy if exists "Users update own profile" on public.profiles;

create policy "Public read profiles" on public.profiles for select using (true);
create policy "Users read own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users update own profile" on public.profiles for update using (auth.uid() = id);
