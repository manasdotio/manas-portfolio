"use client";

import { useEffect, useState } from "react";
import { playClickSound } from "./sound";

type DayData = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3;
};

type ActivityData = {
  repo: string;
  pushedAt: string;
  repoUrl?: string;
  commitMessage?: string | null;
  commitSha?: string | null;
  totalRecentCommits?: number;
  days?: DayData[];
};

function getRelativeTime(dateStr: string): string {
  const diffMs = Date.now() - new Date(dateStr).getTime();
  const diffMin = Math.floor(diffMs / 60_000);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);

  if (diffMin < 1) return "just now";
  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHr < 24) return `${diffHr}h ago`;
  if (diffDay === 1) return "yesterday";
  if (diffDay < 30) return `${diffDay}d ago`;
  return new Date(dateStr).toLocaleDateString();
}

const LEVEL_COLOR: Record<0 | 1 | 2 | 3, string> = {
  0: "bg-white/[0.06] hover:bg-white/20",
  1: "bg-blue-500/40 hover:bg-blue-500/60",
  2: "bg-blue-500/70 hover:bg-blue-500/90",
  3: "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)] hover:bg-blue-300",
};

export default function LatestPush() {
  const [data, setData] = useState<ActivityData | null>(null);

  useEffect(() => {
    fetch("/api/github-activity")
      .then((r) => r.json())
      .then((json: ActivityData) => {
        if (json.repo && json.pushedAt) {
          setData(json);
        }
      })
      .catch(() => {
        // Fail gracefully
      });
  }, []);

  if (!data) {
    return (
      <div className="w-full max-w-xl min-h-[104px] rounded-xl border border-[#212638]/50 bg-[#0c0e15]/40 p-3.5 backdrop-blur-md animate-pulse">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500/40" />
            <div className="h-3 w-36 rounded bg-white/5" />
          </div>
          <div className="h-3 w-16 rounded bg-white/5" />
        </div>
        <div className="h-6 w-3/4 rounded bg-white/5 mb-2.5" />
        <div className="h-4 w-1/2 rounded bg-white/5" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl rounded-xl border border-[#212638] bg-[#0c0e15]/85 p-3.5 backdrop-blur-md transition-all duration-300 hover:border-[#323b56] shadow-lg shadow-black/40">
      {/* Header Row: Live Status & Repo */}
      <div className="flex items-center justify-between flex-wrap gap-2 mb-2.5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>

          <span className="text-xs text-[#9ca3af]">
            Latest push to{" "}
            {data.repoUrl ? (
              <a
                href={data.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClickSound()}
                className="font-mono text-xs font-semibold text-[#60a5fa] hover:text-white underline underline-offset-2 transition-colors"
              >
                {data.repo}
              </a>
            ) : (
              <span className="font-mono text-xs font-semibold text-[#60a5fa]">
                {data.repo}
              </span>
            )}
          </span>
        </div>

        <span className="font-mono text-[11px] text-[#6b7280]">
          {getRelativeTime(data.pushedAt)}
        </span>
      </div>

      {/* Commit Message Snippet */}
      {data.commitMessage && (
        <div className="mb-3 rounded bg-[#131622] px-2.5 py-1 font-mono text-[11px] text-[#9ca3af] truncate border border-[#1e2334]">
          <span className="text-[#4b5563] mr-1.5">$ git commit -m</span>
          <span className="text-white">&ldquo;{data.commitMessage}&rdquo;</span>
        </div>
      )}

      {/* 30-Day Rolling Commit Heatmap Strip */}
      {data.days && data.days.length > 0 && (
        <div className="pt-2 border-t border-[#181d2a] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="flex items-center gap-[2px] sm:gap-[3px] max-w-full overflow-x-auto py-0.5">
            {data.days.map((day) => (
              <div
                key={day.date}
                title={`${day.date}: ${day.count} commit${day.count === 1 ? "" : "s"}`}
                className={`h-3.5 sm:h-4 w-1.5 sm:w-2 shrink-0 rounded-[1px] sm:rounded-sm transition-colors cursor-pointer ${
                  LEVEL_COLOR[day.level]
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-[#6b7280]">
            <span>
              <strong className="text-[#d1d5db] font-medium">
                {data.totalRecentCommits ?? data.days.reduce((s, d) => s + d.count, 0)}
              </strong>{" "}
              pushes in 30d
            </span>
            <span>·</span>
            <a
              href="https://github.com/manasdotio"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClickSound()}
              className="text-[#9ca3af] hover:text-[#60a5fa] transition-colors"
            >
              Profile ↗
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
