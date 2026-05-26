import Link from "next/link";
import { contact } from "@/data/contact";

type ActiveSection = "home" | "projects" | "skills" | "contact" | "systems" | "network" | "vault";

interface VoyagerShellProps {
  active: ActiveSection;
  children: React.ReactNode;
  mainClassName?: string;
  headerOffset?: boolean;
  footerOffset?: boolean;
  showMobileNav?: boolean;
}

const topNavLinks = [
  { key: "home", label: "Profile", href: "/" },
  { key: "projects", label: "Projects", href: "/projects" },
  { key: "skills", label: "Skills", href: "/skills" },
  { key: "contact", label: "Contact", href: "/contact" },
] as const;

const sideNavLinks = [
  { key: "home", label: "Home", href: "/", icon: "home" },
  { key: "systems", label: "Systems", href: "/systems", icon: "settings_input_component" },
  { key: "network", label: "Network", href: "/network", icon: "lan" },
  { key: "vault", label: "Vault", href: "/vault", icon: "lock" },
] as const;

const footerLinks = [
  { label: "GitHub", href: contact.github },
  { label: "LinkedIn", href: contact.linkedin },
  { label: "Twitter", href: contact.twitter },
  { label: "YouTube", href: contact.youtube },
].filter((link) => Boolean(link.href));

const mobileNavLinks = [
  { key: "home", label: "HOME", href: "/", icon: "home" },
  { key: "projects", label: "PROJECTS", href: "/projects", icon: "terminal" },
  { key: "skills", label: "SKILLS", href: "/skills", icon: "lan" },
  { key: "contact", label: "CONTACT", href: "/contact", icon: "contact_mail" },
] as const;

export default function VoyagerShell({
  active,
  children,
  mainClassName,
  headerOffset = false,
  footerOffset = false,
  showMobileNav = false,
}: VoyagerShellProps) {
  const headerPosition = headerOffset ? "left-0 right-0 lg:left-64" : "left-0 w-full";
  const footerPosition = footerOffset ? "left-0 right-0 lg:left-64" : "left-0 w-full";

  const mainPadding = showMobileNav ? "pb-36 md:pb-28" : "pb-28";

  return (
    <div className="relative min-h-screen text-on-surface overflow-hidden">
      <div className="scanline-overlay" />
      <div className="grid-lines" />
      <header
        className={`bg-surface/70 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_0_15px_rgba(0,242,255,0.1)] flex justify-between items-center h-16 fixed top-0 z-40 px-margin-mobile md:px-margin-desktop ${headerPosition}`}
      >
        <div className="flex items-center gap-4">
          <span className="font-label-caps text-label-caps text-on-surface-variant">voyager ~ portfolio</span>
          <div className="hidden md:flex gap-6 items-center ml-8">
            {topNavLinks.map((link) => {
              const isActive = active === link.key;
              return (
                <Link
                  key={link.key}
                  href={link.href}
                  className={
                    isActive
                      ? "text-primary-container border-b-2 border-primary-container font-bold font-code-md text-code-md"
                      : "text-on-surface-variant hover:text-primary transition-colors font-code-md text-code-md hover:bg-primary-container/10 px-2 py-1"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-on-surface-variant hover:text-primary-container transition-all active:scale-95">
            settings
          </button>
          <button className="material-symbols-outlined text-on-surface-variant hover:text-primary-container transition-all active:scale-95">
            terminal
          </button>
        </div>
      </header>

      <aside className="hidden lg:flex fixed left-0 top-0 h-full w-64 flex-col bg-space-void/80 backdrop-blur-md border-r border-outline/20 z-30 pt-20">
        <div className="p-6 border-b border-outline/10">
          <h3 className="font-headline-lg text-headline-lg text-primary-container drop-shadow-[0_0_5px_#00f2ff] text-xl">
            VOYAGER-V2
          </h3>
          <p className="font-code-sm text-code-sm text-terminal-green mt-1">Systems: Operational</p>
        </div>
        <nav className="flex-1 py-4">
          {sideNavLinks.map((link) => {
            const isActive = active === link.key;
            return (
              <Link
                key={link.key}
                href={link.href}
                className={
                  isActive
                    ? "px-4 py-2 bg-primary-container/20 text-primary-fixed border-l-4 border-primary-container shadow-[inset_0_0_10px_rgba(0,242,255,0.2)] flex items-center gap-3"
                    : "px-4 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all flex items-center gap-3 group"
                }
              >
                <span className="material-symbols-outlined">{link.icon}</span>
                <span className="font-code-sm text-code-sm">{link.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 space-y-2 border-t border-outline/10">
          {/* <button className="w-full bg-primary-container/10 border border-primary-container/30 text-primary-container font-code-md py-2 px-4 hover:bg-primary-container/20 transition-all active:scale-95">
            EXECUTE CMD
          </button> */}
          <div className="flex justify-around pt-2">
            <div className="text-on-surface-variant hover:text-on-surface cursor-pointer flex flex-col items-center">
              <span className="material-symbols-outlined text-sm">description</span>
              <span className="text-[10px] uppercase font-bold">Docs</span>
            </div>
            <div className="text-on-surface-variant hover:text-on-surface cursor-pointer flex flex-col items-center">
              <span className="material-symbols-outlined text-sm">logout</span>
              <span className="text-[10px] uppercase font-bold">Logout</span>
            </div>
          </div>
        </div>
      </aside>

      <main className={`pt-24 min-h-screen px-margin-mobile md:px-margin-desktop relative ${mainPadding} ${mainClassName ?? ""}`}>
        {children}
      </main>

      <footer
        className={`relative mt-10 md:mt-0 md:fixed md:bottom-0 bg-surface-container-lowest/90 backdrop-blur-lg border-t border-terminal-green/20 px-margin-mobile md:px-margin-desktop py-4 flex justify-between items-center z-40 ${footerPosition}`}
      >
        <div className="font-code-md text-xs md:text-code-md text-terminal-green">
          visitor@portfolio:~$ <span className="animate-pulse">_</span> system --status online
        </div>
        <div className="hidden md:flex gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              className="text-on-surface-variant opacity-70 hover:opacity-100 hover:text-terminal-green hover:drop-shadow-[0_0_8px_rgba(74,246,38,0.5)] transition-all font-code-md text-code-md"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </footer>

      {showMobileNav && (
        <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest/90 backdrop-blur-lg border-t border-terminal-green/20 z-40 h-16 flex justify-around items-center px-4">
          {mobileNavLinks.map((link) => {
            const isActive = active === link.key;
            return (
              <Link
                key={link.key}
                href={link.href}
                className={`flex flex-col items-center gap-1 ${
                  isActive ? "text-terminal-green font-bold" : "text-on-surface-variant opacity-70"
                }`}
              >
                <span className="material-symbols-outlined">{link.icon}</span>
                <span className="text-[10px] font-label-caps">{link.label}</span>
              </Link>
            );
          })}
        </nav>
      )}
    </div>
  );
}
