# Portfolio Redesign Implementation Plan

## Goal Description
Redesign the existing portfolio into a fully interactive, web-based terminal (CLI) experience. The tech stack involves Next.js App Router, Tailwind CSS, Framer Motion, JetBrains Mono font, and Lucide React. The goal is to provide users an engaging CLI-like shell where commands execute actions to display developer information, projects, skills, and contacts.

## Proposed Changes

### Setup & Config
#### [MODIFY] tailwind.config.js
- Include `app`, `components`, and `data` in the `content` array.
- Add extended color palette (terminal standard: background, green, blue, yellow, purple, orange, red).

#### [MODIFY] app/globals.css
- Remove previous boilerplate CSS.
- Add standard `@tailwind` directives.
- Setup specific text selection colors, scrollbar styles (hidden/minimal for terminal feel), and `JetBrains Mono` variable import if required.

#### [MODIFY] app/layout.tsx
- Setup Google Font `JetBrains Mono` across the entire body.
- Configure SEO metadata matching the prompt (Title, Description, OpenGraph).
- Provide an accessibility `<noscript>` fallback.

---

### Data Models
#### [NEW] data/profile.ts
- Export basic developer profile details (name, role, location, bio).

#### [NEW] data/projects.ts
- Export list of projects matching the `Project` interface (including stats, architecture nodes, mock commits).

#### [NEW] data/skills.ts
- Export structured category object (backend, db, devops, frontend).

#### [NEW] data/experience.ts
- Export timeline work history data.

---

### Custom Hooks
#### [NEW] hooks/useCommandHistory.ts
- State management for terminal command history (Up/Down arrow navigation).

#### [NEW] hooks/useAutocomplete.ts
- Automate tab completion based on available commands and context.

#### [NEW] hooks/useBootSequence.ts
- Handle initial typewriter effect and loading states.
- Returns boolean when boot sequence finishes.

---

### Core UI Components
#### [NEW] components/Terminal.tsx
- Main wrapper defining window chrome (macOS traffic lights, title bar).
- Integrates Input, Output, Command execution state, and Hint Bar.

#### [NEW] components/TerminalBoot.tsx
- Animated startup text rendering.

#### [NEW] components/TerminalInput.tsx
- Input field bound to Enter key. Parses commands. Handles prefix `visitor@portfolio:~$ `. Handles blinking cursor.

#### [NEW] components/TerminalOutput.tsx
- Maps history of executed commands to their respective output JSX segments. Slides in from bottom.

#### [NEW] components/HintBar.tsx
- Row of interactive buttons that dispatch commands programmatically.

#### [NEW] components/commands/index.ts
- Defines robust command parsing logic and registry mapping string inputs to React components.

#### [NEW] components/commands/ProjectCard.tsx
- Renders rich project overview when `open <project>` is evaluated. Features Framer Motion animated progress bars and complex grid layout.

---

### Main App Views
#### [MODIFY] app/page.tsx
- Wraps the `Terminal` component.
- Uses `min-h-screen`, `bg-black`, centers terminal wrapper.

---

## Verification Plan

### Automated Tests
- The current repository doesn't seem to have automated tests configured. If possible, run `npm run lint` and `npm run build` to verify types and correct Next.js build.

### Manual Verification
- **Boot Sequence:** Open URL, verify 1s simulated load time.
- **Commands:** Execute `help`, `whoami`, `ls projects/`, `cat skills.json`, `clear`. Ensure response is < 50ms and renders correctly.
- **Autocomplete:** Type `cat s` + Tab to trigger autocomplete.
- **History:** Press UP/DOWN arrows after running a few commands.
- **Mobile View:** Resize browser to `< 768px`. Verify Input bar stays on the bottom.
- **Design:** Overall aesthetics should closely resemble GitHub dark mode terminal coloring and not look like a traditional web UI.


 opencode 
                                   ▄     
  █▀▀█ █▀▀█ █▀▀█ █▀▀▄ █▀▀▀ █▀▀█ █▀▀█ █▀▀█
  █  █ █  █ █▀▀▀ █  █ █    █  █ █  █ █▀▀▀
  ▀▀▀▀ █▀▀▀ ▀▀▀▀ ▀▀▀▀ ▀▀▀▀ ▀▀▀▀ ▀▀▀▀ ▀▀▀▀

  Session   Website redesign using portfolio-redesign-prompt.…
  Continue  opencode -s ses_2e4b7f736ffeL3TBvLToMViFLy
