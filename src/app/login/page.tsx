import type { Metadata } from "next";
import AuthCard from "@/components/auth/AuthCard";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in or register to access your portfolio dashboard.",
};

type LoginPageProps = {
  searchParams: Promise<{ redirect?: string; error?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { redirect: redirectTo, error: queryError } = await searchParams;

  return (
    <section className="mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-5xl flex-col items-center justify-center px-4 py-16 sm:px-6">
      {queryError && (
        <div
          role="alert"
          className="mb-6 w-full max-w-sm rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/50 dark:text-red-400"
        >
          {decodeURIComponent(queryError)}
        </div>
      )}
      <AuthCard redirectTo={redirectTo ?? "/dashboard"} />
      <p className="mt-6 max-w-sm text-center text-xs text-zinc-500 dark:text-zinc-400">
        Registration errors show the exact Supabase message below the form.
        Check the browser console and terminal for full details.
      </p>
    </section>
  );
}
