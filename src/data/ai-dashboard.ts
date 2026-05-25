export type AgentStatus = "active" | "success" | "idle" | "processing";

export type AgentTask = {
  id: string;
  name: string;
  status: AgentStatus;
  detail: string;
  latency: string;
  throughput: string;
};

export const DASHBOARD_STATS = [
  { label: "Active agents", value: "4", delta: "+2 today" },
  { label: "Tasks completed", value: "1,284", delta: "98.2% success" },
  { label: "Avg latency", value: "142ms", delta: "-18ms vs avg" },
  { label: "Tokens / min", value: "24.6k", delta: "Stable load" },
] as const;

export const AGENT_TASKS: AgentTask[] = [
  {
    id: "alpha",
    name: "Agent Alpha",
    status: "active",
    detail: "Orchestrating workflow pipeline",
    latency: "89ms",
    throughput: "312 ops/hr",
  },
  {
    id: "scraper",
    name: "Data Scraper",
    status: "success",
    detail: "Batch ingest completed · 2.4k records",
    latency: "204ms",
    throughput: "48 jobs/hr",
  },
  {
    id: "llm",
    name: "LLM Processing",
    status: "idle",
    detail: "Awaiting next prompt queue",
    latency: "—",
    throughput: "0 tok/s",
  },
  {
    id: "embed",
    name: "Embedding Worker",
    status: "processing",
    detail: "Vectorizing document chunk 14/20",
    latency: "156ms",
    throughput: "1.2k vec/hr",
  },
  {
    id: "notify",
    name: "Notification Agent",
    status: "success",
    detail: "Webhook dispatch · 12 endpoints",
    latency: "62ms",
    throughput: "890 evt/hr",
  },
  {
    id: "audit",
    name: "Audit Sentinel",
    status: "active",
    detail: "Monitoring policy compliance",
    latency: "41ms",
    throughput: "Continuous",
  },
];

export const STATUS_LABEL: Record<AgentStatus, string> = {
  active: "Active",
  success: "Success",
  idle: "Idle",
  processing: "Processing",
};
