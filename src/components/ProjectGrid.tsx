import { getProjects } from "@/services/supabaseService";
import ProjectCard from "./ProjectCard";

export default async function ProjectGrid() {
  const projects = await getProjects();

  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6"
      aria-labelledby="projects-heading"
    >
      <h2
        id="projects-heading"
        className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
      >
        Projects
      </h2>
      <ul className="mt-8 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
