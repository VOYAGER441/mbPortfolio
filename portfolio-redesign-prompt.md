# Portfolio Redesign Prompt — Terminal-Style Developer Portfolio
## For: Backend-First Full Stack Engineer

---

## 🎯 PROJECT OVERVIEW

Redesign a personal developer portfolio website into a **fully interactive, web-based terminal (CLI) experience**. The entire website should look and feel like a real terminal/shell environment running in the browser. Visitors explore the developer's profile, projects, skills, and contact info by typing commands — just like using a real terminal.

This is NOT a standard portfolio with hero sections, carousels, and cards. It IS a terminal emulator that happens to be a portfolio.

---

## 🛠️ TECH STACK

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Font:** JetBrains Mono (Google Fonts) — used exclusively throughout
- **Icons:** Lucide React (only where absolutely necessary)
- **Deployment:** Vercel

No component libraries like shadcn or MUI. Keep it custom and minimal.

---

## 🖥️ CORE DESIGN LANGUAGE

### Visual Style
- Background: `#0d1117` (GitHub dark — near black)
- Surface/panels: `#161b22`
- Borders: `#30363d`
- Primary text: `#e6edf3`
- Muted text: `#8b949e`
- Green (success/prompt): `#3fb950`
- Blue (links/info): `#79c0ff`
- Yellow (keys/titles): `#e3b341`
- Purple (project names/hashes): `#d2a8ff`
- Orange (warnings/devops): `#ffa657`
- Red (errors): `#ff7b72`

### Window Chrome
- macOS-style traffic light dots (red `#ff5f57`, yellow `#febc2e`, green `#28c840`) in top-left
- Title bar showing: `username — portfolio ~ bash`
- Thin `1px solid #30363d` border around the entire terminal window
- `border-radius: 12px` on the outer window

### Prompt Format
```
visitor@portfolio:~$ _
```
Green username, white `@portfolio:~$`, blinking green cursor

---

## 📐 LAYOUT STRUCTURE

```
┌─────────────────────────────────────────────┐
│  ● ● ●          username — portfolio        │  ← Title bar
├─────────────────────────────────────────────┤
│                                             │
│  [Boot sequence + command output area]      │  ← Scrollable output
│                                             │
├─────────────────────────────────────────────┤
│  Quick buttons: whoami | ls projects/ | ... │  ← Hint bar
├─────────────────────────────────────────────┤
│  visitor@portfolio:~$ _                     │  ← Input bar
└─────────────────────────────────────────────┘
```

The terminal should take up most of the viewport. On desktop, center it with max-width ~900px. On mobile, full width with smaller font.

---

## ⚡ BOOT SEQUENCE

When the page first loads, simulate a boot sequence with typewriter animation:

```
Initializing portfolio v2.0.0...
Loading modules: [profile] [projects] [skills] [contact]
✓ All systems operational

╔══════════════════════════════════════════════════╗
║  Welcome to YOUR_NAME's Developer Portfolio      ║
║  Backend-First Full Stack Engineer               ║
╚══════════════════════════════════════════════════╝

Type 'help' to see available commands.
```

Each line should appear with a slight delay (30–80ms per character for typewriter effect, or line-by-line with 120ms gap). Use Framer Motion or CSS animations.

---

## 💬 COMMAND SYSTEM

Build a full command parser. The input bar listens for `Enter` key. Commands are matched and output is rendered into the scrollable output area.

### Command History
- Arrow Up/Down navigates through previously typed commands (like a real shell)
- Store last 50 commands in a `useRef` array

### Tab Autocomplete
- Pressing Tab autocompletes partially typed commands
- `op` + Tab → `open ` 
- `cat sk` + Tab → `cat skills.json`

### All Supported Commands

#### `help`
Print a formatted table of all available commands with descriptions.

#### `whoami`
Display developer bio:
- Name, role, location, years of experience
- 2–3 line personal statement
- Hint to run next command

#### `ls projects/`
List all projects in a directory-listing style:
```
drwxr-xr-x  4 projects/

  ecommerce-api       [production]   High-performance REST API for e-commerce...
  realtime-chat       [production]   Scalable WebSocket chat service...
  auth-service        [open-source]  Plug-and-play auth microservice...
  devops-dashboard    [personal]     Internal ops monitoring dashboard...

Run 'open <project-name>' for full showcase
```

#### `open <project-name>`
**This is the most important command.** Renders a rich project card inline in the terminal output. See "Project Showcase Card" section below for full spec.

