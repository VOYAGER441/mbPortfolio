import VoyagerShell from "@/components/voyager/VoyagerShell";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function VaultPage() {
  return (
    <VoyagerShell active="vault" mainClassName="lg:ml-64">
      <div className="max-w-container-max mx-auto space-y-8">
        <div className="bg-surface-container-lowest/70 backdrop-blur-md rounded-lg border border-outline-variant/30 overflow-hidden shadow-2xl">
          <div className="bg-surface-container-high/80 px-4 py-2 border-b border-outline-variant/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-error-red/50"></div>
                <div className="w-3 h-3 rounded-full bg-warning-amber/50"></div>
                <div className="w-3 h-3 rounded-full bg-terminal-green/50"></div>
              </div>
              <span className="ml-4 font-code-sm text-code-sm text-on-surface-variant">visitor@portfolio: ~ /vault</span>
            </div>
            <div className="text-[10px] text-on-surface-variant/50">UTC+00:00 [SYSTEM_ACTIVE]</div>
          </div>
          <div className="p-6 md:p-8 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="text-terminal-green terminal-glow">visitor@portfolio:~$</span>
              <h1 className="font-headline-lg text-headline-lg text-primary-container">vault ls /archives</h1>
            </div>
            <p className="text-on-surface-variant max-w-2xl leading-relaxed">
              Accessing secure artifacts... Resume archives, project manifests, and operator credentials.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          <div className="lg:col-span-2 glass-panel p-8 rounded-xl relative">
            <div className="corner-accent tl"></div>
            <div className="corner-accent tr"></div>
            <h2 className="text-primary-container font-headline-lg text-headline-lg mb-4">Resume Archive</h2>
            <p className="text-on-surface-variant mb-6">{profile.tagline}</p>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1 space-y-2 text-code-sm">
                <div className="text-on-surface-variant">Operator</div>
                <div className="text-on-surface font-bold">{profile.name}</div>
                <div className="text-on-surface-variant">{profile.role}</div>
                <div className="text-terminal-green">{profile.availability}</div>
              </div>
              <a
                className="px-6 py-3 bg-primary-container/10 border border-primary-container/30 text-primary-container font-code-md rounded-lg hover:bg-primary-container/20 transition-all active:scale-95 text-center"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                DOWNLOAD RESUME
              </a>
            </div>
          </div>

          <div className="bg-surface-container-lowest/60 backdrop-blur-md border border-outline-variant/20 p-8 rounded-xl relative overflow-hidden">
            <div className="corner-accent tl opacity-30"></div>
            <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container">folder</span>
              VAULT INDEX
            </h3>
            <div className="space-y-3 text-code-sm">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">resume.pdf</span>
                <span className="text-terminal-green">secured</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">projects.manifest</span>
                <span className="text-primary-container">{projects.length} entries</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">profile.meta</span>
                <span className="text-warning-amber">synced</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-xl relative">
          <div className="corner-accent tl"></div>
          <div className="corner-accent tr"></div>
          <div className="corner-accent bl"></div>
          <div className="corner-accent br"></div>
          <h2 className="text-primary-container font-headline-lg text-headline-lg mb-6">Project Manifests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="border border-outline/20 bg-surface-container-low/60 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-secondary font-bold text-code-md">{project.name}</span>
                  <span className="text-terminal-green text-xs">[{project.status}]</span>
                </div>
                <p className="text-on-surface-variant text-code-sm mb-4">{project.description}</p>
                <a
                  className="text-primary-container text-code-sm hover:underline"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OPEN REPOSITORY →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </VoyagerShell>
  );
}
