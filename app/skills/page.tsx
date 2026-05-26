import VoyagerShell from "@/components/voyager/VoyagerShell";
import { skills } from "@/data/skills";

const skillSections = [
  { key: "languages", label: "Languages", accent: "text-primary-container" },
  { key: "frontend", label: "Frontend", accent: "text-secondary" },
  { key: "backend", label: "Backend", accent: "text-terminal-green" },
  { key: "database", label: "Database", accent: "text-warning-amber" },
  { key: "devops", label: "DevOps", accent: "text-primary-fixed" },
  { key: "ai", label: "AI/ML", accent: "text-primary-container" },
  { key: "embedded", label: "Embedded", accent: "text-terminal-green" },
  { key: "design", label: "Design", accent: "text-secondary" },
] as const;

export default function SkillsPage() {
  return (
    <VoyagerShell active="skills" mainClassName="lg:ml-64" showMobileNav>
      <div className="max-w-container-max mx-auto space-y-8">
        <div className="bg-surface-container-lowest/70 backdrop-blur-md rounded-lg border border-outline-variant/30 overflow-hidden shadow-2xl relative">
          <div className="bg-surface-container-high/80 px-4 py-2 border-b border-outline-variant/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-error-red/50"></div>
                <div className="w-3 h-3 rounded-full bg-warning-amber/50"></div>
                <div className="w-3 h-3 rounded-full bg-terminal-green/50"></div>
              </div>
              <span className="ml-4 font-code-sm text-code-sm text-on-surface-variant">visitor@portfolio: ~ /skills</span>
            </div>
            <div className="text-[10px] text-on-surface-variant/50">UTC+00:00 [SYSTEM_ACTIVE]</div>
          </div>
          <div className="p-6 md:p-8 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="text-terminal-green terminal-glow">visitor@portfolio:~$</span>
              <h1 className="font-headline-lg text-headline-lg text-primary-container">tree skills/</h1>
            </div>
            <p className="text-on-surface-variant max-w-2xl leading-relaxed">
              Initializing holographic skills matrix... Mapping neural competencies across core development
              domains. System ready for data visualization.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-7 bg-surface-container-lowest/40 backdrop-blur-xl border border-primary-container/20 rounded-xl relative p-8 flex flex-col gap-6 module-card group">
            <div className="corner-accent tl"></div>
            <div className="corner-accent tr"></div>
            <div className="corner-accent bl"></div>
            <div className="corner-accent br"></div>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-label-caps font-label-caps text-primary-container mb-1 block">
                  VISUALIZER_V1.0
                </span>
                <h3 className="text-headline-lg font-headline-lg text-white">Neural Web</h3>
              </div>
              <div className="text-right">
                <span className="text-terminal-green terminal-glow block font-code-sm">
                  SYNC: 98.4%
                </span>
                <span className="text-on-surface-variant text-[10px]">CORE COMPETENCIES</span>
              </div>
            </div>
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center mx-auto">
              <div className="absolute inset-0 bg-primary-container/5 rounded-full blur-3xl hologram-pulse"></div>
              <svg
                className="w-full h-full transform -rotate-90 filter drop-shadow-[0_0_10px_rgba(0,242,255,0.2)]"
                viewBox="0 0 200 200"
              >
                <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(132, 148, 149, 0.1)" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(132, 148, 149, 0.1)" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(132, 148, 149, 0.1)" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="20" fill="none" stroke="rgba(132, 148, 149, 0.1)" strokeWidth="0.5" />
                <path d="M100 20 L169.3 60 L169.3 140 L100 180 L30.7 140 L30.7 60 Z" fill="none" stroke="rgba(0, 242, 255, 0.1)" strokeWidth="1"></path>
                <path d="M100 20 L100 180 M30.7 60 L169.3 140 M30.7 140 L169.3 60" stroke="rgba(0, 242, 255, 0.05)" strokeWidth="1"></path>
                <polygon className="hologram-pulse" fill="rgba(0, 242, 255, 0.1)" points="100,30 160,70 155,130 100,165 45,135 40,75" stroke="#00f2ff" strokeWidth="2"></polygon>
                <circle cx="100" cy="30" r="3" fill="#00f2ff"></circle>
                <circle cx="160" cy="70" r="3" fill="#00f2ff"></circle>
                <circle cx="155" cy="130" r="3" fill="#00f2ff"></circle>
                <circle cx="100" cy="165" r="3" fill="#00f2ff"></circle>
                <circle cx="45" cy="135" r="3" fill="#00f2ff"></circle>
                <circle cx="40" cy="75" r="3" fill="#00f2ff"></circle>
              </svg>
              <div className="absolute top-[5%] left-1/2 -translate-x-1/2 font-label-caps text-[10px] text-primary-container whitespace-nowrap">
                FULL STACK WEB
              </div>
              <div className="absolute top-[25%] right-[2%] font-label-caps text-[10px] text-on-surface-variant">
                AI / LLM
              </div>
              <div className="absolute bottom-[25%] right-[2%] font-label-caps text-[10px] text-on-surface-variant">
                MICRO CONTROLLERS
              </div>
              <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 font-label-caps text-[10px] text-on-surface-variant">
                DATA SYSTEMS
              </div>
              <div className="absolute bottom-[25%] left-[2%] font-label-caps text-[10px] text-on-surface-variant">
                VOYAGER OS
              </div>
              <div className="absolute top-[25%] left-[2%] font-label-caps text-[10px] text-on-surface-variant">
                UI/UX HUD
              </div>
            </div>
          </div>

          <div className="md:col-span-5 space-y-gutter">
            {skillSections.slice(0, 3).map((section) => {
              const entries = skills[section.key];
              return (
                <div
                  key={section.key}
                  className="bg-surface-container-low/60 backdrop-blur-lg border border-outline-variant/30 p-6 rounded-xl relative module-card overflow-hidden"
                >
                  <div className="corner-accent tl opacity-30"></div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`material-symbols-outlined ${section.accent}`}>memory</span>
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                      {section.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {entries.slice(0, 6).map((entry) => (
                      <span
                        key={`${section.key}-${entry.label}`}
                        className="px-3 py-1 bg-surface-container-highest/30 border border-outline/20 text-code-sm text-on-surface rounded-full"
                      >
                        {entry.label}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {skillSections.slice(3).map((section) => {
            const entries = skills[section.key];
            return (
              <div
                key={section.key}
                className="bg-surface-container-lowest/60 backdrop-blur-md border border-outline-variant/20 p-6 relative overflow-hidden group"
              >
                <div className="corner-accent tl"></div>
                <div className="corner-accent tr"></div>
                <h3 className={`font-label-caps text-label-caps mb-4 flex items-center gap-2 ${section.accent}`}>
                  {section.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {entries.map((entry) => (
                    <span
                      key={`${section.key}-${entry.label}`}
                      className="px-3 py-1 bg-surface-container-high/40 border border-outline/20 text-code-sm text-on-surface-variant rounded-full"
                    >
                      {entry.label}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-surface-container-lowest/70 backdrop-blur-md rounded-lg border border-outline-variant/30 p-6">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="font-code-sm text-on-surface-variant/60 mr-2">hints:</span>
            <button className="bg-surface-container-high border border-outline-variant/40 px-3 py-1 rounded text-code-sm text-on-surface-variant hover:border-primary-container/50 hover:text-primary-container transition-all">
              whoami
            </button>
            <button className="bg-surface-container-high border border-primary-container text-primary-container px-3 py-1 rounded text-code-sm shadow-[0_0_10px_rgba(0,242,255,0.2)]">
              tree skills/
            </button>
            <button className="bg-surface-container-high border border-outline-variant/40 px-3 py-1 rounded text-code-sm text-on-surface-variant hover:border-primary-container/50 hover:text-primary-container transition-all">
              ls projects/
            </button>
            <button className="bg-surface-container-high border border-outline-variant/40 px-3 py-1 rounded text-code-sm text-on-surface-variant hover:border-primary-container/50 hover:text-primary-container transition-all">
              ping contact
            </button>
            <button className="bg-surface-container-high border border-outline-variant/40 px-3 py-1 rounded text-code-sm text-on-surface-variant hover:border-primary-container/50 hover:text-primary-container transition-all">
              cat resume.pdf
            </button>
            <button className="bg-surface-container-high border border-outline-variant/40 px-3 py-1 rounded text-code-sm text-on-surface-variant hover:border-primary-container/50 hover:text-primary-container transition-all">
              clear
            </button>
          </div>
          <div className="mt-6 flex items-center gap-4 bg-space-void/50 p-4 rounded border border-outline-variant/20">
            <span className="text-terminal-green terminal-glow whitespace-nowrap">visitor@portfolio:~$</span>
            <div className="flex-1 flex items-center">
              <span className="text-on-surface">Type a command...</span>
              <div className="w-2.5 h-5 bg-primary-container ml-2 cursor-blink"></div>
            </div>
          </div>
        </div>
      </div>
    </VoyagerShell>
  );
}
