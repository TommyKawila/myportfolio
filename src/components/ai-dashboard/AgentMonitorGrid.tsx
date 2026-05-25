import {
  AGENT_TASKS,
  STATUS_LABEL,
  type AgentStatus,
} from "@/data/ai-dashboard";

const statusStyles: Record<
  AgentStatus,
  { badge: string; dot: string }
> = {
  active: {
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    dot: "bg-emerald-400",
  },
  success: {
    badge: "border-sky-500/30 bg-sky-500/10 text-sky-400",
    dot: "bg-sky-400",
  },
  idle: {
    badge: "border-slate-600 bg-slate-800/80 text-slate-400",
    dot: "bg-slate-500",
  },
  processing: {
    badge: "border-violet-500/30 bg-violet-500/10 text-violet-400",
    dot: "bg-violet-400",
  },
};

export default function AgentMonitorGrid() {
  return (
    <section aria-labelledby="agents-heading">
      <div className="flex h-8 items-end justify-between">
        <h2 id="agents-heading" className="text-lg font-semibold text-slate-100">
          Multi-agent monitor
        </h2>
        <p className="text-xs text-slate-500">Simulated · updates on refresh</p>
      </div>

      <ul className="mt-4 grid list-none gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {AGENT_TASKS.map((agent) => {
          const styles = statusStyles[agent.status];

          return (
            <li key={agent.id}>
              <article className="flex min-h-[10.5rem] flex-col rounded-xl border border-slate-800 bg-slate-900/30 p-5 transition-colors hover:border-slate-700 hover:bg-slate-900/50">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold text-slate-100">{agent.name}</h3>
                  <span
                    className={`inline-flex h-6 shrink-0 items-center gap-1.5 rounded-full border px-2.5 text-xs font-medium ${styles.badge}`}
                  >
                    <span
                      aria-hidden
                      className={`h-2 w-2 shrink-0 rounded-full ${styles.dot}`}
                    />
                    {STATUS_LABEL[agent.status]}
                  </span>
                </div>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                  {agent.detail}
                </p>

                <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-800/80 pt-4">
                  <div>
                    <dt className="text-xs text-slate-500">Latency</dt>
                    <dd className="mt-1 h-5 text-sm font-medium tabular-nums text-slate-200">
                      {agent.latency}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-500">Throughput</dt>
                    <dd className="mt-1 h-5 text-sm font-medium tabular-nums text-slate-200">
                      {agent.throughput}
                    </dd>
                  </div>
                </dl>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
