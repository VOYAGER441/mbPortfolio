import { NextResponse } from "next/server";

const GITHUB_USERNAME = "VOYAGER441";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  try {
    const { name } = await params;

    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const [repoRes, languagesRes, contentsRes] = await Promise.all([
      fetch(
        `https://api.github.com/repos/${GITHUB_USERNAME}/${name}`,
        { headers, next: { revalidate: 300 } }
      ),
      fetch(
        `https://api.github.com/repos/${GITHUB_USERNAME}/${name}/languages`,
        { headers, next: { revalidate: 300 } }
      ),
      fetch(
        `https://api.github.com/repos/${GITHUB_USERNAME}/${name}/contents/`,
        { headers, next: { revalidate: 300 } }
      ),
    ]);

    if (!repoRes.ok) {
      return NextResponse.json(
        { error: `Repository '${name}' not found` },
        { status: repoRes.status }
      );
    }

    const repo = await repoRes.json();
    const languages = await languagesRes.json();

    const totalBytes = Object.values(languages as Record<string, number>).reduce(
      (sum: number, bytes: number) => sum + bytes,
      0
    );

    const languageBreakdown = Object.entries(languages as Record<string, number>)
      .map(([lang, bytes]) => ({
        name: lang,
        bytes,
        percentage: totalBytes > 0 ? Math.round((bytes / totalBytes) * 100) : 0,
      }))
      .sort((a, b) => b.bytes - a.bytes);

    let rootContents: unknown[] = [];
    if (contentsRes.ok) {
      rootContents = await contentsRes.json();
    }

    let status = "active";
    if (repo.archived) status = "archived";
    else if (repo.disabled) status = "disabled";
    else if (repo.fork) status = "fork";
    else if (repo.is_template) status = "template";

    return NextResponse.json({
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
      languages: languageBreakdown,
      rootContents: rootContents.length,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch repository details" },
      { status: 500 }
    );
  }
}
