// Hackathon entries use exactly the same fields as projects.js,
// plus an optional `award` that shows as a badge on the card.
// Images go in /public/project_thumbnails/<id>/ and are referenced like "/project_thumbnails/<id>/shot.jpg".

export const hackathons = [
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
