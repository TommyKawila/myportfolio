import Link from "next/link";
import type { Profile } from "@/types/portfolio";

const actions = [
  {
    href: "/ai-dashboard",
    label: "AI Workflow Demo",
    description: "Multi-agent monitoring dashboard",
  },
  {
    href: "/analytics-dashboard",
    label: "Analytics Demo",
    description: "Real-time event intelligence hub",
  },
  {
    href: "/shop",
    label: "PWA Shop Demo",
    description: "Installable e-commerce storefront",
  },
  {
    href: "/devops",
    label: "DevOps Demo",
    description: "CI/CD pipelines & deploy logs",
  },
  {
    href: "/",
    label: "View portfolio",
    description: "See your public landing page",
  },
];

type DashboardQuickActionsProps = {
  email: string;
};

export default function DashboardQuickActions({ email }: DashboardQuickActionsProps) {
  return (
    <section aria-labelledby="quick-actions-heading">
      <h2 id="quick-actions-heading" className="text-lg font-semibold text-slate-100">
        Quick actions
      </h2>
      <ul className="mt-4 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {actions.map(({ href, label, description }) => (
          <li key={href}>
            <Link
              href={href}
              className="flex h-[5.5rem] flex-col justify-center rounded-xl border border-slate-800 bg-slate-900/40 px-5 transition-colors hover:border-slate-600 hover:bg-slate-900/70"
            >
              <span className="text-sm font-semibold text-slate-100">{label}</span>
              <span className="mt-1 line-clamp-2 text-xs leading-5 text-slate-400">
                {description}
              </span>
            </Link>
          </li>
        ))}
        <li>
          <a
            href={`mailto:${email}`}
            className="flex h-[5.5rem] flex-col justify-center rounded-xl border border-slate-800 bg-slate-900/40 px-5 transition-colors hover:border-slate-600 hover:bg-slate-900/70"
          >
            <span className="text-sm font-semibold text-slate-100">Contact inbox</span>
            <span className="mt-1 truncate text-xs text-slate-400">{email}</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export function ProfileCompletion({ profile }: { profile: Profile }) {
  const items = [
    { label: "Bio added", done: profile.bio.trim().length > 0 },
    { label: "GitHub linked", done: !!profile.github_url },
    { label: "LinkedIn linked", done: !!profile.linkedin_url },
    { label: "Avatar uploaded", done: !!profile.avatar_url },
  ];
  const completed = items.filter((i) => i.done).length;
  const percent = Math.round((completed / items.length) * 100);

  return (
    <section
      aria-labelledby="completion-heading"
      className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
    >
      <h2 id="completion-heading" className="text-sm font-semibold text-slate-100">
        Profile completion
      </h2>
      <div className="mt-4 flex h-10 items-end gap-2">
        <p className="text-3xl font-semibold tabular-nums text-slate-100">{percent}%</p>
        <p className="mb-1 text-xs text-slate-500">
          {completed}/{items.length} complete
        </p>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-slate-100 transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
      <ul className="mt-4 space-y-2">
        {items.map(({ label, done }) => (
          <li key={label} className="flex h-5 items-center gap-2 text-xs">
            <span
              aria-hidden
              className={`h-2 w-2 shrink-0 rounded-full ${done ? "bg-emerald-400" : "bg-slate-600"}`}
            />
            <span className={done ? "text-slate-300" : "text-slate-500"}>{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
