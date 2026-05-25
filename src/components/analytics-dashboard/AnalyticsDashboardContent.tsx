import {
  ANALYTICS_STATS,
  LIVE_EVENTS,
  PIPELINE_BARS,
} from "@/data/analytics-dashboard";

export default function AnalyticsDashboardContent() {
  return (
    <div className="space-y-8">
      <ul className="grid list-none gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {ANALYTICS_STATS.map(({ label, value, delta }) => (
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

      <section aria-labelledby="throughput-heading">
        <h2 id="throughput-heading" className="text-lg font-semibold text-slate-100">
          Event throughput
        </h2>
        <p className="mt-1 text-xs text-slate-500">Simulated · 24h window</p>
        <div className="mt-4 flex h-44 items-end gap-3 rounded-xl border border-slate-800 bg-slate-900/30 px-5 pb-5 pt-8">
          {PIPELINE_BARS.map(({ label, height }) => (
            <div key={label} className="flex flex-1 flex-col items-center gap-2">
              <div
                className="w-full max-w-10 rounded-t-md bg-gradient-to-t from-sky-600 to-sky-400"
                style={{ height: `${height}%` }}
              />
              <span className="text-[10px] text-slate-500">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="events-heading">
        <div className="flex h-8 items-end justify-between">
          <h2 id="events-heading" className="text-lg font-semibold text-slate-100">
            Live event stream
          </h2>
          <p className="text-xs text-slate-500">Simulated feed</p>
        </div>
        <div className="mt-4 overflow-hidden rounded-xl border border-slate-800">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead className="border-b border-slate-800 bg-slate-900/60">
              <tr>
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-slate-500">
                  Event
                </th>
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-slate-500">
                  Source
                </th>
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-slate-500">
                  Latency
                </th>
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-slate-500">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {LIVE_EVENTS.map((row) => (
                <tr key={row.id} className="border-b border-slate-800/80 last:border-0">
                  <td className="h-12 px-4 font-medium text-slate-200">{row.event}</td>
                  <td className="px-4 text-slate-400">{row.source}</td>
                  <td className="px-4 tabular-nums text-slate-300">{row.latency}</td>
                  <td className="px-4">
                    <span
                      className={`inline-flex h-6 items-center rounded-full px-2.5 text-xs font-medium ${
                        row.status === "ok"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-amber-500/10 text-amber-400"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
