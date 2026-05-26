"use client";

import VoyagerShell from "@/components/voyager/VoyagerShell";
import GithubRepoGrid from "@/components/GithubRepoGrid";
import { profile } from "@/data/profile";

export default function ProjectsPage() {
  return (
    <VoyagerShell active="projects" mainClassName="lg:ml-64">
      <div className="max-w-container-max mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-terminal-green">visitor@portfolio:~$</span>
            <h1 className="font-headline-lg text-headline-lg">curl -X GET /api/github/repos</h1>
            <span className="w-2.5 h-6 bg-primary-container terminal-cursor" />
          </div>
          <div className="h-px w-full bg-gradient-to-r from-primary-container/50 to-transparent" />
          <p className="mt-4 text-on-surface-variant font-code-sm max-w-2xl opacity-80">
            Live repository index from{" "}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-container hover:underline"
            >
              github.com/{profile.githubHandle}
            </a>
            . Data fetched in real-time — stars, forks, tech stack, and status.
          </p>
        </div>

        <GithubRepoGrid />
      </div>
    </VoyagerShell>
  );
}
