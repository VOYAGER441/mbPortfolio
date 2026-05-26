import VoyagerShell from "@/components/voyager/VoyagerShell";
import { contact } from "@/data/contact";
import { profile } from "@/data/profile";

const networkLinks = [
  { label: "GitHub", href: contact.github, icon: "terminal" },
  { label: "LinkedIn", href: contact.linkedin, icon: "group" },
  { label: "Twitter", href: contact.twitter, icon: "alternate_email" },
  { label: "Instagram", href: contact.instagram, icon: "camera_alt" },
  { label: "YouTube", href: contact.youtube, icon: "smart_display" },
  { label: "LeetCode", href: contact.leetcode, icon: "code" },
  { label: "StackOverflow", href: contact.stackoverflow, icon: "data_object" },
  { label: "GeeksForGeeks", href: contact.geeksforgeeks, icon: "school" },
];

export default function NetworkPage() {
  return (
    <VoyagerShell active="network" mainClassName="lg:ml-64">
      <div className="max-w-container-max mx-auto space-y-8">
        <div className="bg-surface-container-lowest/70 backdrop-blur-md rounded-lg border border-outline-variant/30 overflow-hidden shadow-2xl">
          <div className="bg-surface-container-high/80 px-4 py-2 border-b border-outline-variant/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-error-red/50"></div>
                <div className="w-3 h-3 rounded-full bg-warning-amber/50"></div>
                <div className="w-3 h-3 rounded-full bg-terminal-green/50"></div>
              </div>
              <span className="ml-4 font-code-sm text-code-sm text-on-surface-variant">visitor@portfolio: ~ /network</span>
            </div>
            <div className="text-[10px] text-on-surface-variant/50">UTC+00:00 [SYSTEM_ACTIVE]</div>
          </div>
          <div className="p-6 md:p-8 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="text-terminal-green terminal-glow">visitor@portfolio:~$</span>
              <h1 className="font-headline-lg text-headline-lg text-primary-container">netstat --nodes</h1>
            </div>
            <p className="text-on-surface-variant max-w-2xl leading-relaxed">
              Scanning public endpoints and trusted nodes. Verified contact channels synchronized.
            </p>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-xl relative">
          <div className="corner-accent tl"></div>
          <div className="corner-accent tr"></div>
          <h2 className="text-primary-container font-headline-lg text-headline-lg mb-2">Operator Identity</h2>
          <p className="text-on-surface-variant mb-6">{profile.tagline}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-code-sm">
            <div className="space-y-1">
              <div className="text-on-surface-variant">Handle</div>
              <div className="text-on-surface font-bold">{profile.githubHandle}</div>
            </div>
            <div className="space-y-1">
              <div className="text-on-surface-variant">Location</div>
              <div className="text-on-surface font-bold">{profile.locationShort}</div>
            </div>
            <div className="space-y-1">
              <div className="text-on-surface-variant">Status</div>
              <div className="text-terminal-green font-bold">{profile.availability}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {networkLinks
            .filter((node) => node.href)
            .map((node) => (
              <a
                key={node.label}
                className="bg-surface-container-lowest/60 backdrop-blur-md border border-outline-variant/20 p-6 relative overflow-hidden group hover:border-primary-container/40 transition-all"
                href={node.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="corner-accent tl"></div>
                <div className="corner-accent tr"></div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-primary-container">{node.icon}</span>
                  <span className="font-label-caps text-label-caps text-on-surface-variant">{node.label}</span>
                </div>
                <div className="text-on-surface font-code-md">{node.href}</div>
                <div className="mt-4 text-terminal-green text-[10px] uppercase tracking-widest">
                  Link status: verified
                </div>
              </a>
            ))}
        </div>
      </div>
    </VoyagerShell>
  );
}
