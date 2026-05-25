import {
  DEVOPS_STATS,
  PIPELINES,
  STATUS_LABEL,
  type PipelineStatus,
} from "@/data/devops-demo";
import DevOpsDeployLog from "@/components/devops/DevOpsDeployLog";

const statusStyles: Record<PipelineStatus, string> = {
  success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  running: "border-amber-500/30 bg-amber-500/10 text-amber-400",
  queued: "border-slate-600 bg-slate-800/80 text-slate-400",
  failed: "border-red-500/30 bg-red-500/10 text-red-400",
};

export default function DevOpsContent() {
  return (
    <div className="space-y-8">
      <ul className="grid list-none gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {DEVOPS_STATS.map(({ label, value, delta }) => (
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

      <section aria-labelledby="pipelines-heading">
        <h2 id="pipelines-heading" className="text-lg font-semibold text-slate-100">
          Active pipelines
        </h2>
        <p className="mt-1 text-xs text-slate-500">Simulated · one-click deploy</p>
        <ul className="mt-4 grid list-none gap-4 sm:grid-cols-2">
          {PIPELINES.map((pipeline) => (
            <li key={pipeline.id}>
              <article className="min-h-[8.5rem] rounded-xl border border-slate-800 bg-slate-900/30 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-100">{pipeline.name}</h3>
                    <p className="mt-1 font-mono text-xs text-slate-500">{pipeline.branch}</p>
                  </div>
                  <span
                    className={`inline-flex h-6 shrink-0 items-center rounded-full border px-2.5 text-xs font-medium ${statusStyles[pipeline.status]}`}
                  >
                    {STATUS_LABEL[pipeline.status]}
                  </span>
                </div>
                <dl className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <dt className="text-slate-500">Duration</dt>
                    <dd className="mt-1 font-medium tabular-nums text-slate-200">
                      {pipeline.duration}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Trigger</dt>
                    <dd className="mt-1 font-medium text-slate-200">{pipeline.trigger}</dd>
                  </div>
                </dl>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <DevOpsDeployLog />
    </div>
  );
}
