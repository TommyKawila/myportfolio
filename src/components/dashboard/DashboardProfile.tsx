import type { ReactNode } from "react";
import ProfileAvatar from "@/components/ui/ProfileAvatar";
import SignOutButton from "@/components/dashboard/SignOutButton";
import DashboardQuickActions, {
  ProfileCompletion,
} from "@/components/dashboard/DashboardQuickActions";
import type { Profile } from "@/types/portfolio";

type DashboardProfileProps = {
  profile: Profile;
};

function InfoCard({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-[5.5rem] rounded-xl border border-slate-800 bg-slate-900/30 p-5">
      <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
        {label}
      </dt>
      <dd className="mt-2 text-sm font-medium text-slate-100">{children}</dd>
    </div>
  );
}

export default function DashboardProfile({ profile }: DashboardProfileProps) {
  const displayBio =
    profile.bio.trim() ||
    "Add a short bio in Supabase to introduce yourself on your portfolio.";

  return (
    <div className="mx-auto w-full max-w-6xl">
      <header className="border-b border-slate-800 px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
              Account dashboard
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
              Welcome back, {profile.name.split(" ")[0]}
            </h1>
          </div>
          <SignOutButton />
        </div>
      </header>

      <div className="grid gap-8 px-4 py-8 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-8 lg:col-span-2">
          <section className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <ProfileAvatar
                name={profile.name}
                avatarUrl={profile.avatar_url}
                size="lg"
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-slate-400">{profile.title}</p>
                <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-100">
                  {profile.name}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{displayBio}</p>
              </div>
            </div>
          </section>

          <DashboardQuickActions email={profile.email} />

          <section aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-lg font-semibold text-slate-100">
              Contact & links
            </h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-3">
              <InfoCard label="Email">{profile.email}</InfoCard>
              <InfoCard label="GitHub">
                {profile.github_url ? (
                  <a
                    href={profile.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-100 underline-offset-4 hover:underline"
                  >
                    View profile
                  </a>
                ) : (
                  <span className="text-slate-500">Not set</span>
                )}
              </InfoCard>
              <InfoCard label="LinkedIn">
                {profile.linkedin_url ? (
                  <a
                    href={profile.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-100 underline-offset-4 hover:underline"
                  >
                    View profile
                  </a>
                ) : (
                  <span className="text-slate-500">Not set</span>
                )}
              </InfoCard>
            </dl>
          </section>
        </div>

        <aside className="space-y-4">
          <ProfileCompletion profile={profile} />

          <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
            <h2 className="text-sm font-semibold text-slate-100">Account status</h2>
            <ul className="mt-4 space-y-3">
              <li className="flex h-5 items-center justify-between text-xs">
                <span className="text-slate-500">Auth</span>
                <span className="font-medium text-emerald-400">Verified</span>
              </li>
              <li className="flex h-5 items-center justify-between text-xs">
                <span className="text-slate-500">Role</span>
                <span className="font-medium text-slate-300">Member</span>
              </li>
              <li className="flex h-5 items-center justify-between text-xs">
                <span className="text-slate-500">Portfolio</span>
                <span className="font-medium text-slate-300">Live</span>
              </li>
            </ul>
          </section>

          <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
            <h2 className="text-sm font-semibold text-slate-100">Tip</h2>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              Update your name, bio, and social links in the Supabase{" "}
              <code className="text-slate-300">profiles</code> table to enrich this
              dashboard and your public portfolio.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
