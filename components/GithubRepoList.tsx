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

function RepoList({ repos }: { repos: GitHubRepo[] }) {
  return (
    <div className="space-y-1 font-code-sm text-code-sm">
      <div className="text-on-surface font-bold mb-2">
        drwxr-xr-x {repos.length} repos/
      </div>
      {repos.map((r) => (
        <div key={r.name} className="flex gap-4 items-center">
          <span className="text-secondary w-40 shrink-0 truncate">{r.name}</span>
          <span className={`${statusColors[r.status]} w-28 shrink-0 text-xs`}>
            [{r.status}]
          </span>
          <span className="text-on-surface-variant truncate">
            {(r.description ?? "").slice(0, 55)}
            {(r.description ?? "").length > 55 ? "..." : ""}
          </span>
        </div>
      ))}
      <br />
      <div className="text-warning-amber mt-2">
        Run {"'open <repo-name>'"} for details
      </div>
    </div>
  );
}

export default function GithubRepoList() {
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
    return <div className="text-error-red">Error: {error}</div>;
  }

  if (!repos) {
    return <div className="text-terminal-green animate-pulse">Fetching repositories...</div>;
  }

  return <RepoList repos={repos} />;
}
