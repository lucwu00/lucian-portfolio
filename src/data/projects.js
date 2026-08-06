// image to drop in /public and set "/singink.png"
// github - replace # with the actual url


export const projects = [
    {
        id: "singink",
        title: "SingInk",
        blurb:
        "A printer and ink compatibility platform that helps people find the right cartridges for their printer, including image-based printer recognition.",
        tech: ["React", ".NET Core", "MySQL", "AWS Rekognition"],
        features: [
            "Snap a photo to identify a printer model via AWS Rekognition", 
            "Compatibility search across printers and cartridges",
            "Full-stack: React front end talking to a NET Core API",
            "Possess a separate admin dashboard for full CRUD content management, accessed through /admin/login to the original url linked and the password is SingInk-Admin-2025-Secret-Token for the demo sake only. Do not alter anything of the content without permission "
        ],
        challenge: 
        "Turning noisy image-recognition results into reliable, matchable printer models.",
        learned: 
        "Wiring a cloud vision API into a .NET backend and normalising messy product data.",
        github: "https://github.com/lucwu00/zwe_SingInk",
        demo: "https://zwe-singink-frontend-taupe.vercel.app",
        image: null,
    },

    {
    id: "finsightai",
    title: "FinSightAI",
    blurb:
      "A team-built insurance management platform. I owned the Policy page, the Import page, and their AI features",
    tech: ["React", "Node.js", "SQLite", "OpenAI"],
    features: [
      "Bulk policy import from Excel with algorithmic validation",
      "AI-assisted data clean-up and client ID auto-generation",
      "Preview and rollback before any import is committed",
    ],
    challenge:
      "Making bulk Excel imports safe — nothing should hit the database until the user has seen and approved it.",
    learned:
      "Designing an import pipeline that validates first and commits second, with a clean rollback path.",
    github: "#",
    demo: "#",
    image: null,
  },

  {
    id: "sghawkers",
    title: "SGHawkers",
    blurb:
      "A Singapore hawker food-ordering platform with separate customer and hawker apps sharing one real-time backend.",
    tech: ["React", "Express", "PostgreSQL", "WebSocket"],
    features: [
      "Live order updates pushed over WebSockets",
      "Hawker dashboard: stall open/close, inventory, and waste logging",
      "Group orders and portion forecasting",
    ],
    challenge:
      "Keeping the customer view and the hawker dashboard in sync in real time.",
    learned:
      "Driving shared state across two separate front ends with a WebSocket backend.",
    github: "#",
    demo: "#",
    image: null,
  },

  {
    id: "permalist",
    title: "Permalist",
    blurb:
      "A shared to-do list for an extended family, with per-task notes and automatic clean-up of old tasks.",
    tech: ["Node.js", "Express", "PostgreSQL", "EJS"],
    features: [
      "Filter tasks by family member",
      "Notes attached to individual tasks",
      "Automatic 3-month retention of completed tasks",
    ],
    challenge:
      "Modelling tasks that are shared across many people without the list becoming a mess.",
    learned:
      "Server-rendered CRUD backed by a relational PostgreSQL schema.",
    github: "#",
    demo: "#",
    image: null,
  },

  {
    id: "book-notes",
    title: "Book Notes",
    blurb:
      "A personal library for tracking books I've read and the notes I took, with cover art from the Open Library API.",
    tech: ["Node.js", "Express", "PostgreSQL", "EJS", "Open Library API"],
    features: [
      "Notes and ratings stored per book",
      "Sorting by title, rating, or date read",
      "Cover images fetched from an external API with a fallback",
    ],
    challenge:
      "Integrating an external cover API gracefully when a book has no cover.",
    learned:
      "Consuming a REST API from a Node backend and modelling the data relationally.",
    github: "#",
    demo: "#",
    image: null,
  },

  {
    id: "fitnest",
    title: "FitNest",
    blurb:
      "An Android fitness tracker for logging workouts and following progress over time.",
    tech: ["Kotlin", "Jetpack Compose"],
    features: [
      "Workout and exercise logging",
      "Progress views over time",
      "Native Android UI built with Jetpack Compose",
    ],
    challenge:
      "Managing UI state cleanly in a declarative Compose interface.",
    learned:
      "Building native Android screens with Kotlin and Compose.",
    github: "#",
    demo: "#",
    image: null,
  },

]