import { BehaviorSubject } from "rxjs";

export interface GitHubRepo {
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

type State =
  | { status: "loading"; repos: null; error: null }
  | { status: "data"; repos: GitHubRepo[]; error: null }
  | { status: "error"; repos: null; error: string };

const state$ = new BehaviorSubject<State>({
  status: "loading",
  repos: null,
  error: null,
});

let initiated = false;

export function getReposState() {
  if (!initiated) {
    initiated = true;
    fetch("/api/github/repos")
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(
        (data: { repos: GitHubRepo[] }) => {
          state$.next({ status: "data", repos: data.repos, error: null });
        },
        (err: unknown) => {
          const msg = err instanceof Error ? err.message : "Unknown error";
          state$.next({ status: "error", repos: null, error: msg });
        }
      );
  }
  return state$.asObservable();
}

export function getReposSync(): GitHubRepo[] | null {
  const current = state$.getValue();
  return current.status === "data" ? current.repos : null;
}
