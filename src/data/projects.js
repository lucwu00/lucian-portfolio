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
      "Possess a separate admin dashboard for full CRUD content management, accessed through /admin/login to the original live demo url linked and the password is SingInk-Admin-2025-Secret-Token for the demo sake only. Do not alter anything of the content without permission "
    ],
    challenge:
      "Turning noisy image-recognition results into reliable, matchable printer models.",
    learned:
      "Wiring a cloud vision API into a .NET backend and normalising messy product data.",
    github: "https://github.com/lucwu00/zwe_SingInk",
    demo: "https://zwe-singink-frontend-taupe.vercel.app",
    images: [
      [{ src: "/project_thumbnails/singink/singink_customer.png", label: "Customer Site" }],
      [{ src: "/project_thumbnails/singink/singink_admin.png", label: "Admin Site" }],
    ],
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
    github: "https://github.com/lucwu00/FinSightAI",
    demo: "#",
    images: [
      [
        { src: "/project_thumbnails/finsightai/policy/finsight_policy_1.png", label: "Policy Page" },
        { src: "/project_thumbnails/finsightai/policy/finsight_policy_2.png", label: "Policy — step 2" },
        { src: "/project_thumbnails/finsightai/policy/finsight_policy_3.png", label: "Policy — step 3" },
        { src: "/project_thumbnails/finsightai/policy/finsight_policy_4.png", label: "Policy — step 4" },
      ],
      [
        { src: "/project_thumbnails/finsightai/import/finsight_import_1.png", label: "Import Page" },
        { src: "/project_thumbnails/finsightai/import/finsight_import_2.png", label: "Import — step 2" },
        { src: "/project_thumbnails/finsightai/import/finsight_import_3.png", label: "Import — step 3" },
        { src: "/project_thumbnails/finsightai/import/finsight_import_4.png", label: "Import — step 4" },
        { src: "/project_thumbnails/finsightai/import/finsight_import_5.png", label: "Import — step 5" },
      ],
    ],
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
    github: "https://github.com/lucwu00/SGHawkers",
    demo: "#",
    images: [
      [
        { src: "/project_thumbnails/sghawkers/customer/customer_mainpagescroll1.png", label: "Customer — Main Page" },
        { src: "/project_thumbnails/sghawkers/customer/customer_mainpagescroll2.png", label: "Customer — Main Page 2" },
        { src: "/project_thumbnails/sghawkers/customer/customer_mainpagescroll3.png", label: "Customer — Main Page 3" },
        { src: "/project_thumbnails/sghawkers/customer/customer_mainpagescroll4.png", label: "Customer — Main Page 4" },
        { src: "/project_thumbnails/sghawkers/customer/customer_hawkercenterselected.png", label: "Hawker Centre Selected" },
        { src: "/project_thumbnails/sghawkers/customer/customer_hawkerstallselected.png", label: "Stall Selected" },
        { src: "/project_thumbnails/sghawkers/customer/customer_hawkerstallmenu.png", label: "Stall Menu" },
        { src: "/project_thumbnails/sghawkers/customer/customer_checkingout.png", label: "Checkout" },
        { src: "/project_thumbnails/sghawkers/customer/customer_order_completed.png", label: "Order Completed" },
        { src: "/project_thumbnails/sghawkers/customer/customer_orderonhawkerside.png", label: "Order Showing Up On Hawker" },
      ],
      [
        { src: "/project_thumbnails/sghawkers/hawker/hawker_overview.png", label: "Hawker — Overview" },
        { src: "/project_thumbnails/sghawkers/hawker/hawker_orders.png", label: "Orders" },
        { src: "/project_thumbnails/sghawkers/hawker/hawker_menu.png", label: "Menu" },
        { src: "/project_thumbnails/sghawkers/hawker/hawker_inventory.png", label: "Inventory" },
        { src: "/project_thumbnails/sghawkers/hawker/hawker_cashier_pos.png", label: "Cashier POS" },
        { src: "/project_thumbnails/sghawkers/hawker/hawker_cashier_transactionlog.png", label: "Transaction Log" },
        { src: "/project_thumbnails/sghawkers/hawker/hawker_analytics.png", label: "Analytics" },
        { src: "/project_thumbnails/sghawkers/hawker/hawker_pnl.png", label: "P&L" },
        { src: "/project_thumbnails/sghawkers/hawker/hawker_promos.png", label: "Promotions" },
        { src: "/project_thumbnails/sghawkers/hawker/hawker_ecotrack.png", label: "Eco Track" },
        { src: "/project_thumbnails/sghawkers/hawker/hawker_staff_roster.png", label: "Staff Roster" },
        { src: "/project_thumbnails/sghawkers/hawker/hawker_staff_calendar.png", label: "Staff Calendar" },
      ],
    ],
  },

  {
    id: "taskflow",
    title: "TaskFlow",
    blurb:
      "An office task-scheduling app designed with the org's reporting tree",
    tech: ["React", "TypeScript", "Express", "PostgreSQL", "Prisma"],
    features: [
      "Subtree permission model: you view your reports and assign only downward to your subordinates; leaf members see just themselves",
      "Personally requested time break for personal matters will be submitted to the supervisor who will approve and sign in the schedule.",
      "Full task lifecycle with role-gated transitions, append-only audit trail, and an in-app notification inbox with comment threading for each task",
    ],
    challenge:
      "Designing one permission rule from the reporting tree that scales across every role, plus a privacy model that shows detail only inside working hours.",
    learned:
      "Separating pure, unit-tested domain logic from the Prisma/Express wiring in a typed full-stack app.",
    github: "#",
    demo: "#",
    images: [],
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
    github: "https://github.com/lucwu00/BookNotes",
    demo: "#",
    images: [
      [{ src: "/project_thumbnails/booknotes/booknotes.png", label: "BookNote - A Collection of Books I've read" }],
    ],
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
    github: "https://github.com/lucwu00/FitNest",
    demo: "#",
    images: [
      [
        { src: "/project_thumbnails/fitnest/logIn.png", label: "Log In" },
        { src: "/project_thumbnails/fitnest/register.png", label: "Register" },
        { src: "/project_thumbnails/fitnest/logBackIn.png", label: "Log Back In\nor you can use TestUser1 and TestPassword1 directly" },
        { src: "/project_thumbnails/fitnest/mainScreen.png", label: "Main Screen" },
        { src: "/project_thumbnails/fitnest/addWorkOut1.png", label: "Add Workout - 1" },
        { src: "/project_thumbnails/fitnest/addWorkOut2.png", label: "Add Workout - 2" },
        { src: "/project_thumbnails/fitnest/workOutAdded.png", label: "Workout Added" },
        { src: "/project_thumbnails/fitnest/workOutDetails.png", label: "Workout Details" },
        { src: "/project_thumbnails/fitnest/workOutDetailsWithTips.png", label: "Workout Details with Tips" },
        { src: "/project_thumbnails/fitnest/howTo_Categories.png", label: "How-To Categories" },
        { src: "/project_thumbnails/fitnest/howTo_Subcategories.png", label: "How-To Subcategories" },
        { src: "/project_thumbnails/fitnest/howTo_GeneralTips.png", label: "How-To General Tips" },
        { src: "/project_thumbnails/fitnest/userDetails.png", label: "User Details" },
        { src: "/project_thumbnails/fitnest/editUserDetails.png", label: "Edit User Details" },
      ],
    ],
  },

  {
    id: "flixvault",
    title: "FlixVault",
    blurb:
      "An Android app that fetches movies from TMDB, built with Jetpack Compose following a clean UI → ViewModel → Repository → Room flow.",
    tech: ["Kotlin", "Jetpack Compose", "Room", "TMDB API"],
    features: [
      "Home screen with popular, top-rated, now-playing, and upcoming categories",
      "Movie detail screen with a favourites button and favourites screen",
      "Search that fetches live from TMDB and caches results while the screen is open",
      "Offline support with cached movies and error handling",
    ],
    challenge:
      "Providing offline support and sensible caching while keeping a clean layered architecture.",
    learned:
      "Wiring UI, ViewModel, Repository, and Room together and consuming an external REST API in Compose.",
    github: "https://github.com/lucwu00/FlixVault",
    demo: "#",
    images: [
      [
        { src: "/project_thumbnails/flixvault/logIn.png", label: "FlixVault - Log In" },
        { src: "/project_thumbnails/flixvault/register.png", label: "FlixVault - Register" },
        { src: "/project_thumbnails/flixvault/mainTab_latestShows.png", label: "Main Tab" },
        { src: "/project_thumbnails/flixvault/movieSelected_1.png", label: "Movie Selected - 1" },
        { src: "/project_thumbnails/flixvault/movieSelected_2.png", label: "Movie Selected - 2" },
        { src: "/project_thumbnails/flixvault/movieSelected_3.png", label: "Movie Selected - 3" },
        { src: "/project_thumbnails/flixvault/movieFavoritedFromMain.png", label: "Movie Favorited from Main Tab" },
        { src: "/project_thumbnails/flixvault/favorite_movieFavoritedFromMain.png", label: "Favorite Movie Favorited from Main Tab" },
        { src: "/project_thumbnails/flixvault/movieSearchTab.png", label: "Movie Search Tab" },
        { src: "/project_thumbnails/flixvault/movieSearched_movieSearchTab.png", label: "Movie Searched in Search Tab" },
        { src: "/project_thumbnails/flixvault/movieSelectedandFavorited_FromSearchTab.png", label: "Movie Selected and Favorited from Search Tab" },
        { src: "/project_thumbnails/flixvault/favorite_movieFavoritedFromMainAndSearch.png", label: "Favorite Movie Favorited from Main and Search Tabs" },
      ],
    ],
  },

  {
    id: "pocket-pokemon",
    title: "Pocket Pokémon",
    blurb:
      "A C# console-based battle game demonstrating object-oriented programming with Entity Framework Core and a SQLite database.",
    tech: ["C#", "Entity Framework Core", "SQLite"],
    features: [
      "Capture new Pokémon or load existing ones from the database",
      "Factory pattern for consistent attributes (HP, EXP, Level, Skills)",
      "Turn-based battles where damage reduces HP until one faints",
      "Evolution logic: winners gain EXP and can upgrade to rarer Pokémon",
    ],
    challenge:
      "Modelling battle state and evolution logic while persisting everything cleanly through EF Core.",
    learned:
      "Applying OOP and the factory pattern in C#, with Entity Framework mapping classes to database tables.",
    github: "https://github.com/lucwu00/PocketPokemon",
    demo: "#",
    images: [
      // Slot 1: Overview — menu + list + evolution
      [
        { src: "/project_thumbnails/pocketpokemon/menu.png", label: "Main Menu" },
        { src: "/project_thumbnails/pocketpokemon/listPokemons.png", label: "My Pocket" },
        { src: "/project_thumbnails/pocketpokemon/checkToEvolve.png", label: "Check Evolution" },
        { src: "/project_thumbnails/pocketpokemon/evolutionRequirements.png", label: "Evolution Requirements" },
        { src: "/project_thumbnails/pocketpokemon/evolvePokemon.png", label: "Evolved to Charmeleon" },
      ],
      // Slot 2: Battle sequence (option 6) — full turn-by-turn
      [
        { src: "/project_thumbnails/pocketpokemon/battleTwoPokemons_choosePokemon1.png", label: "Battle — Choose Pokémon 1" },
        { src: "/project_thumbnails/pocketpokemon/battleTwoPokemons_choosePokemon2.png", label: "Battle — Choose Pokémon 2" },
        { src: "/project_thumbnails/pocketpokemon/battleTwoPokemons_battleStarts.png", label: "Battle Begins" },
        { src: "/project_thumbnails/pocketpokemon/battleTwoPokemons_poke1_firstAttack.png", label: "P1 First Attack" },
        { src: "/project_thumbnails/pocketpokemon/battleTwoPokemons_poke2_firstAttack.png", label: "P2 First Attack" },
        { src: "/project_thumbnails/pocketpokemon/battleTwoPokemons_poke1_secondAttack.png", label: "P1 Second Attack" },
        { src: "/project_thumbnails/pocketpokemon/battleTwoPokemons_poke2_secondAttack.png", label: "P2 Second Attack" },
        { src: "/project_thumbnails/pocketpokemon/battleTwoPokemons_poke1_thirdAttackAndWins.png", label: "P1 Wins" },
      ],
      // Slot 4: Healing + battle aftermath (option 7)
      [
        { src: "/project_thumbnails/pocketpokemon/Eevee_EXPadded_HPlowFromBattle.png", label: "After Battle: Low HP" },
        { src: "/project_thumbnails/pocketpokemon/healPokemons.png", label: "Heal All Pokémon While EXP sticks" },
        { src: "/project_thumbnails/pocketpokemon/Charmeleon_HPbackTo100_Exp0.png", label: "All Pokémon HP Back to 100 While EXP Remains the Same" },
      ],
    ],
  },

  {
    id: "hr-onboarding-payroll",
    title: "HR Onboarding & Payroll",
    blurb:
      "A console-based C# application that automates employee onboarding and payroll for a company, with a Python cost-analysis module.",
    tech: ["C#", ".NET", "Delegates", "Async", "Python"],
    features: [
      "Reads a masterlist and generates department-specific onboarding files using delegates",
      "Payroll computation by hire type (full-time, part-time, hourly) using enums and async methods",
      "Atomic masterlist updates after payroll, keeping records synchronised",
      "Python functional analysis (filter/map/reduce) for downsizing cost savings",
    ],
    challenge:
      "Keeping records consistent — updating the masterlist after async payroll processing without corrupting the file.",
    learned:
      "Applying delegates, enums, and async in C#, and bridging to Python functional programming for analytics.",
    github: "https://github.com/lucwu00/HR-Onboarding-Payroll",
    demo: "#",
    images: [
      // Section A: Onboarding — console run + delegate-generated department files
      [
        { src: "/project_thumbnails/hr-onboarding/A/hr_console_run.png", label: "A — Onboarding Run" },
        { src: "/project_thumbnails/hr-onboarding/A/hr_masterlist.png", label: "A — Source Masterlist (Breaking it down into individual relevant files)" },
        { src: "/project_thumbnails/hr-onboarding/A/hr_corporateadmin.png", label: "A — Corporate Admin File" },
        { src: "/project_thumbnails/hr-onboarding/A/hr_itdepartment.png", label: "A — IT Department File" },
        { src: "/project_thumbnails/hr-onboarding/A/hr_procurement.png", label: "A — Procurement File" },
      ],
      // Section B: Payroll — per-employee payouts + summary
      [
        { src: "/project_thumbnails/hr-onboarding/B/hr_payroll_run_1.png", label: "B — Payroll by Employee : 1" },
        { src: "/project_thumbnails/hr-onboarding/B/hr_payroll_run_2.png", label: "B — Payroll by Employee : 2" },
        { src: "/project_thumbnails/hr-onboarding/B/hr_payroll_run_3.png", label: "B — Payroll Summary" },
      ],
      // Section C: Python downsizing cost analysis
      [
        { src: "/project_thumbnails/hr-onboarding/C/hr_downsizing_retirees.png", label: "C — Retiree List" },
        { src: "/project_thumbnails/hr-onboarding/C/hr_downsizing_analysis.png", label: "C — Cost Reduction Analysis" },
      ],
    ],
  },


  {
    id: "careyourcalories",
    title: "CareYourCalories",
    blurb:
      "An AI-powered nutrition tracker that analyses food photos to estimate calories, macronutrients, and key vitamins.",
    tech: ["React", "Python", "Claude AI"],
    features: [
      "Upload or snap a meal photo for a per-item nutritional breakdown with portion estimates",
      "Daily calorie dashboard tracking intake against a goal",
      "Meal log and calendar-based history to monitor eating patterns over time",
    ],
    challenge:
      "Turning a food photo into reliable per-item nutrition estimates through a vision model.",
    learned:
      "Building a React frontend against a Python proxy server that interfaces securely with the Claude AI vision API.",
    github: "https://github.com/lucwu00/CareYourCalories",
    demo: "#",
    images: [
      [
        { src: "/project_thumbnails/careyourcalories/mainPage.png", label: "Care Your Calories" },
        { src: "/project_thumbnails/careyourcalories/setApiKey.png", label: "Step 1 : Set API Key" },
        { src: "/project_thumbnails/careyourcalories/photoUploaded.png", label: "Step 2 : Upload the photo" },
        { src: "/project_thumbnails/careyourcalories/photoAnalyzing.png", label: "Photo Being Analyzed" },
        { src: "/project_thumbnails/careyourcalories/dataReturned.png", label: "Response Returned" },
        { src: "/project_thumbnails/careyourcalories/caloriesInIndividualItem_1.png", label: "Calories Detailed from Contained Ingredients and Items - 1" },
        { src: "/project_thumbnails/careyourcalories/caloriesInIndividualItem_2.png", label: "Calories Detailed from Contained Ingredients and Items - 2" },
        { src: "/project_thumbnails/careyourcalories/macrosReturned.png", label: "Macros Calculated Overall" },
        { src: "/project_thumbnails/careyourcalories/vitaminsReturned.png", label: "Vitamins Calculated Overall" },
        { src: "/project_thumbnails/careyourcalories/loggingFoodToMeal.png", label: "Log the food" },
        { src: "/project_thumbnails/careyourcalories/foodLogged.png", label: "Food Logged for the Day" },
        { src: "/project_thumbnails/careyourcalories/foodDataStoredCalendar.png", label: "Food Data Stored for the Past 3 months" },
      ],
    ],
  },

  {
    id: "Resume2Role",
    title: "Resume2Role",
    blurb:
      "An AI-powered resume analyser that reads a resume PDF and scores how well it matches a target job description. The scored and identified jobs are also linked to Adzuna's live job postings for easy application ",
    tech: ["HTML", "CSS", "JavaScript", "Python", "Claude AI"],
    features: [
      "Upload a resume PDF and paste a job posting to compare",
      "Detailed fit score with highlighted skill gaps",
      "Suggested improvements to better align the resume with the role",
    ],
    challenge:
      "Extracting resume content from PDF and evaluating fit against a job description meaningfully.",
    learned:
      "Building a vanilla frontend against a Python proxy server interfacing with the Claude AI API.",
    github: "https://github.com/lucwu00/Resume2Role",
    demo: "#",
    images: [
      [
        { src: "/project_thumbnails/Resume2Role/userInterface.png", label: "Resume2Role" },
        { src: "/project_thumbnails/Resume2Role/uploaded.png", label: "Set Claude API Key and Upload Resume in pdf" },
        { src: "/project_thumbnails/Resume2Role/analyzed_Skills.png", label: "Identified Skills" },
        { src: "/project_thumbnails/Resume2Role/analyzed_Improvements.png", label: "Suggested Improvements" },
        { src: "/project_thumbnails/Resume2Role/analyzed_JobMatches.png", label: "Jobs Pulled and Scored from Identified Skills" },
        { src: "/project_thumbnails/Resume2Role/openingInAdzuna.png", label: "Job Opening in Adzuna for Direct Application" },
      ],
    ],
  },

  {
    id: "mentra",
    title: "Mentra",
    blurb:
      "An AI-powered study companion that turns lecture slides, PDFs, or notes into a complete personalised study kit.",
    tech: ["React", "Claude AI"],
    features: [
      "Generates flashcards, Q&A pairs, and summaries from uploaded material",
      "Socratic AI tutor, weakness tracking, and mind maps",
      "Zen Room with a Pomodoro timer and ambient sounds for focused study",
    ],
    challenge:
      "Turning arbitrary study material into varied, useful study artefacts in one workflow.",
    learned:
      "Building a multi-feature React app around AI-generated study content.",
    github: "#",
    demo: "#",
    images: [],
  },

  {
    id: "smart-home-energy-agile",
    title: "Smart Home Energy Monitor — Agile Planning",
    blurb:
      "A group software engineering project focused on Agile planning for a proposed Smart Home Energy Monitoring system, from product backlog creation and prioritisation through sprint planning and Azure DevOps tracking.",

    tech: ["Agile", "Scrum", "Azure DevOps", "Miro", "MoSCoW", "User Stories"],

    features: [
      "Created and prioritised product backlog items for two system user roles: Homeowner and System Administrator",
      "Defined user stories, acceptance criteria, implementation tasks, story points, and effort estimates",
      "Planned the product backlog across 3 sprints with a 65-hour capacity per sprint",
      "Transferred and organised backlog items and sprint plans in Azure DevOps",
      "Personally planned 5 product backlog items covering real-time usage, room/device breakdowns, daily goals, unit toggling, and usage reminders",
    ],

    challenge:
      "Balancing feature priority, story-point estimates, dependencies, and team capacity while distributing the product backlog realistically across three sprints.",

    learned:
      "Applying Agile and Scrum planning techniques to a realistic software engineering scenario, including backlog refinement, estimation, sprint planning, and work-item tracking in Azure DevOps.",

    links: [
      {
        label: "Project Report",
        url: "/project_documents/smart-home-energy-agile/agile-project-report.pdf"
      },
      {
        label: "Sprint Plan",
        url: "/project_documents/smart-home-energy-agile/sprint-plan.pdf"
      }
    ],

    images: [
      [
        {
          src: "/project_thumbnails/smartHomeEnergy_Agile/homeownerBacklog.png",
          label: "Homeowner Product Backlog — Feature Breakdown and MVP Prioritisation"
        },

        {
          src: "/project_thumbnails/smartHomeEnergy_Agile/systemAdministratorBacklog.png",
          label: "System Administrator Product Backlog — Feature Breakdown and MVP Prioritisation"
        },

        {
          src: "/project_thumbnails/smartHomeEnergy_Agile/productBacklog.png",
          label: "Product Backlog — User Stories, Acceptance Criteria, Priority and Story Points"
        },
        {
          src: "/project_thumbnails/smartHomeEnergy_Agile/sprint1Plan.png",
          label: "Sprint 1 — 65-Hour Sprint Plan"
        },
        {
          src: "/project_thumbnails/smartHomeEnergy_Agile/sprint1Tasks.png",
          label: "Sprint 1 — User Stories and Implementation Tasks"
        },
        {
          src: "/project_thumbnails/smartHomeEnergy_Agile/azureDevOpsProject.png",
          label: "Azure DevOps — Smart Home Energy Agile Project"
        },
        {
          src: "/project_thumbnails/smartHomeEnergy_Agile/azureDevOpsBacklog.png",
          label: "Azure DevOps — Product Backlog and 3-Sprint Planning"
        }
      ]
    ],
  },

  {
    id: "windows-security-kiosk",
    title: "Windows Security — Polytechnic Library Kiosks",

    blurb:
      "A group security and system administration project involving the analysis, configuration, and hardening of Windows-based library kiosks in a simulated environment using VMware Workstation.",

    tech: [
      "Windows Security", "VMware Workstation", "Local Security Policy", "Task Scheduler", "PowerShell", "System Administration"
    ],

    features: [
      "Personally implemented 3 assigned controls from a 12-item baseline security checklist, including software restriction policies, antivirus protection, and security updates",
      "Configured automatic daily shutdown through Windows Task Scheduler to reduce unauthorised after-hours access and ensure consistent system resets",
      "Developed an administrative script for modifying scheduled shutdown times when operational requirements changed",
      "Restricted shutdown privileges for the PublicUser account through Local Security Policy to prevent misuse and service disruption",
      "Documented the security configurations, implementation steps, and rationale as part of the team's security assessment report"
    ],

    challenge:
      "Applying security controls without disrupting the usability and daily operation of a shared public kiosk environment, while separating administrative privileges from public-user access.",

    learned:
      "Applying Windows security hardening and system administration concepts in a practical scenario, including access control, security policies, automated task scheduling, software restrictions, patch management, and administrative scripting.",

    links: [
      {
        label: "Project Report",
        url: "/project_documents/windows-security-kiosk/project-report.pdf"
      }
    ],

    images: [
      [
        {
          src: "/project_thumbnails/windowsSecurity_kiosk/basicSecurityChecklist.png",
          label: "Library Kiosk — Basic Security Checklist (12 Security Controls)"
        },
        {
          src: "/project_thumbnails/windowsSecurity_kiosk/basic_10.png",
          label: "Baseline Security #10 — Software Restriction Policies"
        },
        {
          src: "/project_thumbnails/windowsSecurity_kiosk/basic_11.png",
          label: "Baseline Security #11 — Antivirus Software and Updates"
        },
        {
          src: "/project_thumbnails/windowsSecurity_kiosk/basic_12.png",
          label: "Baseline Security #12 — Windows Security Updates"
        },
        {
          src: "/project_thumbnails/windowsSecurity_kiosk/libraryKioskProblemStatement.png",
          label: "Library Kiosk — Security Problem Statement"
        },
        {
          src: "/project_thumbnails/windowsSecurity_kiosk/library_10.png",
          label: "Library Kiosk Security — Task 10 Implementation of AutoShutdown Daily at 8 pm"
        },
        {
          src: "/project_thumbnails/windowsSecurity_kiosk/library_11.png",
          label: "Library Kiosk Security — Task 11 Implementation of Admin Script to Modify AutoShutdown Time"
        },
        {
          src: "/project_thumbnails/windowsSecurity_kiosk/library_12.png",
          label: "Library Kiosk Security — Task 12 Implementation of Preventing Shutdown from PublicUser Account"
        }
      ]
    ],
  },

]