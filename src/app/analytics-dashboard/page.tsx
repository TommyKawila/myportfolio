import type { Metadata } from "next";
import AnalyticsDashboardContent from "@/components/analytics-dashboard/AnalyticsDashboardContent";
import AnalyticsSidebar from "@/components/analytics-dashboard/AnalyticsSidebar";

export const metadata: Metadata = {
  title: "Analytics Dashboard",
  description: "Real-time analytics platform demo with live event monitoring.",
};

export default function AnalyticsDashboardPage() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col lg:flex-row">
      <AnalyticsSidebar />
      <div className="flex flex-1 flex-col">
        <header className="border-b border-slate-800 px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
            Real-time Analytics
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
            Event Intelligence Hub
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            High-throughput pipeline with sub-second dashboards and role-based access control.
          </p>
        </header>
        <div className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
          <AnalyticsDashboardContent />
        </div>
      </div>
    </div>
  );
}
