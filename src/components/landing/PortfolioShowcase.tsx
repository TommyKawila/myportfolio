import Image from "next/image";
import Link from "next/link";
import { SHOWCASE_PROJECTS } from "@/data/landing";

export default function PortfolioShowcase() {
  return (
    <section
      id="projects"
      className="py-24 sm:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
              Portfolio
            </p>
            <h2
              id="projects-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl"
            >
              Selected work
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Five flagship builds showcasing rapid delivery, clean architecture,
              and production-ready quality.
            </p>
          </div>
          <p className="shrink-0 text-sm text-slate-500">5 projects</p>
        </div>

        <ul className="mt-12 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SHOWCASE_PROJECTS.map((project, index) => (
            <li
              key={project.id}
              className={index === 0 ? "sm:col-span-2 lg:col-span-2" : undefined}
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/30 transition-colors hover:border-slate-600 hover:bg-slate-900/50">
                <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-slate-900">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.imageAlt ?? project.title}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <>
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl font-bold text-slate-800 transition-colors group-hover:text-slate-700">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </>
                  )}
                  {project.featured && (
                    <span className="absolute left-4 top-4 rounded-full border border-slate-600 bg-slate-950/80 px-2.5 py-1 text-xs font-medium text-slate-300">
                      Featured
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-slate-700/80 bg-slate-800/50 px-2.5 py-1 text-xs font-medium text-slate-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      className="mt-5 inline-flex h-10 w-fit items-center rounded-lg bg-slate-100 px-4 text-sm font-semibold text-slate-950 transition-colors hover:bg-white"
                    >
                      {project.liveLabel ?? "View Project"}
                    </Link>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
