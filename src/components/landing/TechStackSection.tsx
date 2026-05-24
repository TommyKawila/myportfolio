import { TECH_STACK } from "@/data/landing";

export default function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="border-b border-slate-800/80 py-24 sm:py-28"
      aria-labelledby="tech-stack-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
            Tech Stack
          </p>
          <h2
            id="tech-stack-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl"
          >
            Built with precision tools
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Every project ships on a battle-tested stack optimized for speed,
            scalability, and lighthouse-perfect performance.
          </p>
        </div>

        <ul className="mt-12 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_STACK.map(({ name, description }) => (
            <li key={name}>
              <div className="group h-full rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-colors hover:border-slate-600 hover:bg-slate-900/70">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/80 text-sm font-bold text-slate-200 transition-colors group-hover:border-slate-500 group-hover:text-white">
                  {name.charAt(0)}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-100">{name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