#### `cat skills.json`
Render skills as a pretty-printed JSON object with color-coded tag pills grouped by category:
```json
{
  "backend":  [ Node.js  Python  Go  FastAPI  Express  gRPC ],
  "database": [ PostgreSQL  MySQL  Redis  MongoDB ],
  "devops":   [ Docker  Linux  Nginx  CI/CD  Prometheus ],
  "frontend": [ Next.js  React  Tailwind  TypeScript ]
}
```

#### `cat resume.pdf`
Show a formatted resume summary:
- Education
- Work experience (2–3 roles with bullet points)
- Link to download full PDF

#### `ping contact`
Simulate a ping with 400ms delay then output:
```
PING contact.yourname.dev — sending packets...
64 bytes from contact: icmp_seq=1 ttl=64 time=0.3ms

  email      you@email.com
  github     github.com/handle
  linkedin   linkedin.com/in/handle
  website    yourname.dev

Response time: fast. Open to opportunities: yes.
```

#### `ls experience/`
Timeline of work history in a compact format.

#### `echo $availability`
Show hiring status, open to what type of work, notice period.

#### `ssh github`
Open GitHub profile in a new tab (with a fun "Establishing SSH tunnel..." message).

#### `curl -X GET /api/me`
Return a JSON response of the developer's full profile — fun Easter egg for developers who visit.

#### `sudo hire-me`
Fun Easter egg: `Permission granted. Redirecting to contact...` then scroll to contact section or open email.

#### `clear`
Clear the terminal output and re-show the boot header.

#### Unknown command
```
command not found: xyz
Did you mean: help?
```

---

## 📦 PROJECT SHOWCASE CARD

When `open <project>` is run, render a detailed card inside the terminal output. This is the core differentiator of the portfolio.

### Card Structure (top to bottom):

**1. Header Row**
- Project name (bold, white)
- Status badge: `[PRODUCTION]` (green) / `[OPEN-SOURCE]` (blue) / `[PERSONAL]` (orange)

**2. Description**
- 2–3 sentence plain-text description of what the project does and the problem it solves

**3. Tech Stack Tags**
- Color-coded pill tags grouped by type
- Backend tags: green | Database: purple | DevOps: orange | Frontend: blue

**4. Stats Row**
- 4 stat pills in a row showing key numbers:
  - e.g. `50k+ req/day`, `99.9% uptime`, `120ms avg latency`, `12 endpoints`

**5. Architecture Flow Diagram**
- Two architecture flows shown as node chains:
  - **Request Flow:** Client → Nginx → API → Cache → Database
  - **Background Flow:** Service → Queue → Worker → External
- Nodes are color-coded: client (green border), api (blue), cache (yellow), db (purple), queue (orange)
- Connected with `→` arrows

**6. API Endpoints Section**
- List of 4–6 key endpoints
- Each row: `[METHOD]  /path/here  — short description`
- Method badges color-coded: GET (blue), POST (green), PUT (orange), DELETE (red)

**7. Performance Metrics**
- 3 animated progress bars:
  - Cache hit rate
  - DB query speed (% under threshold)
  - Test coverage
- Bars animate from 0 → final value on render (CSS transition, 0.8s ease)

**8. Recent Commits**
- 4 commit log entries in format:
  ```
  a3f92c1  feat: add redis caching layer — reduces DB load 60%   (2 days ago)
  b7d14e9  fix: race condition in order checkout flow            (5 days ago)
  ```
- Hash in purple, message in white, time in gray

**9. GitHub Link**
- `→ github: github.com/you/project-name`

---

## 🎨 QUICK COMMAND BUTTONS (HINT BAR)

Below the output area, above the input, show a row of clickable shortcut buttons:

```
quick commands:  [whoami]  [ls projects/]  [cat skills.json]  [cat resume.pdf]  [ping contact]  [help]  [clear]
```

Clicking a button runs that command exactly as if typed. Style: dark background, blue text, subtle border, monospace font.

---

## 📱 MOBILE RESPONSIVENESS

- On screens < 768px: font-size 11px, reduce padding, hide some hint buttons
- The terminal should still be fully functional on mobile
- Input bar stays fixed at bottom on mobile (sticky)
- Quick buttons become horizontally scrollable

---

## ✨ ANIMATIONS & INTERACTIONS

### Boot Sequence
- Typewriter effect on initial load (line by line, 120ms gap)
- Use `useEffect` with `setTimeout` chain or Framer Motion `stagger`

### Command Output
- Each new output block slides in from bottom with `opacity: 0 → 1` + `translateY(8px → 0)` in ~200ms
- Performance bars animate width on mount (CSS transition)

### Input Cursor
- Blinking green cursor using CSS animation:
```css
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
```

