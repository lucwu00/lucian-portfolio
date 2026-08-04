import SectionHeading from "./SectionHeading";
import { skills } from "../data/skills";

function Skills() {
    return (
        <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
            <SectionHeading eyebrow="what i work with" title="Skills" />
            <div className="grid gap-8 sm:grid-cols-2 1g:grid-cols-3">
                {skills.map((group) => (
                    <div key={group.category}>
                        <h3 className="font-mono text-sm text-muted">{group.category}</h3>
                        <ul className="mt-3 flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <li
                                    key={item}
                                    className="rounded-md border border-line bg-surface px-3 text-sm"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;