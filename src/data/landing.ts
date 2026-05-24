export const TECH_STACK = [
  { name: "Next.js", description: "App Router & RSC" },
  { name: "Supabase", description: "Auth & Database" },
  { name: "Tailwind CSS", description: "Utility-first UI" },
  { name: "PWA", description: "Offline-ready apps" },
  { name: "AI Automation", description: "Agent workflows" },
] as const;

export const SHOWCASE_PROJECTS = [
  {
    id: "1",
    title: "SaaS MVP Boilerplate",
    description:
      "Production-ready Next.js + Supabase starter with auth, dashboard, and PageSpeed-optimized architecture.",
    tags: ["Next.js", "Supabase", "Tailwind"],
    featured: true,
    image: "/project1.png",
    imageAlt: "SaaS MVP Boilerplate — Next.js portfolio dashboard preview",
    liveUrl: "/login",
    liveLabel: "Live Demo",
  },
  {
    id: "2",
    title: "AI Workflow Dashboard",
    description:
      "Multi-agent automation panel with real-time task orchestration and analytics.",
    tags: ["AI Automation", "TypeScript"],
    featured: false,
  },
  {
    id: "3",
    title: "Real-time Analytics Platform",
    description:
      "High-throughput event pipeline with sub-second dashboards and role-based access.",
    tags: ["Supabase", "Next.js"],
    featured: false,
  },
  {
    id: "4",
    title: "E-Commerce PWA",
    description:
      "Installable storefront with offline cart, push notifications, and 100/100 Lighthouse scores.",
    tags: ["PWA", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "5",
    title: "DevOps Automation Suite",
    description:
      "CI/CD templates, infra-as-code snippets, and one-click deployment pipelines.",
    tags: ["AI Automation", "Supabase"],
    featured: false,
  },
] as const;
