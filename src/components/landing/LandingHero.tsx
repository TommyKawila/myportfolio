import Link from "next/link";

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800/80">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(120,119,198,0.18),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 lg:py-32">
        <p className="inline-flex h-7 w-fit items-center rounded-full border border-slate-700/80 bg-slate-900/60 px-3 text-xs font-medium tracking-wide text-slate-400">
          Available for hire · 24–48h delivery
        </p>

        <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
          AI-Accelerated{" "}
          <span className="bg-gradient-to-r from-slate-100 via-slate-300 to-slate-500 bg-clip-text text-transparent">
            Senior Full-Stack Developer
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
          Ship production-grade MVPs in{" "}
          <span className="font-medium text-slate-200">24–48 hours</span> — powered
          by Next.js, Supabase, and AI-driven workflows. Zero bloat, maximum velocity.
        </p>

        <div className="mt-10 flex h-12 flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/login"
            className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-slate-100 px-8 text-sm font-semibold text-slate-950 transition-colors hover:bg-white sm:w-auto"
          >
            Start your project
          </Link>
          <a
            href="#projects"
            className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-slate-700 px-8 text-sm font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-slate-100 sm:w-auto"
          >
            View portfolio
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-3 gap-6 border-t border-slate-800/80 pt-10 sm:max-w-lg">
          {[
            { label: "Delivery", value: "24–48h" },
            { label: "PageSpeed", value: "100/100" },
            { label: "Stack", value: "Modern" },
          ].map(({ label, value }) => (
            <div key={label}>
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
                {label}
              </dt>
              <dd className="mt-1 text-lg font-semibold text-slate-100">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
