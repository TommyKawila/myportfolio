"use client";

import { useState } from "react";
import { DEPLOY_LOG } from "@/data/devops-demo";

type LogLine = {
  time: string;
  level: "info" | "success";
  message: string;
};

const DEPLOY_LINES: Omit<LogLine, "time">[] = [
  { level: "info", message: "→ Triggering deploy pipeline…" },
  { level: "info", message: "✓ Building Next.js app…" },
  { level: "success", message: "✓ Preview ready — demo deploy complete" },
];

export default function DevOpsDeployLog() {
  const [extraLines, setExtraLines] = useState<LogLine[]>([]);
  const [deploying, setDeploying] = useState(false);

  const handleDeploy = () => {
    if (deploying) return;
    setDeploying(true);
    setExtraLines([]);

    DEPLOY_LINES.forEach((line, index) => {
      window.setTimeout(() => {
        const time = new Date().toTimeString().slice(0, 8);
        setExtraLines((prev) => [...prev, { ...line, time }]);
        if (index === DEPLOY_LINES.length - 1) setDeploying(false);
      }, (index + 1) * 600);
    });
  };

  const lines = [...DEPLOY_LOG, ...extraLines];

  return (
    <section aria-labelledby="log-heading">
      <div className="flex h-10 items-center justify-between">
        <h2 id="log-heading" className="text-lg font-semibold text-slate-100">
          Deploy log
        </h2>
        <button
          type="button"
          disabled={deploying}
          onClick={handleDeploy}
          className="inline-flex h-9 items-center rounded-lg bg-slate-100 px-4 text-xs font-semibold text-slate-950 disabled:opacity-50"
        >
          {deploying ? "Deploying…" : "Deploy now"}
        </button>
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
        <pre className="max-h-56 overflow-auto p-4 font-mono text-xs leading-6">
          {lines.map((line, index) => (
            <div
              key={`${line.time}-${line.message}-${index}`}
              className={line.level === "success" ? "text-emerald-400" : "text-slate-400"}
            >
              <span className="text-slate-600">{line.time}</span> {line.message}
            </div>
          ))}
        </pre>
      </div>
    </section>
  );
}
