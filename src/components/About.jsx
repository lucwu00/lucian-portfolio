import SectionHeading from "./SectionHeading";

function About(){
    return(
        <section id="about" className="mx-auto max-w-5xl px-6 py-16">
            <SectionHeading eyebrow="who i am" title="About" />

            <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
                <p className="text-xl font-medium text-ink">
                    I&apos;m currently looking for the entry-level or junior {" "}
                    <span className="text-accent">software engineer</span> and {" "}
                    <span className="text-accent">full-stack developer</span> roles.
                </p>

                <p>
                    I have some hands-on experience from school and personal projects, all aimed at the practical solutions to real-world problems.
                </p>

                <p>
                    I intend to gradually pivot towards{" "}
                    <span className="font-medium text-ink"> AI and Smart Tech </span>, where my deeper interests lie. 
                </p>

                <p>
                    I&apos;m passionate about coding and problem-solving, with a natural drive to build things that are genuinely innovative and cool.
                </p>

            </div>
        </section>
    )
}

export default About;