### Hover States
- Hint buttons: background lightens on hover
- Links: color shift + underline

---

## 🗂️ FILE STRUCTURE

```
/app
  /page.tsx              ← Main terminal page
  /layout.tsx            ← Font import + metadata

/components
  /Terminal.tsx          ← Main terminal shell component
  /TerminalOutput.tsx    ← Renders output lines
  /TerminalInput.tsx     ← Input bar with history + autocomplete
  /TerminalBoot.tsx      ← Boot sequence animation
  /HintBar.tsx           ← Quick command buttons
  /commands/
    index.ts             ← Command registry + parser
    whoami.tsx           ← whoami output JSX
    projects.tsx         ← ls projects/ output
    ProjectCard.tsx      ← open <project> full card
    skills.tsx           ← cat skills.json output
    resume.tsx           ← cat resume.pdf output
    contact.tsx          ← ping contact output
    easter-eggs.tsx      ← sudo hire-me, curl /api/me, ssh github

/data
  /profile.ts            ← Developer bio, contact info
  /projects.ts           ← All project data (name, stack, stats, arch, commits)
  /skills.ts             ← Skills grouped by category
  /experience.ts         ← Work history

/hooks
  /useCommandHistory.ts  ← Arrow key history navigation
  /useAutocomplete.ts    ← Tab autocomplete logic
  /useBootSequence.ts    ← Boot animation state machine

/styles
  /globals.css           ← Tailwind base + JetBrains Mono import
```

---

## 📊 DATA SCHEMA

### Project Object
```typescript
interface Project {
  id: string;                    // slug used in 'open <id>'
  name: string;                  // display name
  status: 'production' | 'open-source' | 'personal';
  description: string;           // 2-3 sentences
  stack: { label: string; type: 'backend' | 'db' | 'devops' | 'frontend' }[];
  stats: { value: string; label: string }[];  // 4 items
  architecture: {
    label: string;
    nodes: { label: string; type: 'client' | 'api' | 'cache' | 'db' | 'queue' }[];
  }[];
  endpoints: { method: 'GET'|'POST'|'PUT'|'DELETE'; path: string; description: string }[];
  metrics: { label: string; value: number; color: string }[];  // 0-100
  commits: { hash: string; message: string; time: string }[];
  github: string;
  live?: string;
}
```

---

## 🔍 SEO & META

Even though it's a terminal, don't sacrifice SEO:

```tsx
// app/layout.tsx
export const metadata = {
  title: 'Your Name | Backend Engineer',
  description: 'Backend-first full stack engineer. Explore my work via terminal.',
  openGraph: {
    title: 'Your Name | Developer Portfolio',
    description: 'An interactive terminal portfolio.',
    image: '/og-image.png',  // screenshot of terminal
  }
}
```

Add a static `<noscript>` fallback with plain HTML bio for crawlers.

---

## ♿ ACCESSIBILITY

- `aria-label="terminal input"` on the input element
- `aria-live="polite"` on the output area so screen readers announce new output
- All interactive elements keyboard accessible
- Don't rely on color alone to convey meaning (use text labels alongside colored badges)

---

## 🚀 DEPLOYMENT CHECKLIST

- [ ] `next.config.js` — enable font optimization
- [ ] Vercel project linked to GitHub repo
- [ ] Custom domain configured
- [ ] `og-image.png` — 1200×630 screenshot of terminal for LinkedIn/Twitter share
- [ ] Google Search Console verified
- [ ] All project data filled in `data/` folder before deploy

---

## 📋 CONTENT TO FILL IN

Replace all placeholder values in the `data/` folder:

| Field | Value Needed |
|---|---|
| Full name | Your name |
| Role title | e.g. Backend-First Full Stack Engineer |
| Location | Your city |
| Email | your@email.com |
| GitHub URL | github.com/yourhandle |
| LinkedIn URL | linkedin.com/in/yourhandle |
| Personal website | yourname.dev |
| 4 projects | See Project schema above |
| Work history | 2–3 roles with bullet points |
| Education | Degree, university, year |
| Resume PDF | Upload to `/public/resume.pdf` |

---

## 🎯 SUCCESS CRITERIA

The finished portfolio should:

1. Load and show boot sequence within 1 second
2. All commands respond instantly (< 50ms)
3. `open <project>` renders full card with animated bars
4. Works perfectly on mobile
5. Passes Lighthouse score: Performance 90+, Accessibility 90+
6. Looks genuinely like a real terminal — not a "terminal-inspired" design
7. Makes a technical recruiter say "I've never seen a portfolio like this"

---

*Built with Next.js 14, Tailwind CSS, Framer Motion, JetBrains Mono*