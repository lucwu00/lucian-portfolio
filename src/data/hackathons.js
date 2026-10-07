// Hackathon entries use exactly the same fields as projects.js,
// plus an optional `award` that shows as a badge on the card.
// Images go in /public/project_thumbnails/<id>/ and are referenced like "/project_thumbnails/<id>/shot.jpg".

export const hackathons = [
  {
    id: "youirl",
    title: "YOU: IRL",
    award: "🏆 1st Prize · Team Extinque",
    blurb:
      "Team Extinque's first-prize hackathon project: reimagining the MINT Museum of Toys rooftop as YOU: IRL, a youth club where visitors register with their museum ticket, get matched to themed zones, play, and meet people in real life.",
    tech: ["JavaScript", "WebGL", "Web Audio", "Vercel Serverless", "Upstash Redis"],
    features: [
      "Persona quiz that matches each visitor to the best of four zones: Play, Create, Connect and Showcase",
      "Interactive 2D floor plan with step-free routes and read-aloud directions",
      "Guided 3D walkthrough of the rooftop, built on a custom WebGL renderer, with a QR code in every room",
      "25+ playable activities, from pinball and a maze chase to a clay studio, charm bar and crew matching",
      "Community hub with crews, a looking-for-group board and in-person weekly challenge sign-ups",
      "Rooftop Pass accounts that sync online, unlocked by checking the visitor's museum ticket",
    ],
    challenge:
      "Fitting a full visitor journey, a 3D rooftop tour and dozens of mini-games into one fast web app, then resizing every room to match the real rooftop.",
    learned:
      "Turning a physical space concept into a digital journey people can test, and iterating fast on judge and user feedback as a team.",
    links: [{ label: "Live demo", url: "https://youirlluc.vercel.app" }],
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
        { src: "/project_thumbnails/youirl/tour_lobby.jpg", label: "3D tour — lift lobby" },
        { src: "/project_thumbnails/youirl/tour_play.jpg", label: "3D tour — Play Zone" },
        { src: "/project_thumbnails/youirl/tour_qr.jpg", label: "Scanning a room QR code" },
        { src: "/project_thumbnails/youirl/tour_showcase.jpg", label: "3D tour — Showcase stage" },
      ],
    ],
  },
];
