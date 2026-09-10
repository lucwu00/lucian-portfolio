function Hero({ setActive }) {
  return (
    <section id="home" className="mx-auto max-w-5xl px-6 pt-20 pb-16 md:pt-28">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* LEFT: your existing text block */}
        <div>
          <p className="font-mono text-sm text-glow">// based in Singapore</p>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Hi, I&apos;m Luc.
          </h1>
          <p className="mt-5 font-mono text-base text-muted md:text-lg">
            software engineer · full-stack developer
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I build secure, modern web applications — the kind that have to stay
            fast, reliable, and genuinely useful.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button
              onClick={() => setActive("projects")}
              className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/30 transition-all hover:-translate-y-0.5 hover:shadow-accent/50"
            >
              View projects
            </button>
            <a
              href="/Zwe_jobResume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-6 py-2.5 text-sm font-medium transition-colors hover:border-accent"
            >
              View resume
            </a>
            <a href="https://github.com/lucwu00" target="_blank" rel="noreferrer" className="rounded-full border border-line px-6 py-2.5 text-sm font-medium transition-colors hover:border-accent">
              GitHub
            </a>
          </div>
        </div>

        {/* RIGHT: the code-style graphic */}
        <div className="relative">
          {/* soft blue glow behind the window */}
          <div className="absolute inset-0 -z-10 rounded-2xl bg-accent/20 blur-3xl" />

          <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-xl shadow-accent/10">
            {/* window title bar with the three dots */}
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-2 font-mono text-xs text-muted">luc.js</span>
            </div>

            {/* the code body */}
            <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed">
              <code>
                <span className="text-muted">const</span>{" "}
                <span className="text-accent">luc</span> = {"{"}
                {"\n"}  role: <span className="text-glow">"Software Engineer"</span>,
                {"\n"}  stack: [<span className="text-glow">"React"</span>,{" "}
                <span className="text-glow">"Node"</span>,{" "}
                <span className="text-glow">".NET"</span>],
                {"\n"}  focus: <span className="text-glow">"Useful and Profitable Web Apps"</span>,
                {"\n"}  location: <span className="text-glow">"Singapore"</span>,
                {"\n"}  openToWork:
                <span className="text-accent"> true</span>,
                {"\n"}  aspiration: <span className="text-glow">"AI Engineer"</span>,
                {"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;