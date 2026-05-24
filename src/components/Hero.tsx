import Image from "next/image";
import type { Profile } from "@/types/portfolio";

type HeroProps = {
  profile: Profile;
};

export default function Hero({ profile }: HeroProps) {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-16 sm:flex-row sm:items-center sm:px-6 sm:py-24">
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full bg-zinc-100 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
        {profile.avatar_url ? (
          <Image
            src={profile.avatar_url}
            alt={profile.name}
            fill
            sizes="112px"
            priority
            className="object-cover"
          />
        ) : (
          <div
            aria-hidden
            className="flex h-full w-full items-center justify-center text-2xl font-semibold text-zinc-500"
          >
            {profile.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {profile.title}
        </p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {profile.bio}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {profile.github_url && (
            <a
              href={profile.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center rounded-lg border border-zinc-200 px-4 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
            >
              GitHub
            </a>
          )}
          {profile.linkedin_url && (
            <a
              href={profile.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center rounded-lg bg-zinc-900 px-4 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
