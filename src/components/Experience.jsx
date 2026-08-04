import SectionHeading from "./SectionHeading";
import { experience, education } from "../data/experience";

function Experience() {
    return (
        <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
            <SectionHeading eyebrow="where i've worked" title="Experience" />

            <div className="space-y-10">
                {experience.map((job) => (
                    <div
                        key={job.company}
                        className="grid gap-4 md:grid-cols-[200px_1fr]"
                    >
                        <p className="font-mono text-sm text-muted">{job.period}</p>
                        <div>
                            <h3 className="font-display text-xl font-semibold tracking-tight">
                                {job.role}
                            </h3>
                            <p className="text-muted">{job.company}</p>
                            <ul className="mt-4 space-y-2">
                                {job.points.map((point) => (
                                    <li key={point}
                                        className="flex gap-3 text-sm leading-relaxed text-muted"
                                    >
                                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* Education */}
            <h3 className="mt-16 mb-6 font-mono text-sm text-accent">education</h3>
            <div className="space-y-6">
                {education.map((edu) => (
                    <div key={edu.school} className="grid gap-4 md:grid-cols-[200px_1fr]">
                        <div className="font-mono text-sm text-muted">
                            <p>{edu.period}</p>
                            <p>{edu.years}</p>
                        </div>
                        <div>
                            <h4 className="font-medium">{edu.school}</h4>
                            <p className="text-sm text-muted">{edu.qualification}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
