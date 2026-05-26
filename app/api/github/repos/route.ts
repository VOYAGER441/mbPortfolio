import { NextResponse } from "next/server";

const GITHUB_USERNAME = "VOYAGER441";

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  archived: boolean;
  disabled: boolean;
  fork: boolean;
  is_template: boolean;
  pushed_at: string;
  updated_at: string;
  created_at: string;
  license: { spdx_id: string } | null;
  default_branch: string;
  size: number;
  visibility: string;
}

interface TransformedRepo {
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
  defaultBranch: string;
  size: number;
  visibility: string;
  status: "active" | "archived" | "fork" | "template" | "disabled";
}

export async function GET() {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const perPage = 100;
    let page = 1;
    let allRepos: GitHubRepo[] = [];

    while (true) {
      const res = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=${perPage}&page=${page}&sort=updated&direction=desc`,
        { headers, next: { revalidate: 300 } }
      );

      if (!res.ok) {
        return NextResponse.json(
          { error: `GitHub API responded with ${res.status}` },
          { status: res.status }
        );
      }

      const repos: GitHubRepo[] = await res.json();
      if (repos.length === 0) break;

      allRepos = allRepos.concat(repos);
      page++;
    }

    const transformed: TransformedRepo[] = allRepos.map((repo) => {
      let status: TransformedRepo["status"] = "active";
      if (repo.archived) status = "archived";
      else if (repo.disabled) status = "disabled";
      else if (repo.fork) status = "fork";
      else if (repo.is_template) status = "template";

      return {
        name: repo.name,
        fullName: repo.full_name,
        description: repo.description,
        url: repo.html_url,
        homepage: repo.homepage,
        primaryLanguage: repo.language,
        topics: repo.topics,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        openIssues: repo.open_issues_count,
        archived: repo.archived,
        disabled: repo.disabled,
        isFork: repo.fork,
        isTemplate: repo.is_template,
        pushedAt: repo.pushed_at,
        updatedAt: repo.updated_at,
        createdAt: repo.created_at,
        license: repo.license?.spdx_id ?? null,
        defaultBranch: repo.default_branch,
        size: repo.size,
        visibility: repo.visibility,
        status,
      };
    });

    return NextResponse.json({
      total: transformed.length,
      repos: transformed,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch GitHub repos" },
      { status: 500 }
    );
  }
}
