import ProfileAvatar from "@/components/ui/ProfileAvatar";
import SignOutButton from "@/components/dashboard/SignOutButton";
import type { Profile } from "@/types/portfolio";

type DashboardProfileProps = {
  profile: Profile;
};

export default function DashboardProfile({ profile }: DashboardProfileProps) {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <ProfileAvatar
            name={profile.name}
            avatarUrl={profile.avatar_url}
            size="lg"
          />
          <div className="min-w-0">
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {profile.title}
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              {profile.name}
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {profile.bio}
            </p>
          </div>
        </div>
        <SignOutButton />
      </div>

      <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
          <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Email
          </dt>
          <dd className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-50">
            {profile.email}
          </dd>
        </div>
        <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
          <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            GitHub
          </dt>
          <dd className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-50">
            {profile.github_url ? (
              <a
                href={profile.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                View profile
              </a>
            ) : (
              "Not set"
            )}
          </dd>
        </div>
        <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
          <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            LinkedIn
          </dt>
          <dd className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-50">
            {profile.linkedin_url ? (
              <a
                href={profile.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                View profile
              </a>
            ) : (
              "Not set"
            )}
          </dd>
        </div>
      </dl>
    </section>
  );
}
