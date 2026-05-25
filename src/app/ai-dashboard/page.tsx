import type { Metadata } from "next";
import AgentMonitorGrid from "@/components/ai-dashboard/AgentMonitorGrid";
import DashboardSidebar from "@/components/ai-dashboard/DashboardSidebar";
import StatsRow from "@/components/ai-dashboard/StatsRow";

export const metadata: Metadata = {
  title: "AI Dashboard",
  description: "Multi-agent automation monitoring dashboard.",
};

export default function AiDashboardPage() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col lg:flex-row">
      <DashboardSidebar />

      <div className="flex flex-1 flex-col">
        <header className="border-b border-slate-800 px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
            AI Operations
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
            Workflow Command Center
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            Live overview of autonomous agents, task throughput, and pipeline health.
          </p>
        </header>

        <div className="flex-1 space-y-8 px-4 py-8 sm:px-6 lg:px-8">
          <StatsRow />
          <AgentMonitorGrid />
        </div>
      </div>
    </div>
  );
}
