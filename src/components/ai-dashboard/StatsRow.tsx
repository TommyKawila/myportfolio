import { DASHBOARD_STATS } from "@/data/ai-dashboard";

export default function StatsRow() {
  return (
    <ul className="grid list-none gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {DASHBOARD_STATS.map(({ label, value, delta }) => (
        <li key={label}>
          <article className="h-[7.5rem] rounded-xl border border-slate-800 bg-slate-900/40 p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              {label}
            </p>
            <p className="mt-3 text-2xl font-semibold tabular-nums text-slate-100">
              {value}
            </p>
            <p className="mt-2 h-4 text-xs text-slate-400">{delta}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
