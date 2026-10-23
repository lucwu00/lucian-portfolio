// Hackathon entries use exactly the same fields as projects.js,
// plus an optional `award` that shows as a badge on the card.
// Images go in /public/project_thumbnails/<id>/ and are referenced like "/project_thumbnails/<id>/shot.jpg".

export const hackathons = [
  {
    id: "savvymoni",
    title: "SavvyMoni",
    blurb:
      "An adaptive emergency-savings app for people with irregular income, built solo for the ASEAN Financial Health Challenge 2026 (Problem Statement 2). It answers one question every day: how much can I safely save today without missing tomorrow's essentials? Save steadily for the known to stand strongly against the unknown.",
    tech: ["React 19", "TypeScript", "Vite", "Claude API", "Vercel Serverless", "Playwright"],
    features: [
      "Safe-to-save engine that projects cash day by day, protects every bill and a reserve first, and suggests a cautious amount based on how much income varies",
      "Import a bank or e-wallet spreadsheet, or keep a simple cash book offline; SavvyMoni finds regular income and bills in either",
      "Emergency simulator for local shocks (dental bill, motorcycle repair, clinic visit) showing what savings cover and what's still at risk",
      "Recovery planner with conservative, balanced and optimistic rebuild schedules after a shock",
      "Ask SavvyMoni: an AI assistant grounded in the app's own calculations through tool calls, with explicit consent and a server-side API key",
      "One engine across Singapore, the Philippines and Myanmar, in six languages: English, Mandarin, Malay, Tamil, Filipino and Burmese",
      "Benchmark lab comparing adaptive saving with fixed rules over a simulated 26 weeks",
      "104 automated tests and end-to-end browser flows, including offline use"
    ],
    challenge:
      "Making savings advice safe for income that moves: money set aside in a good week can be needed for rent the next, so every suggestion has to be explainable and never put essentials at risk, from a Singapore student worker to a Myanmar garment worker paid in cash.",
    learned:
      "Designing a pure, testable finance engine in integer minor units, keeping an LLM grounded in real numbers instead of inventing them, and making one codebase work across currencies, languages and very different levels of banking access.",
    links: [
      { label: "Live demo", url: "https://savvymoniluc.vercel.app" },
      { label: "GitHub", url: "https://github.com/lucwu00/SavvyMoni" }
    ],
    images: [
      [
        { src: "/project_thumbnails/savvymoni/start.jpg", label: "Pick a country and how you keep records" },
        { src: "/project_thumbnails/savvymoni/overview.jpg", label: "Safe to save this week" },
        { src: "/project_thumbnails/savvymoni/planner.jpg", label: "Safe-to-save planner" },
        { src: "/project_thumbnails/savvymoni/simulator.jpg", label: "Emergency simulator" },
        { src: "/project_thumbnails/savvymoni/recovery.jpg", label: "Recovery planner" },
        { src: "/project_thumbnails/savvymoni/import.jpg", label: "Spreadsheet import review" },
        { src: "/project_thumbnails/savvymoni/cashbook.jpg", label: "Offline cash book (Myanmar)" },
        { src: "/project_thumbnails/savvymoni/philippines.jpg", label: "Philippines in pesos" },
        { src: "/project_thumbnails/savvymoni/asean.jpg", label: "One engine, three countries" },
        { src: "/project_thumbnails/savvymoni/tamil.jpg", label: "Tamil interface" },
        { src: "/project_thumbnails/savvymoni/benchmark.jpg", label: "Benchmark lab" },
      ],
    ],
  },
  {
    id: "youirl",
    title: "YOU:IRL",
    award: "🏆 1st Prize · Team Extinque",
    blurb:
      "Reimagining the MINT Museum of Toys rooftop as YOU:IRL, a youth club where visitors register with their museum ticket, get matched to themed zones, play, and meet people in real life.",
    tech: ["JavaScript", "WebGL", "Web Audio", "Vercel Serverless", "Upstash Redis"],
    features: [
      "Persona quiz that matches each visitor to the best of four zones: Play, Create, Connect and Showcase",
      "Interactive 2D floor plan with the future step-free routes and read-aloud directions",
      "Guided 3D walkthrough of the rooftop, built on a custom WebGL renderer, with a QR code for available activities in every room",
      "25+ playable activities, from pinball and a maze chase to a clay studio, charm bar and crew matching as virtual games",
      "Community hub with crews, a looking-for-group board and in-person weekly challenge sign-ups",
      "Future plan as Rooftop Pass accounts that sync online, unlocked by checking the visitor's museum ticket; currently only as MINT2026 for mock demo",
      "For Museum Pass after account creation and logging in, use MINT2026 for account adherence and record of wins and participations"
    ],
    challenge:
      "Fitting a full visitor journey, a 3D rooftop tour and dozens of mini-games into one fast web app, then resizing every room to match the real rooftop.",
    learned:
      "Turning a physical space concept into a digital journey people can test, and iterating fast on judge and user feedback as a team.",
    links: [
      { label: "Live demo", url: "https://youirlluc.vercel.app" },
      { label: "Pitch Deck", url: "/project_documents/youirl/youirl_deck.pdf"},
      { label: "GitHub", url: "https://github.com/lucwu00/You_IRL_Mint_Museum_Toys"}
    ],
    images: [
      [
        { src: "/project_thumbnails/youirl/welcome.jpg", label: "Sign in with a museum ticket" },
        { src: "/project_thumbnails/youirl/quiz.jpg", label: "Persona quiz" },
        { src: "/project_thumbnails/youirl/match.jpg", label: "Best-matched zones" },
        { src: "/project_thumbnails/youirl/map.jpg", label: "Floor plan and route" },
        { src: "/project_thumbnails/youirl/zone.jpg", label: "Play Zone activities" },
        { src: "/project_thumbnails/youirl/pinball.jpg", label: "Rooftop Pinball" },
        { src: "/project_thumbnails/youirl/clay.jpg", label: "Clay Studio" },
        { src: "/project_thumbnails/youirl/crew.jpg", label: "Find Your Crew" },
        { src: "/project_thumbnails/youirl/community.jpg", label: "Community hub" },
        { src: "/project_thumbnails/youirl/weekly.jpg", label: "Weekly in-person challenge" },
      ],
      [
        { src: "/project_thumbnails/youirl/grp_photo_before_presentation.jpg", label: "Group Photo before Presentation" },
        { src: "/project_thumbnails/youirl/Your_IRL_cert.jpg", label: "Certificate" },
        { src: "/project_thumbnails/youirl/grp_photo_with_cert.jpg", label: "Group Photo with certs" },
      ],
    ],
  },
];
