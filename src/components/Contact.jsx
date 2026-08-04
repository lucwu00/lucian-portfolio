import SectionHeading from "./SectionHeading";

const contacts = [
    { label: "GitHub", value: "github.com/lucwu00", href: "https://github.com/lucwu00" },
    { label: "LinkedIn", value: "linkedin.com/in/lucian-wu-zwe-htet-kyaw-08449927b/", href: "https://www.linkedin.com/in/lucian-wu-zwe-htet-kyaw-08449927b/" },
    { label: "Email", value: "wuwu1403@gmail.com", href: "mailto:wuwu1403@gmail.com" },
]

function Contact() {
    return (
        <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
            <p className="max-w-xl text-lg leading-relaxed text-muted">
                I&apos;m open to entry-level and junior software roles as software engineer.
                The fastest way to reach me is:
            </p>

            <ul className="mt-8 divide-y divide-line border-y border-line">
                {contacts.map(c => (
                    <li key={c.label}>
                        <a href={c.href} className="group flex items-center justify-between py-4 transition-colors hover:text-accent" target="_blank" rel="noreferrer">
                            <span className="font-mono text-sm text-muted">{c.label}</span>
                            <span className="font-medium">{c.value}<span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span></span>
                        </a>
                    </li>
                ))}
            </ul>

            <p className="mt-16 font-mono text-xs text-muted">
                © {new Date().getFullYear()} Luc — built with React &amp; Tailwind.
            </p>
        </section>
    );
}

export default Contact;