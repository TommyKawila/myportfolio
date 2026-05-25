export const ANALYTICS_STATS = [
  { label: "Events / sec", value: "8.4k", delta: "+12% vs 1h ago" },
  { label: "Active sessions", value: "1,892", delta: "Live now" },
  { label: "P95 latency", value: "84ms", delta: "Sub-second pipeline" },
  { label: "Error rate", value: "0.03%", delta: "Within SLA" },
] as const;

export const PIPELINE_BARS = [
  { label: "00:00", height: 42 },
  { label: "04:00", height: 58 },
  { label: "08:00", height: 71 },
  { label: "12:00", height: 88 },
  { label: "16:00", height: 65 },
  { label: "20:00", height: 54 },
  { label: "Now", height: 92 },
] as const;

export const LIVE_EVENTS = [
  { id: "1", event: "page.view", source: "web-app", latency: "12ms", status: "ok" },
  { id: "2", event: "auth.sign_in", source: "api-gateway", latency: "48ms", status: "ok" },
  { id: "3", event: "db.insert", source: "supabase", latency: "31ms", status: "ok" },
  { id: "4", event: "cache.miss", source: "edge-fn", latency: "76ms", status: "warn" },
  { id: "5", event: "analytics.batch", source: "worker", latency: "22ms", status: "ok" },
  { id: "6", event: "webhook.dispatch", source: "queue", latency: "19ms", status: "ok" },
] as const;
