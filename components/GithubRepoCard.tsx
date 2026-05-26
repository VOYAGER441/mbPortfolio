import type { GitHubRepo } from "@/lib/github.service";

const statusConfig: Record<string, { label: string; color: string }> = {
  active: { label: "ACTIVE", color: "text-terminal-green border-terminal-green/30" },
  archived: { label: "ARCHIVED", color: "text-warning-amber border-warning-amber/30" },
  fork: { label: "FORK", color: "text-primary-container border-primary-container/30" },
  template: { label: "TEMPLATE", color: "text-secondary border-secondary/30" },
  disabled: { label: "DISABLED", color: "text-error-red border-error-red/30" },
};

const visibilityColor: Record<string, string> = {
  public: "text-terminal-green",
  private: "text-warning-amber",
};

function timeAgo(dateStr: string): string {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const diff = now - then;
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

function formatSize(kb: number): string {
  if (kb < 1024) return `${kb} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
}

export default function GithubRepoCard({ repo }: { repo: GitHubRepo }) {
  const status = statusConfig[repo.status] ?? statusConfig.active;
  const hasStats = repo.stars > 0 || repo.forks > 0 || repo.openIssues > 0;

  return (
    <div className="group relative glass-panel p-gutter overflow-hidden scanning-effect transition-all hover:translate-y-[-4px] hover:shadow-[0_0_30px_rgba(0,242,255,0.15)] h-auto min-h-[280px] flex flex-col">
      <div className="corner-accent tl" />
      <div className="corner-accent tr" />
      <div className="corner-accent bl" />
      <div className="corner-accent br" />

      <div className="flex items-start justify-between mb-3 gap-2">
        <h3 className="font-headline-lg text-headline-lg-mobile text-primary truncate flex-1">
          {repo.name}
        </h3>
        <div className="flex items-center gap-2 shrink-0">
          <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${status.color}`}>
            {status.label}
          </span>
          <span className={`text-[9px] font-bold uppercase ${visibilityColor[repo.visibility] ?? "text-on-surface-variant"}`}>
            {repo.visibility === "private" ? "KEY" : "PUB"}
          </span>
        </div>
      </div>

      <p className="text-on-surface-variant text-code-sm line-clamp-3 mb-4 flex-1">
        {repo.description ?? "No description"}
      </p>

      <div className="mt-auto space-y-4">
        {repo.primaryLanguage || repo.topics.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {repo.primaryLanguage && (
              <span className="px-2 py-0.5 bg-primary-container/10 border border-primary-container/20 text-[10px] text-primary-fixed font-code-sm rounded">
                {repo.primaryLanguage}
              </span>
            )}
            {repo.topics.slice(0, 3).map((topic) => (
              <span
                key={topic}
                className="px-2 py-0.5 bg-secondary-container/10 border border-secondary-container/20 text-[10px] text-secondary font-code-sm rounded"
              >
                {topic}
              </span>
            ))}
          </div>
        ) : null}

        {hasStats && (
          <div className="flex flex-wrap gap-3 text-[10px] font-code-sm text-on-surface-variant">
            {repo.stars > 0 && (
              <span className="flex items-center gap-1">
                <span className="text-terminal-green">★</span>
                {repo.stars}
              </span>
            )}
            {repo.forks > 0 && (
              <span className="flex items-center gap-1">
                <span className="text-primary-container">⑂</span>
                {repo.forks}
              </span>
            )}
            {repo.openIssues > 0 && (
              <span className="flex items-center gap-1">
                <span className="text-warning-amber">!</span>
                {repo.openIssues} issues
              </span>
            )}
            <span className="text-on-surface-variant/60">{formatSize(repo.size)}</span>
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-outline/10">
          <span className="text-[10px] text-on-surface-variant/60 font-code-sm">
            {timeAgo(repo.pushedAt)}
          </span>
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-container hover:underline font-code-sm text-sm flex items-center gap-1 group/btn"
          >
            VIEW
            <span className="material-symbols-outlined text-xs group-hover/btn:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
