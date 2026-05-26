import VoyagerShell from "@/components/voyager/VoyagerShell";
import { contact } from "@/data/contact";

const dataPackets = [
  { top: "8%", duration: "3.4s", delay: "0.4s" },
  { top: "18%", duration: "4.6s", delay: "1.2s" },
  { top: "30%", duration: "3.2s", delay: "2.4s" },
  { top: "42%", duration: "5.1s", delay: "0.8s" },
  { top: "55%", duration: "3.8s", delay: "1.6s" },
  { top: "66%", duration: "4.4s", delay: "2.2s" },
  { top: "78%", duration: "3.9s", delay: "0.2s" },
  { top: "88%", duration: "4.8s", delay: "1.1s" },
];

const socialNodes = [
  { label: "Twitter", href: contact.twitter, icon: "alternate_email" },
  { label: "GitHub", href: contact.github, icon: "terminal" },
  { label: "LinkedIn", href: contact.linkedin, icon: "group" },
  { label: "YouTube", href: contact.youtube, icon: "forum" },
];

export default function ContactPage() {
  return (
    <VoyagerShell active="contact" mainClassName="lg:ml-64" headerOffset footerOffset showMobileNav>
      <div className="scanlines"></div>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" id="packet-container">
        {dataPackets.map((packet, index) => (
          <span
            key={`packet-${index}`}
            className="data-packet"
            style={{ top: packet.top, animationDuration: packet.duration, animationDelay: packet.delay }}
          />
        ))}
      </div>

      <div className="max-w-container-max mx-auto relative z-10">
        <div className="mb-12">
          <h2 className="font-display-xl text-display-xl text-primary flex items-center gap-4">
            <span className="text-terminal-green">ping</span> contact
            <span className="blinking-cursor"></span>
          </h2>
          <p className="font-code-md text-code-md text-on-surface-variant mt-4 opacity-70">
            Establishing encrypted tunneling to central command. Protocols engaged.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-gutter">
          <div className="xl:col-span-8 terminal-window bg-surface-container-lowest/90 backdrop-blur-lg border border-outline-variant/30 rounded-lg overflow-hidden flex flex-col">
            <div className="bg-surface-container-high/50 px-4 py-2 flex items-center justify-between border-b border-outline-variant/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-error-red/50"></div>
                <div className="w-3 h-3 rounded-full bg-warning-amber/50"></div>
                <div className="w-3 h-3 rounded-full bg-terminal-green/50"></div>
              </div>
              <span className="font-code-sm text-code-sm text-on-surface-variant/50">comms_uplink_v2.0.sh</span>
              <div className="w-12"></div>
            </div>
            <div className="p-8 flex-1">
              <div className="mb-8 font-code-md text-code-md space-y-2">
                <p className="text-terminal-green">Initializing contact protocol...</p>
                <p className="text-on-surface-variant">
                  Target address: <span className="text-primary-container">{contact.email}</span>
                </p>
                <p className="text-on-surface-variant">
                  Encryption level: <span className="text-warning-amber">AES-256-GCM</span>
                </p>
                <p className="text-on-surface-variant">
                  Handshake status: <span className="text-terminal-green">READY</span>
                </p>
              </div>
              <form className="space-y-8">
                <div className="group relative">
                  <label className="font-label-caps text-label-caps text-primary-container/60 mb-2 block uppercase tracking-widest">
                    Identify Subject
                  </label>
                  <div className="flex items-center gap-3 border-b border-outline-variant group-focus-within:border-primary-container transition-all py-3">
                    <span className="font-code-md text-code-md text-terminal-green">visitor@portfolio:~$</span>
                    <input
                      className="bg-transparent border-none focus:ring-0 text-primary-container font-code-md text-code-md w-full placeholder:text-outline/40"
                      placeholder="Full Name"
                      type="text"
                    />
                  </div>
                </div>
                <div className="group relative">
                  <label className="font-label-caps text-label-caps text-primary-container/60 mb-2 block uppercase tracking-widest">
                    Return Frequency
                  </label>
                  <div className="flex items-center gap-3 border-b border-outline-variant group-focus-within:border-primary-container transition-all py-3">
                    <span className="font-code-md text-code-md text-terminal-green">email@remote:~$</span>
                    <input
                      className="bg-transparent border-none focus:ring-0 text-primary-container font-code-md text-code-md w-full placeholder:text-outline/40"
                      placeholder={contact.email}
                      type="email"
                    />
                  </div>
                </div>
                <div className="group relative">
                  <label className="font-label-caps text-label-caps text-primary-container/60 mb-2 block uppercase tracking-widest">
                    Payload Data
                  </label>
                  <div className="flex items-start gap-3 border-b border-outline-variant group-focus-within:border-primary-container transition-all py-3 min-h-[120px]">
                    <span className="font-code-md text-code-md text-terminal-green">msg:~$</span>
                    <textarea
                      className="bg-transparent border-none focus:ring-0 text-primary-container font-code-md text-code-md w-full placeholder:text-outline/40 resize-none h-full"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                </div>
                <div className="pt-4 flex justify-end">
                  <button
                    className="terminal-btn group relative px-12 py-4 bg-primary-container/5 hover:bg-primary-container/10 border border-primary-container/30 transition-all active:scale-95"
                    type="submit"
                  >
                    <div className="corner-accent tl"></div>
                    <div className="corner-accent br"></div>
                    <span className="font-code-md text-code-md text-primary-container flex items-center gap-3 font-bold tracking-[0.2em]">
                      EXECUTE SEND
                      <span className="material-symbols-outlined text-[20px]">send</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <div className="bg-surface-container-high/30 px-6 py-4 border-t border-outline-variant/30 flex justify-between items-center">
              <div className="flex gap-4 font-code-sm text-code-sm">
                <span className="text-terminal-green">PORT: 8080</span>
                <span className="text-on-surface-variant/40">|</span>
                <span className="text-on-surface-variant/60">PACKETS: SYNCED</span>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-terminal-green animate-pulse shadow-[0_0_8px_#4AF626]"></div>
                <div className="w-2 h-2 rounded-full bg-on-surface-variant/20"></div>
                <div className="w-2 h-2 rounded-full bg-on-surface-variant/20"></div>
              </div>
            </div>
          </div>

          <div className="xl:col-span-4 space-y-gutter">
            <div className="bg-surface-container-lowest/60 backdrop-blur-md border border-outline-variant/20 p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary-container/10 transition-colors"></div>
              <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container">dns</span>
                NODE STATUS
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="font-code-sm text-code-sm text-on-surface-variant">Global Availability</span>
                  <span className="text-terminal-green font-code-sm text-code-sm">99.9%</span>
                </div>
                <div className="w-full bg-surface-container-high h-1 overflow-hidden">
                  <div className="bg-primary-container h-full w-[99.9%] shadow-[0_0_8px_#00f2ff]"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-code-sm text-code-sm text-on-surface-variant">Current Load</span>
                  <span className="text-warning-amber font-code-sm text-code-sm">LOW</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest/60 backdrop-blur-md border border-outline-variant/20 p-8 relative overflow-hidden group">
              <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container">hub</span>
                SOCIAL NODES
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialNodes.map((node) => (
                  <a
                    key={node.label}
                    className="p-4 border border-outline-variant/30 hover:border-primary-container/50 hover:bg-primary-container/5 transition-all flex flex-col items-center gap-2 group/link"
                    href={node.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-on-surface-variant group-hover/link:text-primary-container">
                      {node.icon}
                    </span>
                    <span className="font-code-sm text-code-sm text-on-surface-variant group-hover/link:text-on-surface">
                      {node.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="h-48 rounded-lg overflow-hidden border border-outline-variant/10 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 via-transparent to-secondary-container/20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-space-void via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </VoyagerShell>
  );
}
