import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import DashboardProfile from "@/components/dashboard/DashboardProfile";
import BrandIcon from "@/components/ui/BrandIcon";
import { getUserProfile } from "@/services/supabaseService";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your portfolio dashboard.",
};

export default async function DashboardPage() {
  const result = await getUserProfile();

  if (result.error === "Not authenticated.") {
    redirect("/login?redirect=/dashboard");
  }

  if (result.error || !result.data) {
    return (
      <section className="mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-5xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
        <div className="flex h-10 w-10 items-center justify-center">
          <BrandIcon />
        </div>
        <h1 className="mt-6 text-2xl font-semibold tracking-tight text-slate-100">
          Profile unavailable
        </h1>
        <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
          {result.error ?? "We could not load your profile. Please try again later."}
        </p>
        <Link
          href="/login?redirect=/dashboard"
          className="mt-8 inline-flex h-10 items-center rounded-lg bg-slate-100 px-4 text-sm font-medium text-slate-950 transition-colors hover:bg-white"
        >
          Go to sign in
        </Link>
      </section>
    );
  }

  return <DashboardProfile profile={result.data} />;
}
