import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { ContactMessage, Profile, Project } from "@/types/portfolio";
import type { AuthSession, ServiceResult } from "@/types/service";

const FALLBACK_PROFILE: Profile = {
  id: "local",
  name: "Your Name",
  title: "Full-Stack Developer",
  bio: "Building fast, accessible web experiences with Next.js and Supabase.",
  email: "hello@example.com",
  github_url: "https://github.com",
  linkedin_url: "https://linkedin.com",
  avatar_url: null,
};

const FALLBACK_PROJECTS: Project[] = [
  {
    id: "1",
    slug: "portfolio",
    title: "Performance Portfolio",
    description: "A PageSpeed-optimized portfolio built with Next.js App Router.",
    image_url: null,
    tech_stack: ["Next.js", "Supabase", "Tailwind CSS"],
    live_url: null,
    repo_url: null,
    featured: true,
    sort_order: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    slug: "pwa-starter",
    title: "PWA Starter",
    description: "Progressive Web App scaffold with zero render-blocking overhead.",
    image_url: null,
    tech_stack: ["TypeScript", "PWA", "RSC"],
    live_url: null,
    repo_url: null,
    featured: true,
    sort_order: 2,
    created_at: new Date().toISOString(),
  },
];

function configError<T>(): ServiceResult<T> {
  return { data: null, error: "Supabase is not configured." };
}

function toAuthSession(user: { id: string; email?: string | null }): AuthSession {
  return { id: user.id, email: user.email ?? "" };
}

function formatAuthError(error: {
  message: string;
  status?: number;
  code?: string;
  name?: string;
}): string {
  const parts = [error.message];
  if (error.code) parts.push(`Code: ${error.code}`);
  if (error.status) parts.push(`Status: ${error.status}`);
  if (error.name && error.name !== "AuthError") parts.push(`Type: ${error.name}`);
  return parts.join(" · ");
}

export async function signUp(
  email: string,
  password: string
): Promise<ServiceResult<AuthSession>> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return configError();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name: email.split("@")[0],
      },
    },
  });

  if (error) {
    console.error("[signUp] Supabase error:", error);
    return { data: null, error: formatAuthError(error) };
  }

  console.error("[signUp] Supabase response:", {
    userId: data.user?.id ?? null,
    email: data.user?.email ?? null,
    session: data.session ? "present" : "null",
    identities: data.user?.identities?.length ?? 0,
  });

  if (data.user?.identities?.length === 0) {
    return {
      data: null,
      error: "This email is already registered. · Code: user_already_exists",
    };
  }

  if (!data.user) {
    const detail = [
      "Supabase returned no user.",
      `Session: ${data.session ? "present" : "null"}.`,
      "Check Auth settings (email confirmation, sign-ups enabled) in Supabase dashboard.",
    ].join(" ");
    console.error("[signUp] Missing user in response:", data);
    return { data: null, error: detail };
  }

  const hint = data.session
    ? undefined
    : "Check your email to confirm your account before signing in.";

  return { data: toAuthSession(data.user), error: null, hint };
}

export async function signIn(
  email: string,
  password: string
): Promise<ServiceResult<AuthSession>> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return configError();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return { data: null, error: formatAuthError(error) };
  if (!data.user) return { data: null, error: "Sign in failed." };

  return { data: toAuthSession(data.user), error: null };
}

export async function signOut(): Promise<ServiceResult<true>> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return configError();

  const { error } = await supabase.auth.signOut();

  if (error) return { data: null, error: formatAuthError(error) };
  return { data: true, error: null };
}

export async function getUserProfile(): Promise<ServiceResult<Profile>> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return configError();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError) return { data: null, error: authError.message };
  if (!user) return { data: null, error: "Not authenticated." };

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle();

  if (error) return { data: null, error: formatAuthError(error) };
  if (!data) return { data: null, error: "Profile not found." };

  return { data: data as Profile, error: null };
}

export async function getProfile(): Promise<Profile> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return FALLBACK_PROFILE;

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .limit(1)
    .maybeSingle();

  if (error || !data) return FALLBACK_PROFILE;
  return data as Profile;
}

export async function getProjects(): Promise<Project[]> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return FALLBACK_PROJECTS;

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error || !data?.length) return FALLBACK_PROJECTS;
  return data as Project[];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return FALLBACK_PROJECTS.find((p) => p.slug === slug) ?? null;
  }

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error || !data) return null;
  return data as Project;
}

export async function isAuthenticated(): Promise<boolean> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return false;

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return !!session;
}

export async function getCurrentUserId(): Promise<string | null> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return null;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user?.id ?? null;
}

export async function createContactMessage(
  message: ContactMessage
): Promise<ServiceResult<true>> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return configError();

  const { error } = await supabase.from("contact_messages").insert(message);

  if (error) return { data: null, error: formatAuthError(error) };
  return { data: true, error: null };
}
