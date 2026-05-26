"use client";

import { useEffect, useRef, useState } from "react";
import { getReposState, getReposSync } from "@/lib/github.service";
import type { GitHubRepo } from "@/lib/github.service";
import GithubRepoCard from "./GithubRepoCard";

export default function GithubRepoGrid() {
  const [repos, setRepos] = useState<GitHubRepo[] | null>(getReposSync());
  const [error, setError] = useState<string | null>(null);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    const sub = getReposState().subscribe((state) => {
      if (!mounted.current) return;
      if (state.status === "data") setRepos(state.repos);
      else if (state.status === "error") setError(state.error);
    });
    return () => {
      mounted.current = false;
      sub.unsubscribe();
    };
  }, []);

  if (error) {
    return (
      <div className="glass-panel p-gutter rounded-lg border border-error-red/30">
        <div className="text-error-red font-code-sm font-bold mb-2">CONNECTION ERROR</div>
        <div className="text-on-surface-variant text-code-sm">{error}</div>
      </div>
    );
  }

  if (!repos) {
    return (
      <div className="glass-panel p-gutter rounded-lg text-center">
        <div className="text-terminal-green font-code-sm animate-pulse">
          Fetching repositories...
        </div>
        <div className="mt-4 w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
          <div className="h-full bg-terminal-green rounded-full animate-pulse w-1/3" />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mb-8 text-on-surface-variant font-code-sm text-code-sm">
        <span className="text-terminal-green">{repos.length}</span> repositories found
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {repos.map((repo) => (
          <GithubRepoCard key={repo.name} repo={repo} />
        ))}
      </div>
    </>
  );
}
