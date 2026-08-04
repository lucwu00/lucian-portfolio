import { useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

// Navbar now receives the current tab (active) and the setter (setActive)
// from App, so clicking a link switches the visible section.
function Navbar({ active, setActive }) {
  const [open, setOpen] = useState(false);

  // Switch tab and close the mobile menu.
  function go(id) {
    setActive(id);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <button
          onClick={() => go("home")}
          className="font-mono text-sm font-medium tracking-tight"
        >
          @lkwu00<span className="text-accent"></span>
        </button>

        {/* Desktop tabs */}
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={`text-sm transition-colors ${
                  active === link.id
                    ? "text-accent"
                    : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              className="rounded-full border border-accent px-4 py-1.5 text-sm font-medium text-accent transition-all hover:bg-accent hover:text-white hover:shadow-lg hover:shadow-accent/30"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="font-mono text-sm md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "close" : "menu"}
        </button>
      </nav>

      {/* Mobile tabs */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-line px-6 py-3 md:hidden">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={`block w-full text-left py-2 text-sm transition-colors ${
                  active === link.id ? "text-accent" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              onClick={() => setOpen(false)}
              className="mt-1 inline-block rounded-full border border-accent px-4 py-1.5 text-sm font-medium text-accent"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;