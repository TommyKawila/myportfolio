import type { Metadata } from "next";
import DevOpsContent from "@/components/devops/DevOpsContent";
import DevOpsSidebar from "@/components/devops/DevOpsSidebar";

export const metadata: Metadata = {
  title: "DevOps Automation",
  description: "CI/CD pipelines, IaC templates, and one-click deployment demo.",
};

export default function DevOpsPage() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col lg:flex-row">
      <DevOpsSidebar />
      <div className="flex flex-1 flex-col">
        <header className="border-b border-slate-800 px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
            DevOps Automation
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
            Deploy Control Center
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            CI/CD templates, infra-as-code snippets, and one-click deployment pipelines
            powered by Supabase & AI automation.
          </p>
        </header>
        <div className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
          <DevOpsContent />
        </div>
      </div>
    </div>
  );
}
