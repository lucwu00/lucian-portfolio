import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

// Map each tab id to the component that should show when it's active.
const sections = {
  home: Hero,
  about: About,
  skills: Skills,
  projects: Projects,
  experience: Experience,
  contact: Contact,
};

function App() {
  // Which tab is currently showing. Starts on "home".
  const [active, setActive] = useState("home");

  // Look up the component for the active tab.
  const ActiveSection = sections[active];

  // Whenever the tab changes, jump back to the top of the page.
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [active]);

  return (
    <div className="min-h-screen">
      <Navbar active={active} setActive={setActive} />

      {/* key={active} forces a remount on tab change, so the fade-up replays. */}
      <main key={active} className="animate-rise">
        <ActiveSection setActive={setActive} />
      </main>
    </div>
  );
}

export default App;