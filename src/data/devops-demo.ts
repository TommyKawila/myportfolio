export type PipelineStatus = "success" | "running" | "queued" | "failed";

export const DEVOPS_STATS = [
  { label: "Deploys today", value: "24", delta: "100% success rate" },
  { label: "Avg build time", value: "1m 42s", delta: "-12s vs last week" },
  { label: "Environments", value: "3", delta: "prod · staging · preview" },
  { label: "IaC modules", value: "18", delta: "Terraform ready" },
] as const;

export const PIPELINES = [
  {
    id: "1",
    name: "myportfolio",
    branch: "main",
    status: "success" as PipelineStatus,
    duration: "1m 38s",
    trigger: "git push",
  },
  {
    id: "2",
    name: "api-gateway",
    branch: "feat/auth",
    status: "running" as PipelineStatus,
    duration: "0m 52s",
    trigger: "pull request",
  },
  {
    id: "3",
    name: "edge-functions",
    branch: "main",
    status: "queued" as PipelineStatus,
    duration: "—",
    trigger: "schedule",
  },
  {
    id: "4",
    name: "supabase-migrate",
    branch: "release/v2",
    status: "success" as PipelineStatus,
    duration: "0m 24s",
    trigger: "manual",
  },
] as const;

export const DEPLOY_LOG = [
  { time: "07:42:01", level: "info", message: "✓ Cloning repository… done" },
  { time: "07:42:08", level: "info", message: "✓ npm ci — 368 packages" },
  { time: "07:42:15", level: "info", message: "✓ next build --webpack" },
  { time: "07:43:42", level: "info", message: "✓ PWA service worker generated" },
  { time: "07:43:48", level: "success", message: "✓ Deployed to production" },
  { time: "07:43:49", level: "info", message: "→ https://myportfolio.vercel.app" },
] as const;

export const STATUS_LABEL: Record<PipelineStatus, string> = {
  success: "Success",
  running: "Running",
  queued: "Queued",
  failed: "Failed",
};
