import SectionHeading from "./SectionHeading";
import { ProjectCard } from "./Projects";
import { hackathons } from "../data/hackathons";

// Same card layout as Projects, fed from src/data/hackathons.js
function Hackathons() {
  return (
    <section id="hackathons" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading eyebrow="built against the clock" title="Hackathons" />

      {hackathons.length === 0 ? (
        <p className="mt-8 rounded-xl border border-dashed border-line bg-surface p-6 text-sm text-muted">
          Hackathon builds are coming soon.
        </p>
      ) : (
        <div className="mt-8 flex flex-col gap-6">
          {hackathons.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 1} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Hackathons;
