import VoyagerShell from "@/components/voyager/VoyagerShell";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";

export default function SystemsPage() {
  return (
    <VoyagerShell active="systems" mainClassName="lg:ml-64">
      <div className="max-w-container-max mx-auto space-y-8">
        <div className="bg-surface-container-lowest/70 backdrop-blur-md rounded-lg border border-outline-variant/30 overflow-hidden shadow-2xl">
          <div className="bg-surface-container-high/80 px-4 py-2 border-b border-outline-variant/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-error-red/50"></div>
                <div className="w-3 h-3 rounded-full bg-warning-amber/50"></div>
                <div className="w-3 h-3 rounded-full bg-terminal-green/50"></div>
              </div>
              <span className="ml-4 font-code-sm text-code-sm text-on-surface-variant">visitor@portfolio: ~ /systems</span>
            </div>
            <div className="text-[10px] text-on-surface-variant/50">UTC+00:00 [SYSTEM_ACTIVE]</div>
          </div>
          <div className="p-6 md:p-8 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="text-terminal-green terminal-glow">visitor@portfolio:~$</span>
              <h1 className="font-headline-lg text-headline-lg text-primary-container">cat systems.json</h1>
            </div>
            <p className="text-on-surface-variant max-w-2xl leading-relaxed">
              Booting diagnostic suite... verifying deployments, subsystem health, and operator readiness.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          <div className="lg:col-span-2 glass-panel p-8 rounded-xl relative">
            <div className="corner-accent tl"></div>
            <div className="corner-accent tr"></div>
            <h2 className="text-primary-container font-headline-lg text-headline-lg mb-4">System Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-code-sm">
              <div className="space-y-2">
                <div className="text-on-surface-variant">Operator</div>
                <div className="text-on-surface font-bold">{profile.name}</div>
                <div className="text-on-surface-variant">{profile.role}</div>
              </div>
              <div className="space-y-2">
                <div className="text-on-surface-variant">Current Deployment</div>
                <div className="text-on-surface font-bold">{profile.currentCompany}</div>
                <div className="text-terminal-green">{profile.availability}</div>
              </div>
              <div className="space-y-2">
                <div className="text-on-surface-variant">Location</div>
                <div className="text-on-surface font-bold">{profile.location}</div>
                <div className="text-on-surface-variant">Status: Online</div>
              </div>
              <div className="space-y-2">
                <div className="text-on-surface-variant">Notice Period</div>
                <div className="text-warning-amber font-bold">{profile.noticePeriod}</div>
                <div className="text-on-surface-variant">Signal: Stable</div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest/60 backdrop-blur-md border border-outline-variant/20 p-8 rounded-xl relative overflow-hidden">
            <div className="corner-accent tl opacity-30"></div>
            <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container">terminal</span>
              SYSTEM METRICS
            </h3>
            <div className="space-y-4 text-code-sm">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Uptime</span>
                <span className="text-terminal-green">99.98%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Latency</span>
                <span className="text-warning-amber">0.41ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Build</span>
                <span className="text-primary-container">v2.7.4</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-xl relative">
          <div className="corner-accent tl"></div>
          <div className="corner-accent tr"></div>
          <div className="corner-accent bl"></div>
          <div className="corner-accent br"></div>
          <h2 className="text-primary-container font-headline-lg text-headline-lg mb-6">Active Deployments</h2>
          <div className="space-y-6">
            {experience.map((role) => (
              <div key={role.id} className="border border-outline/20 bg-surface-container-low/60 p-6 rounded-lg">
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <span className="text-secondary font-bold text-code-md">{role.company}</span>
                  <span className="text-terminal-green text-xs">{role.period}</span>
                </div>
                <div className="text-on-surface font-bold">{role.role}</div>
                <p className="text-on-surface-variant text-code-sm mt-2">{role.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {role.tech.slice(0, 6).map((tech) => (
                    <span
                      key={`${role.id}-${tech}`}
                      className="px-2 py-1 bg-surface-container-high/40 border border-outline/20 text-code-sm text-on-surface-variant rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </VoyagerShell>
  );
}
