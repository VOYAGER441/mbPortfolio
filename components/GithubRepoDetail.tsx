"use client";

import { useEffect, useRef, useState } from "react";
import { getReposState, getReposSync } from "@/lib/github.service";
import type { GitHubRepo } from "@/lib/github.service";

const statusColors: Record<string, string> = {
  active: "text-terminal-green",
  archived: "text-warning-amber",
  fork: "text-primary-container",
  template: "text-secondary",
  disabled: "text-error-red",
};

function RepoDetail({ repo }: { repo: GitHubRepo }) {
  return (
    <div className="my-6 relative glass-panel scanning-effect p-gutter rounded-lg text-code-sm font-code-md overflow-hidden">
      <div className="corner-accent tl" />
      <div className="corner-accent tr" />
      <div className="corner-accent bl" />
      <div className="corner-accent br" />

      <div className="flex items-center gap-2 mb-3">
        <span className="font-bold text-on-surface text-base">{repo.name}</span>
        <span className={`${statusColors[repo.status]} uppercase text-xs tracking-wider`}>
          [{repo.status}]
        </span>
        <span className={`text-[10px] font-bold uppercase ${repo.visibility === "private" ? "text-warning-amber" : "text-terminal-green"}`}>
          {repo.visibility}
        </span>
      </div>

      <p className="text-on-surface-variant mb-4 leading-relaxed">
        {repo.description ?? "No description"}
      </p>

      {repo.primaryLanguage && (
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-0.5 rounded-full text-xs border bg-space-void/50 text-primary-container border-primary-container/30">
            {repo.primaryLanguage}
          </span>
          {repo.topics.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-full text-xs border bg-space-void/50 text-secondary border-secondary/30">
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex flex-col bg-surface-container-low p-2 rounded border border-outline/20 min-w-[100px]">
          <span className="text-on-surface font-bold text-lg">{repo.stars}</span>
          <span className="text-on-surface-variant text-xs uppercase">Stars</span>
        </div>
        <div className="flex flex-col bg-surface-container-low p-2 rounded border border-outline/20 min-w-[100px]">
          <span className="text-on-surface font-bold text-lg">{repo.forks}</span>
          <span className="text-on-surface-variant text-xs uppercase">Forks</span>
        </div>
        {repo.openIssues > 0 && (
          <div className="flex flex-col bg-surface-container-low p-2 rounded border border-outline/20 min-w-[100px]">
            <span className="text-on-surface font-bold text-lg">{repo.openIssues}</span>
            <span className="text-on-surface-variant text-xs uppercase">Issues</span>
          </div>
        )}
        <div className="flex flex-col bg-surface-container-low p-2 rounded border border-outline/20 min-w-[100px]">
          <span className="text-on-surface font-bold text-lg">{repo.size >= 1024 ? `${(repo.size / 1024).toFixed(1)}M` : `${repo.size}K`}</span>
          <span className="text-on-surface-variant text-xs uppercase">Size</span>
        </div>
      </div>

      <div className="text-xs space-y-1 mb-6 text-on-surface-variant">
        <div className="flex gap-2">
          <span className="w-24 shrink-0 text-warning-amber">created:</span>
          <span>{new Date(repo.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex gap-2">
          <span className="w-24 shrink-0 text-warning-amber">updated:</span>
          <span>{new Date(repo.updatedAt).toLocaleDateString()}</span>
        </div>
        {repo.license && (
          <div className="flex gap-2">
            <span className="w-24 shrink-0 text-warning-amber">license:</span>
            <span>{repo.license}</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 text-xs pt-4 border-t border-outline/20">
        <span className="font-bold text-primary-container">→ github:</span>
        <a
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-on-surface transition-colors"
        >
          {repo.url}
        </a>
        {repo.homepage && (
          <>
            <span className="text-on-surface-variant mx-2">|</span>
            <span className="font-bold text-primary-container">live:</span>
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-on-surface transition-colors"
            >
              {repo.homepage}
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default function GithubRepoDetail({ name }: { name: string }) {
  const [repo, setRepo] = useState<GitHubRepo | undefined | null>(
    getReposSync()?.find((r) => r.name === name)
  );
  const [error, setError] = useState<string | null>(null);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    const sub = getReposState().subscribe((state) => {
      if (!mounted.current) return;
      if (state.status === "data") {
        const found = state.repos.find((r) => r.name === name);
        setRepo(found ?? null);
      } else if (state.status === "error") {
        setError(state.error);
      }
    });
    return () => {
      mounted.current = false;
      sub.unsubscribe();
    };
  }, [name]);

  if (error) return <div className="text-error-red">Error: {error}</div>;
  if (repo === undefined) return <div className="text-terminal-green animate-pulse">Loading...</div>;
  if (repo === null) return <div className="text-error-red">{`Repository '${name}' not found`}</div>;

  return <RepoDetail repo={repo} />;
}
