import SectionHeading from "./SectionHeading";
import { projects } from "../data/projects";

function initials(title) {
  return title
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

function ProjectCard({ project, index }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10 md:flex-row">
      {project.images && project.images.length > 0 && (
        <div className="grid gap-2 md:w-2/5 md:border-r md:border-line">
          {project.images.map((src, i) => (
            <div key={i} className="overflow-hidden">
              <img
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                className="aspect-16/10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 font-mono text-sm font-medium text-accent">
            {initials(project.title)}
          </div>

          <h3 className="font-display text-lg font-semibold tracking-tight">
            {project.title}
          </h3>

          <span className="ml-auto font-mono text-xs text-muted">
            {String(index).padStart(2, "0")}
          </span>
        </div>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md bg-accent/5 px-2 py-0.5 font-mono text-xs text-muted"
            >
              {t}
            </li>
          ))}
        </ul>

        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.blurb}
        </p>

        {project.features && project.features.length > 0 && (
          <ul className="mt-3 space-y-1.5">
            {project.features.map((feature, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm leading-relaxed text-muted"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {project.challenge && (
          <p className="mt-3 text-sm leading-relaxed">
            <span className="font-mono text-xs text-glow">challenge - </span>
            {project.challenge}
          </p>
        )}

        {project.learned && (
          <p className="mt-3 text-sm leading-relaxed">
            <span className="font-mono text-xs text-glow">learned - </span>
            {project.learned}
          </p>
        )}

        <div className="mt-auto flex gap-4 border-t border-line pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading eyebrow="things i've built" title="Projects" />

      <div className="mt-8 flex flex-col gap-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i + 1}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;