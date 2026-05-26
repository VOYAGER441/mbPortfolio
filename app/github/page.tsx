"use client";

import { useEffect, useState } from "react";
import VoyagerShell from "@/components/voyager/VoyagerShell";
import { profile } from "@/data/profile";

interface Repo {
  name: string;
  fullName: string;
  description: string | null;
  url: string;
  homepage: string | null;
  primaryLanguage: string | null;
  topics: string[];
  stars: number;
  forks: number;
  openIssues: number;
  archived: boolean;
  disabled: boolean;
  isFork: boolean;
  isTemplate: boolean;
  pushedAt: string;
  updatedAt: string;
  createdAt: string;
  license: string | null;
  size: number;
  visibility: string;
  status: "active" | "archived" | "fork" | "template" | "disabled";
}

interface ApiResponse {
  total: number;
  repos: Repo[];
}

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

export default function GitHubReposPage() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/github/repos")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json: ApiResponse) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <VoyagerShell active="github" mainClassName="lg:ml-64">
      <div className="max-w-container-max mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-terminal-green">visitor@portfolio:~$</span>
            <h1 className="font-headline-lg text-headline-lg">curl -X GET /api/github/repos</h1>
            <span className="w-2.5 h-6 bg-primary-container terminal-cursor"></span>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-primary-container/50 to-transparent"></div>
          <p className="mt-4 text-on-surface-variant font-code-sm max-w-2xl opacity-80">
            Fetching live repository index from{" "}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-container hover:underline"
            >
              github.com/{profile.githubHandle}
            </a>
            . Displaying real-time data, status, and tech stack.
          </p>
        </div>

        {loading && (
          <div className="glass-panel p-gutter rounded-lg text-center">
            <div className="text-terminal-green font-code-sm animate-pulse">
              Fetching repositories...
            </div>
            <div className="mt-4 w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
              <div className="h-full bg-terminal-green rounded-full animate-pulse w-1/3"></div>
            </div>
          </div>
        )}

        {error && (
          <div className="glass-panel p-gutter rounded-lg border border-error-red/30">
            <div className="text-error-red font-code-sm font-bold mb-2">CONNECTION ERROR</div>
            <div className="text-on-surface-variant text-code-sm">{error}</div>
          </div>
        )}

        {data && (
          <>
            <div className="mb-8 text-on-surface-variant font-code-sm text-code-sm">
              <span className="text-terminal-green">{data.total}</span> repositories found
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {data.repos.map((repo) => {
                const status = statusConfig[repo.status] ?? statusConfig.active;
                return (
                  <div
                    key={repo.name}
                    className="group relative glass-panel p-gutter overflow-hidden scanning-effect transition-all hover:translate-y-[-4px] hover:shadow-[0_0_30px_rgba(0,242,255,0.15)] h-auto min-h-[300px] flex flex-col"
                  >
                    <div className="corner-accent tl"></div>
                    <div className="corner-accent tr"></div>
                    <div className="corner-accent bl"></div>
                    <div className="corner-accent br"></div>

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

                      <div className="flex flex-wrap gap-3 text-[10px] font-code-sm text-on-surface-variant">
                        <span className="flex items-center gap-1">
                          <span className="text-terminal-green">★</span>
                          {repo.stars}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="text-primary-container">⑂</span>
                          {repo.forks}
                        </span>
                        {repo.openIssues > 0 && (
                          <span className="flex items-center gap-1">
                            <span className="text-warning-amber">!</span>
                            {repo.openIssues} issues
                          </span>
                        )}
                        <span className="text-on-surface-variant/60">
                          {formatSize(repo.size)}
                        </span>
                      </div>

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
              })}
            </div>
          </>
        )}
      </div>
    </VoyagerShell>
  );
}
