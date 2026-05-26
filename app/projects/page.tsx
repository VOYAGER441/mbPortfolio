import Image from "next/image";
import VoyagerShell from "@/components/voyager/VoyagerShell";
import { projects } from "@/data/projects";

const projectMedia: Record<string, string> = {
  "soulsync-ai":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD90V2CvcWns9AXZIoz_I_qaw2XTvY2Y8PI0nQujgVdfvIfHCMvDD6_CzfUHzKfCHGVMPtqhqc_XlFXotYk1Nl3pdmZN0napHAy9GR6hYUa4LcqsP9Ig1VfqCBnErgM1K9Wjz6uTzLBg_Cgu4UbmUIY_12BcZYjtuGYIb7rkvaDxEMl9Anm_eoAY_jKcDq6EbDjFAprDprco1NiC2M6Pr-DZvMKt94aIJGfLMMJ_VPCKqrzlUghutUO_0wv9qjVW85JZGmsnDG7rA",
  sheild:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD1L_RLk02u1p7KtEVQcc-Siefs4vvhdYHVGhKxdXx-kSHkKjWS45RAF6C8pDRT4jCvoQW59a1iZiDqQm1kRoOWvceSOJ-d8ef0GX7ci9mz62z097_ANFMIhTrh27lezeIfDqR2NEf5TvREqJosHrE0eFADOd04sELgY6Iyd9uGWeWEhgJ0WHe1kaer_xxOju1rv1M4NQa2qiVBnECE2WCI1vmEDB7jF2YLUo1kUiR7fmZoDhWl2pKgidHoEy2nUX_sLezAH6NM7A",
  "smartdash-ai":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB-MsESPKMujFoD2kkbnNJnacn8CWmwHs7nyhxdSVBspZoiQ-e8OX9AF_YZyfeLtUrtK8E9FDcH0u9_uLuKZmcz8Hi6cfA55TipUAigjup7lu3xZjczv8JoTWPJm4ZlW1jJZWxLurElcnQ01yoQrSa_27Ncj4okNGFhMl9tLQ298yCJ2R1e49AGj7c1c34MQkYWRq_tXWDjM0WnripGbWtBHOFLaaQFGsbkFDCJO9bc8VOC3y6IZBqR7xuNilqfRlNeYcOZKKPeFg",
};

const statusLabelMap: Record<string, string> = {
  production: "ACTIVE",
  "open-source": "OPEN",
  personal: "PROTOTYPE",
};

export default function ProjectsPage() {
  const featured = projects.find((project) => project.id === "sheild");
  const rest = projects.filter((project) => project.id !== "sheild");

  return (
    <VoyagerShell active="projects" mainClassName="lg:ml-64">
      <div className="max-w-container-max mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-terminal-green">visitor@portfolio:~$</span>
            <h1 className="font-headline-lg text-headline-lg">ls projects/</h1>
            <span className="w-2.5 h-6 bg-primary-container terminal-cursor"></span>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-primary-container/50 to-transparent"></div>
          <p className="mt-4 text-on-surface-variant font-code-sm max-w-2xl opacity-80">
            Querying repository index... Fetching production-ready artifacts. Displaying localized neural
            networks and automated defense systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {rest.map((project) => {
            const image = projectMedia[project.id];
            const statusLabel = statusLabelMap[project.status] ?? project.status.toUpperCase();
            const stack = project.stack.slice(0, 3);
            return (
              <div
                key={project.id}
                className="group relative glass-panel p-gutter overflow-hidden scanning-effect transition-all hover:translate-y-[-4px] hover:shadow-[0_0_30px_rgba(0,242,255,0.15)] h-auto md:h-[420px] min-h-[360px] flex flex-col"
              >
                <div className="corner-accent tl"></div>
                <div className="corner-accent tr"></div>
                <div className="corner-accent bl"></div>
                <div className="corner-accent br"></div>
                <div className="relative w-full h-40 mb-6 overflow-hidden rounded-lg">
                  {image ? (
                    <Image
                      className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100"
                      src={image}
                      alt={`${project.name} cover`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-surface-container to-surface-container-lowest" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent"></div>
                  <div className="absolute top-2 right-2 px-2 py-1 bg-surface/80 backdrop-blur-md rounded border border-outline/20 text-[10px] text-primary-container font-label-caps uppercase">
                    {statusLabel}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-headline-lg text-headline-lg-mobile text-primary mb-2">
                    {project.id}
                  </h3>
                  <p className="text-on-surface-variant text-code-sm line-clamp-3 mb-6">
                    {project.description}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {stack.map((item) => (
                      <span
                        key={`${project.id}-${item.label}`}
                        className="px-2 py-1 bg-primary-container/10 border border-primary-container/20 text-[10px] text-primary-fixed font-code-sm"
                      >
                        {item.label}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-terminal-green text-[10px] font-code-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-terminal-green animate-pulse"></span>
                      DATA_LINK: ESTABLISHED
                    </div>
                    <a
                      className="text-primary-container hover:underline font-code-sm text-sm flex items-center gap-1 group/btn"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      OPEN_SRC
                      <span className="material-symbols-outlined text-xs group-hover/btn:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}

          {featured && (
            <div className="group relative lg:col-span-2 glass-panel p-gutter overflow-hidden scanning-effect transition-all hover:shadow-[0_0_30px_rgba(235,178,255,0.15)] h-auto md:h-[420px] min-h-[380px] flex flex-col md:flex-row gap-gutter">
              <div className="corner-accent tl"></div>
              <div className="corner-accent tr"></div>
              <div className="corner-accent bl"></div>
              <div className="corner-accent br"></div>
              <div className="relative w-full md:w-1/2 h-48 md:h-full overflow-hidden rounded-lg">
                <Image
                  className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 scale-110 group-hover:scale-100"
                  src={projectMedia[featured.id]}
                  alt={`${featured.name} cover`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface-container"></div>
              </div>
              <div className="flex-1 flex flex-col justify-between py-2">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-headline-lg text-headline-lg text-secondary">
                      {featured.id}-os
                    </h3>
                    <span className="px-2 py-0.5 bg-secondary-container/20 text-secondary border border-secondary/30 text-[9px] font-bold tracking-widest uppercase">
                      Proprietary
                    </span>
                  </div>
                  <p className="text-on-surface-variant text-code-md mb-6 leading-relaxed">
                    {featured.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {featured.stats.slice(0, 2).map((stat) => (
                      <div
                        key={`${featured.id}-${stat.label}`}
                        className="p-3 bg-surface-container-low border border-outline/10 rounded"
                      >
                        <div className="text-[10px] text-on-surface-variant font-code-sm mb-1 uppercase">
                          {stat.label}
                        </div>
                        <div className="text-secondary font-bold font-code-md">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {featured.stack.slice(0, 3).map((item) => (
                      <span
                        key={`${featured.id}-${item.label}`}
                        className="px-3 py-1 bg-secondary-container/10 border border-secondary-container/20 text-[11px] text-secondary font-code-md rounded-full"
                      >
                        {item.label}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center border-t border-outline/10 pt-4">
                    <span className="text-[10px] text-on-surface-variant font-code-sm italic opacity-60">
                      Build v.4.9.2-STABLE
                    </span>
                    <a
                      className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-lg font-code-sm text-sm hover:shadow-[0_0_15px_rgba(206,93,255,0.4)] transition-all active:scale-95"
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW_DOCS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </VoyagerShell>
  );
}
