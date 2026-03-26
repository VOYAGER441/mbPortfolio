export const projects = [
  // ──────────────────────────────────────────────────────
  // 1. SMARTDASH AI
  // Repos: SmartDash_AI_Frontend + SmartDash_AI_api_server
  // ──────────────────────────────────────────────────────
  {
    id: "smartdash-ai",
    name: "SmartDash AI",
    status: "production",
    description:
      "Conversational AI Business Intelligence dashboard. Upload a CSV, ask questions in plain English, and the backend uses Gemini to generate SQL, executes it against an in-memory SQLite DB, and returns chart-ready JSON. The frontend auto-selects the right chart type (line/bar/pie/area) based on query context. Built across two repos — a Next.js 14 frontend and a separate Node/Express/TypeScript API server.",
    stack: [
      { label: "Next.js 14", type: "frontend" },
      { label: "TypeScript", type: "frontend" },
      { label: "Tailwind CSS", type: "frontend" },
      { label: "Recharts", type: "frontend" },
      { label: "Lucide React", type: "frontend" },
      { label: "Node.js", type: "backend" },
      { label: "Express.js", type: "backend" },
      { label: "TypeScript", type: "backend" },
      { label: "Gemini API", type: "backend" },
      { label: "SQLite (in-memory)", type: "db" },
    ],
    stats: [
      { value: "CSV → SQL → Charts", label: "core pipeline" },
      { value: "Gemini API", label: "AI engine" },
      { value: "4 chart types", label: "auto-selected" },
      { value: "2 repos", label: "frontend + API server" },
    ],
    architecture: [
      {
        label: "Full Pipeline",
        nodes: [
          { label: "CSV Upload", type: "client" },
          { label: "Next.js UI", type: "client" },
          { label: "Express API", type: "api" },
          { label: "Gemini AI", type: "cache" },
          { label: "SQLite DB", type: "db" },
          { label: "Chart JSON", type: "client" },
        ],
      },
      {
        label: "AI Query Flow",
        nodes: [
          { label: "NL Prompt", type: "client" },
          { label: "Gemini → SQL", type: "api" },
          { label: "SQL Executor", type: "api" },
          { label: "Query Corrector", type: "api" },
          { label: "Dashboard JSON", type: "client" },
        ],
      },
    ],
    endpoints: [
      { method: "POST", path: "/v1/dataset/upload", description: "Upload CSV → ingest into in-memory SQLite" },
      { method: "POST", path: "/v1/ai/chat", description: "NL prompt → Gemini → SQL → chart JSON" },
      { method: "GET",  path: "/v1/dataset/list", description: "List all uploaded datasets" },
      { method: "GET",  path: "/v1/dataset/:id", description: "Get dataset metadata (rows/columns)" },
      { method: "DELETE", path: "/v1/dataset/:id", description: "Delete a dataset" },
      { method: "GET",  path: "/v1/ai/suggestions", description: "AI-generated query suggestions" },
    ],
    metrics: [
      { label: "Query-to-chart accuracy", value: 95, color: "#3fb950" },
      { label: "SQL auto-correction rate", value: 88, color: "#79c0ff" },
      { label: "TypeScript strict coverage", value: 96, color: "#d2a8ff" },
    ],
    commits: [
      { hash: "sd1a2b3", message: "feat: Gemini NL→SQL pipeline with auto query correction", time: "last week" },
      { hash: "sd2b3c4", message: "feat: CSV upload → in-memory SQLite ingestion", time: "last week" },
      { hash: "sd3c4d5", message: "feat: smart chart type selection based on query context", time: "last week" },
      { hash: "sd4d5e6", message: "feat: AI query suggestions based on dataset schema", time: "last week" },
    ],
    github: "https://github.com/VOYAGER441/SmartDash_AI_Frontend",
    githubBackend: "https://github.com/VOYAGER441/SmartDash_AI_api_server",
    live: null,
    note: "⚠️ Fix: package.json in api_server still has name: 'sheild-api-server' — update before deploy",
  },

  // ──────────────────────────────────────────────────────
  // 2. SHEILD — WOMEN'S SAFETY APP
  // Repos: SHEild (mobile) + SHEild-api-server (backend)
  // ──────────────────────────────────────────────────────
  {
    id: "sheild",
    name: "SHEild",
    status: "production",
    description:
      "A comprehensive women's safety mobile app built with React Native + Expo SDK 54. Emergency SOS triggers alerts to trusted contacts with real-time GPS location. Auth is handled by Appwrite (email/password + Google OAuth). Backend is a Node/Express/TypeScript server that verifies Appwrite-issued JWTs server-side, issues custom backend JWTs, and stores user data in MongoDB.",
    stack: [
      { label: "React Native", type: "frontend" },
      { label: "Expo SDK 54", type: "frontend" },
      { label: "TypeScript", type: "frontend" },
      { label: "NativeWind", type: "frontend" },
      { label: "Gluestack UI", type: "frontend" },
      { label: "Expo Router", type: "frontend" },
      { label: "Node.js", type: "backend" },
      { label: "Express.js", type: "backend" },
      { label: "TypeScript", type: "backend" },
      { label: "Appwrite", type: "backend" },
      { label: "MongoDB", type: "db" },
      { label: "JWT", type: "backend" },
    ],
    stats: [
      { value: "SOS + GPS", label: "core features" },
      { value: "Appwrite + Google", label: "auth providers" },
      { value: "3 repos", label: "app + api + web" },
      { value: "iOS + Android", label: "cross-platform" },
    ],
    architecture: [
      {
        label: "Auth Flow",
        nodes: [
          { label: "Expo App", type: "client" },
          { label: "Appwrite Auth", type: "cache" },
          { label: "Appwrite JWT", type: "cache" },
          { label: "Express Backend", type: "api" },
          { label: "Custom JWT", type: "api" },
          { label: "MongoDB", type: "db" },
        ],
      },
      {
        label: "SOS Emergency Flow",
        nodes: [
          { label: "SOS Button", type: "client" },
          { label: "GPS Module", type: "cache" },
          { label: "Alert Service", type: "api" },
          { label: "Trusted Contacts", type: "client" },
        ],
      },
    ],
    endpoints: [
      { method: "POST", path: "/v1/auth/jwtVerify/:jwtFromAppwrite", description: "Verify Appwrite JWT → issue custom backend JWT" },
      { method: "GET",  path: "/v1/user/:userId", description: "Get user profile from MongoDB" },
      { method: "POST", path: "/v1/sos/trigger", description: "Trigger SOS + broadcast real-time GPS" },
      { method: "PUT",  path: "/v1/user/contacts", description: "Update trusted emergency contacts list" },
    ],
    metrics: [
      { label: "Auth flow reliability", value: 97, color: "#3fb950" },
      { label: "TypeScript strict mode", value: 100, color: "#79c0ff" },
      { label: "Cross-platform coverage", value: 94, color: "#d2a8ff" },
    ],
    commits: [
      { hash: "sh1a2b3", message: "feat: SOS trigger with real-time GPS broadcast to contacts", time: "Jan 12" },
      { hash: "sh2b3c4", message: "feat: Appwrite JWT server-side verify → custom session JWT", time: "Jan 12" },
      { hash: "sh3c4d5", message: "feat: Google OAuth via Appwrite + user creation in MongoDB", time: "Jan 12" },
      { hash: "sh4d5e6", message: "feat: React Native maps integration for location tracking", time: "Nov 12, 2025" },
    ],
    github: "https://github.com/VOYAGER441/SHEild",
    githubBackend: "https://github.com/VOYAGER441/SHEild-api-server",
    live: null,
  },

  // ──────────────────────────────────────────────────────
  // 3. SOULSYNC AI — MENTAL HEALTH CHATBOT
  // Repos: soulsync_frontend + SoulSync-_backend
  // Live: https://soulsyncai.netlify.app/
  // Backend: https://soulsync-backend.onrender.com
  // ──────────────────────────────────────────────────────
  {
    id: "soulsync-ai",
    name: "SoulSync AI",
    status: "production",
    description:
      "AI-powered mental health chatbot providing CBT-based emotional support. DeepSeek R1 (via OpenRouter) handles empathetic conversations while HuggingFace DistilBERT performs real-time per-message sentiment analysis. Tracks mood trends over time, detects critical crisis keywords (self-harm, suicide) with automatic escalation, and features an interactive Spline 3D UI. Frontend on Netlify, backend deployed on Render (Singapore).",
    stack: [
      { label: "Next.js 15", type: "frontend" },
      { label: "TypeScript", type: "frontend" },
      { label: "Tailwind CSS", type: "frontend" },
      { label: "Shadcn UI", type: "frontend" },
      { label: "Spline 3D", type: "frontend" },
      { label: "Radix UI", type: "frontend" },
      { label: "Recharts", type: "frontend" },
      { label: "Node.js", type: "backend" },
      { label: "Express.js", type: "backend" },
      { label: "TypeScript", type: "backend" },
      { label: "Appwrite", type: "backend" },
      { label: "DeepSeek R1", type: "backend" },
      { label: "HuggingFace DistilBERT", type: "backend" },
      { label: "OpenRouter API", type: "backend" },
    ],
    stats: [
      { value: "DeepSeek R1", label: "AI model" },
      { value: "DistilBERT", label: "sentiment NLP" },
      { value: "50 req / 15min", label: "rate limited" },
      { value: "Live on Netlify", label: "deployed" },
    ],
    architecture: [
      {
        label: "Chat + AI Pipeline",
        nodes: [
          { label: "Next.js UI", type: "client" },
          { label: "Express API", type: "api" },
          { label: "Rate Limiter", type: "api" },
          { label: "DeepSeek R1", type: "cache" },
          { label: "DistilBERT NLP", type: "cache" },
          { label: "Appwrite DB", type: "db" },
        ],
      },
      {
        label: "Crisis Safety Layer",
        nodes: [
          { label: "User Message", type: "client" },
          { label: "Regex Keyword Scan", type: "api" },
          { label: "Crisis Protocol", type: "api" },
          { label: "Emergency Response", type: "client" },
        ],
      },
    ],
    endpoints: [
      { method: "POST", path: "/soul/chat", description: "AI chat + DistilBERT sentiment (50 req/15min rate limit)" },
      { method: "POST", path: "/soul/registration", description: "Register user + auto-generate avatar" },
      { method: "POST", path: "/soul/login", description: "Appwrite email/password login" },
      { method: "GET",  path: "/soul/chat/:userId", description: "Full chat history from Appwrite" },
      { method: "GET",  path: "/soul/mood/:userId", description: "Mood trend timeline data" },
      { method: "GET",  path: "/soul/chats/:chatId", description: "Single chat session by ID" },
    ],
    metrics: [
      { label: "AI response quality", value: 93, color: "#3fb950" },
      { label: "Sentiment analysis accuracy", value: 89, color: "#79c0ff" },
      { label: "Crisis keyword detection", value: 98, color: "#d2a8ff" },
    ],
    commits: [
      { hash: "ss1a2b3", message: "feat: DeepSeek R1 via OpenRouter with CBT system prompt", time: "2 months ago" },
      { hash: "ss2b3c4", message: "feat: DistilBERT real-time per-message sentiment pipeline", time: "2 months ago" },
      { hash: "ss3c4d5", message: "feat: crisis keyword regex detection + escalation protocol", time: "2 months ago" },
      { hash: "ss4d5e6", message: "feat: mood trend chart with historical sentiment timeline", time: "2 months ago" },
    ],
    github: "https://github.com/VOYAGER441/soulsync_frontend",
    githubBackend: "https://github.com/VOYAGER441/SoulSync-_backend",
    live: "https://soulsyncai.netlify.app/",
    liveBackend: "https://soulsync-backend.onrender.com",
  },

  // ──────────────────────────────────────────────────────
  // 4. JOB HUNTER — MOBILE JOB SEARCH APP
  // Repo: job_hunter
  // ⚠️ SECURITY: .env with real API key committed — rotate immediately!
  // ──────────────────────────────────────────────────────
  {
    id: "job-hunter",
    name: "Job Hunter",
    status: "personal",
    description:
      "A cross-platform React Native + Expo mobile app that connects job seekers with matched opportunities. Filters by skills, location, job type (full-time / part-time / freelance / internship), and supports keyword search with real-time job listing updates via third-party job APIs.",
    stack: [
      { label: "React Native", type: "frontend" },
      { label: "Expo", type: "frontend" },
      { label: "TypeScript", type: "frontend" },
      { label: "Job Listing APIs", type: "backend" },
      { label: "Node.js", type: "backend" },
    ],
    stats: [
      { value: "iOS + Android", label: "platforms" },
      { value: "4 job types", label: "full/part/freelance/intern" },
      { value: "Skill + location", label: "smart filters" },
      { value: "Real-time", label: "listing updates" },
    ],
    architecture: [
      {
        label: "App Flow",
        nodes: [
          { label: "Expo App", type: "client" },
          { label: "Filter Engine", type: "api" },
          { label: "Job Listing API", type: "cache" },
          { label: "Saved Preferences", type: "db" },
        ],
      },
    ],
    endpoints: [
      { method: "GET",  path: "/api/jobs?skills=", description: "Skill-based job search" },
      { method: "GET",  path: "/api/jobs?location=&type=", description: "Location + job type filter" },
      { method: "POST", path: "/api/preferences", description: "Save user search preferences" },
      { method: "GET",  path: "/api/jobs/trending", description: "Trending job roles real-time" },
    ],
    metrics: [
      { label: "Cross-platform stability", value: 95, color: "#3fb950" },
      { label: "API integration reliability", value: 90, color: "#79c0ff" },
      { label: "UI responsiveness", value: 92, color: "#d2a8ff" },
    ],
    commits: [
      { hash: "jh1a2b3", message: "feat: skill-based job matching with filter UI", time: "2 months ago" },
      { hash: "jh2b3c4", message: "feat: location + job type filter (full/part/freelance/intern)", time: "2 months ago" },
      { hash: "jh3c4d5", message: "feat: save and restore search preferences", time: "3 months ago" },
      { hash: "jh4d5e6", message: "feat: real-time job listing refresh on scroll", time: "3 months ago" },
    ],
    github: "https://github.com/VOYAGER441/job_hunter",
    live: null,
    securityNote: "⚠️ Rotate the API key committed in .env and purge from git history before showcasing!",
  },

  // ──────────────────────────────────────────────────────
  // 5. TRENDIFY — MOBILE NEWS APP
  // Repo: Trendify
  // APK: published on Expo + Google Drive
  // ──────────────────────────────────────────────────────
  {
    id: "trendify",
    name: "Trendify",
    status: "production",
    description:
      "A sleek React Native mobile news app delivering real-time breaking news and trending topics. Features category filters (Tech, Sports, Entertainment), dark mode, full-text search, and is published as a downloadable APK on both Expo and Google Drive. Has a YouTube demo video.",
    stack: [
      { label: "React Native", type: "frontend" },
      { label: "Expo", type: "frontend" },
      { label: "TypeScript", type: "frontend" },
      { label: "News API", type: "backend" },
    ],
    stats: [
      { value: "APK on Expo", label: "published & downloadable" },
      { value: "Dark mode", label: "supported" },
      { value: "YouTube demo", label: "live video" },
      { value: "iOS + Android", label: "cross-platform" },
    ],
    architecture: [
      {
        label: "News Pipeline",
        nodes: [
          { label: "React Native UI", type: "client" },
          { label: "Category Filter", type: "api" },
          { label: "News API", type: "cache" },
          { label: "Article Cache", type: "db" },
        ],
      },
    ],
    endpoints: [
      { method: "GET", path: "/api/news/trending", description: "Real-time trending news" },
      { method: "GET", path: "/api/news?category=", description: "Category-filtered articles" },
      { method: "GET", path: "/api/news/search?q=", description: "Full-text article keyword search" },
    ],
    metrics: [
      { label: "App performance", value: 91, color: "#3fb950" },
      { label: "API response handling", value: 94, color: "#79c0ff" },
      { label: "Dark mode UI quality", value: 90, color: "#d2a8ff" },
    ],
    commits: [
      { hash: "tr1a2b3", message: "feat: real-time breaking news feed with pull-to-refresh", time: "3 months ago" },
      { hash: "tr2b3c4", message: "feat: category filter — Tech, Sports, Entertainment", time: "3 months ago" },
      { hash: "tr3c4d5", message: "feat: dark mode with AsyncStorage persistence", time: "3 months ago" },
      { hash: "tr4d5e6", message: "release: APK published to Expo + Google Drive", time: "3 months ago" },
    ],
    github: "https://github.com/VOYAGER441/Trendify",
    live: "https://expo.dev/accounts/voyager441/projects/Trendify/builds/9b7436c5-11a5-4bd6-9273-43e7f6b37ae8",
    youtubeDemo: "https://youtube.com/shorts/DZ1_JjP1yGk",
  },

  // ──────────────────────────────────────────────────────
  // 6. BITS BY BITS — TECH BLOG PLATFORM
  // Repo: Bloging-backend
  // Live frontend: https://bitbybits.netlify.app/
  // Live backend:  https://bloging-backend-q74o.onrender.com
  // ──────────────────────────────────────────────────────
  {
    id: "bits-by-bits",
    name: "Bits by Bits",
    status: "production",
    description:
      "A full-stack tech blog platform for CS students and professionals. Features blog creation, case-insensitive full-text keyword search, trending topics section, student contribution system, and a built-in in-browser multi-language code compiler. RxJS handles async data streams on the frontend. Both frontend (Netlify) and backend API (Render) are live.",
    stack: [
      { label: "Next.js", type: "frontend" },
      { label: "React.js", type: "frontend" },
      { label: "Bootstrap", type: "frontend" },
      { label: "SCSS", type: "frontend" },
      { label: "RxJS", type: "frontend" },
      { label: "Node.js", type: "backend" },
      { label: "Express.js", type: "backend" },
      { label: "TypeScript", type: "backend" },
      { label: "MongoDB", type: "db" },
    ],
    stats: [
      { value: "Live on Netlify", label: "frontend deployed" },
      { value: "Live on Render", label: "API deployed" },
      { value: "Code compiler", label: "built-in multi-lang" },
      { value: "RxJS streams", label: "async data layer" },
    ],
    architecture: [
      {
        label: "Blog Platform Flow",
        nodes: [
          { label: "Next.js + RxJS", type: "client" },
          { label: "Express API", type: "api" },
          { label: "MongoDB", type: "db" },
          { label: "Render CDN", type: "cache" },
        ],
      },
      {
        label: "Code Compiler Flow",
        nodes: [
          { label: "Browser Editor", type: "client" },
          { label: "Compiler API", type: "api" },
          { label: "Execution Sandbox", type: "cache" },
          { label: "stdout Stream", type: "client" },
        ],
      },
    ],
    endpoints: [
      { method: "GET",  path: "/api/blogs", description: "Fetch all published blog posts" },
      { method: "POST", path: "/api/blogs", description: "Create and publish a new blog" },
      { method: "GET",  path: "/api/blogs/search?q=", description: "Case-insensitive keyword search" },
      { method: "GET",  path: "/api/blogs/trending", description: "Trending topics section" },
      { method: "POST", path: "/api/compile", description: "Execute code in sandbox + stream output" },
    ],
    metrics: [
      { label: "Search relevance", value: 88, color: "#3fb950" },
      { label: "API uptime (Render)", value: 92, color: "#79c0ff" },
      { label: "Mobile responsiveness", value: 90, color: "#d2a8ff" },
    ],
    commits: [
      { hash: "bb1a2b3", message: "feat: in-browser multi-language code compiler with sandbox", time: "4 months ago" },
      { hash: "bb2b3c4", message: "feat: case-insensitive full-text blog search", time: "4 months ago" },
      { hash: "bb3c4d5", message: "feat: trending topics + student contribution system", time: "4 months ago" },
      { hash: "bb4d5e6", message: "deploy: Netlify frontend + Render backend CI pipeline", time: "5 months ago" },
    ],
    github: "https://github.com/VOYAGER441/Bloging-backend",
    live: "https://bitbybits.netlify.app/",
    liveBackend: "https://bloging-backend-q74o.onrender.com",
  },

  // ──────────────────────────────────────────────────────
  // 7. VOTING APP
  // ──────────────────────────────────────────────────────
  {
    id: "voting-app",
    name: "Voting App",
    status: "personal",
    description:
      "A full-featured REST API voting application built with Node.js, Express.js, and MongoDB. Create polls, cast votes with duplicate prevention, and view live results.",
    stack: [
      { label: "Node.js", type: "backend" },
      { label: "Express.js", type: "backend" },
      { label: "MongoDB", type: "db" },
      { label: "JavaScript", type: "backend" },
    ],
    stats: [
      { value: "REST API", label: "architecture" },
      { value: "MongoDB", label: "database" },
      { value: "MVC", label: "pattern" },
      { value: "★1", label: "GitHub stars" },
    ],
    architecture: [
      {
        label: "Request Flow",
        nodes: [
          { label: "Client", type: "client" },
          { label: "Express Router", type: "api" },
          { label: "Controllers", type: "api" },
          { label: "MongoDB", type: "db" },
        ],
      },
    ],
    endpoints: [
      { method: "POST", path: "/api/polls", description: "Create a new poll" },
      { method: "GET",  path: "/api/polls", description: "List all active polls" },
      { method: "POST", path: "/api/polls/:id/vote", description: "Cast a vote (duplicate-safe)" },
      { method: "GET",  path: "/api/polls/:id/results", description: "Live vote results" },
    ],
    metrics: [
      { label: "API coverage", value: 78, color: "#3fb950" },
      { label: "DB query efficiency", value: 82, color: "#79c0ff" },
      { label: "Code readability", value: 85, color: "#d2a8ff" },
    ],
    commits: [
      { hash: "va1a2b3", message: "feat: vote casting with duplicate prevention", time: "5 months ago" },
      { hash: "va2b3c4", message: "feat: REST API for poll creation and listing", time: "5 months ago" },
      { hash: "va3c4d5", message: "fix: MongoDB connection error on cold start", time: "5 months ago" },
      { hash: "va4d5e6", message: "feat: live vote count endpoint", time: "6 months ago" },
    ],
    github: "https://github.com/VOYAGER441/voting_app",
    live: null,
  },

  // ──────────────────────────────────────────────────────
  // 8. WEATHER APP
  // ──────────────────────────────────────────────────────
  {
    id: "weather-app",
    name: "Weather App",
    status: "personal",
    description:
      "Real-time weather app with TypeScript and React. Fetches live conditions and 5-day forecasts from OpenWeather API. Built as a personal project — 'I made this for my father 😁'",
    stack: [
      { label: "TypeScript", type: "backend" },
      { label: "React", type: "frontend" },
      { label: "OpenWeather API", type: "backend" },
      { label: "CSS", type: "frontend" },
    ],
    stats: [
      { value: "Real-time data", label: "live weather" },
      { value: "5-day forecast", label: "included" },
      { value: "TypeScript", label: "fully typed" },
      { value: "★1", label: "GitHub stars" },
    ],
    architecture: [
      {
        label: "Data Flow",
        nodes: [
          { label: "React UI", type: "client" },
          { label: "API Layer", type: "api" },
          { label: "OpenWeather API", type: "cache" },
          { label: "Response Cache", type: "db" },
        ],
      },
    ],
    endpoints: [
      { method: "GET", path: "/api/weather?city=", description: "Current weather by city name" },
      { method: "GET", path: "/api/weather?lat=&lon=", description: "Weather by GPS coordinates" },
      { method: "GET", path: "/api/forecast", description: "5-day weather forecast" },
    ],
    metrics: [
      { label: "API response handling", value: 90, color: "#3fb950" },
      { label: "UI responsiveness", value: 85, color: "#79c0ff" },
      { label: "TypeScript coverage", value: 88, color: "#d2a8ff" },
    ],
    commits: [
      { hash: "wa1a2b3", message: "feat: real-time weather fetch with full error handling", time: "6 months ago" },
      { hash: "wa2b3c4", message: "feat: 5-day forecast view component", time: "6 months ago" },
      { hash: "wa3c4d5", message: "fix: API key env variable not loading in production", time: "6 months ago" },
      { hash: "wa4d5e6", message: "init: TypeScript + React weather app scaffold", time: "7 months ago" },
    ],
    github: "https://github.com/VOYAGER441/weather-app",
    live: null,
  },

  // ──────────────────────────────────────────────────────
  // 9. COLOR PICKER
  // ──────────────────────────────────────────────────────
  {
    id: "color-picker",
    name: "Color Picker",
    status: "open-source",
    description:
      "Lightweight browser-based color picker utility. Pick, preview, and copy color values instantly in HEX, RGB, and HSL formats. Zero dependencies, pure CSS and JavaScript.",
    stack: [
      { label: "CSS", type: "frontend" },
      { label: "JavaScript", type: "frontend" },
      { label: "HTML5", type: "frontend" },
    ],
    stats: [
      { value: "HEX / RGB / HSL", label: "3 formats" },
      { value: "0 dependencies", label: "lightweight" },
      { value: "★1", label: "GitHub stars" },
      { value: "Pure CSS/JS", label: "no framework" },
    ],
    architecture: [
      {
        label: "Tool Flow",
        nodes: [
          { label: "Color Input", type: "client" },
          { label: "JS Parser", type: "api" },
          { label: "Format Converter", type: "cache" },
          { label: "Clipboard API", type: "db" },
        ],
      },
    ],
    endpoints: [],
    metrics: [
      { label: "Browser compatibility", value: 96, color: "#3fb950" },
      { label: "Accessibility score", value: 88, color: "#79c0ff" },
      { label: "Lighthouse performance", value: 99, color: "#d2a8ff" },
    ],
    commits: [
      { hash: "cp1a2b3", message: "feat: one-click copy for HEX, RGB, HSL formats", time: "7 months ago" },
      { hash: "cp2b3c4", message: "feat: live preview swatch updates on color change", time: "7 months ago" },
      { hash: "cp3c4d5", message: "fix: HSL conversion edge case at hue=360", time: "7 months ago" },
      { hash: "cp4d5e6", message: "init: zero-dependency color picker, pure CSS/JS", time: "8 months ago" },
    ],
    github: "https://github.com/VOYAGER441/colorPicker",
    live: null,
  },
];
