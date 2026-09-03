import { NextResponse } from "next/server";

const GITHUB_USERNAME = "manasdotio";

export const revalidate = 600; // Cache for 10 minutes

export async function GET() {
  try {
    const [reposRes, eventsRes] = await Promise.all([
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&direction=desc&per_page=10`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "manas-portfolio",
          },
          next: { revalidate: 600 },
        }
      ),
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=100`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "manas-portfolio",
          },
          next: { revalidate: 600 },
        }
      ),
    ]);

    if (!reposRes.ok) {
      return NextResponse.json({ repo: null, pushedAt: null, days: [] });
    }

    const repos: Array<{
      name: string;
      pushed_at: string;
      html_url: string;
      fork: boolean;
    }> = await reposRes.json();

    const activeRepo =
      repos.find(
        (r) => r.name.toLowerCase() !== GITHUB_USERNAME.toLowerCase() && !r.fork
      ) ?? repos[0];

    if (!activeRepo) {
      return NextResponse.json({ repo: null, pushedAt: null, days: [] });
    }

    // Fetch commit message for the active repo
    let commitMessage: string | null = null;
    let commitSha: string | null = null;

    try {
      const commitRes = await fetch(
        `https://api.github.com/repos/${GITHUB_USERNAME}/${activeRepo.name}/commits?per_page=1`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "manas-portfolio",
          },
          next: { revalidate: 600 },
        }
      );

      if (commitRes.ok) {
        const commits = await commitRes.json();
        if (commits && commits.length > 0) {
          commitMessage = commits[0].commit?.message?.split("\n")[0] ?? null;
          commitSha = commits[0].sha?.slice(0, 7) ?? null;
        }
      }
    } catch {
      // Non-critical
    }

    // Process 30-day heatmap data from public push events
    const events = eventsRes.ok ? await eventsRes.json() : [];
    const pushEvents = Array.isArray(events)
      ? events.filter((e) => e.type === "PushEvent")
      : [];

    const countsByDate: Record<string, number> = {};
    pushEvents.forEach((e) => {
      const d = e.created_at?.slice(0, 10);
      if (d) {
        const commitCount = e.payload?.commits?.length || 1;
        countsByDate[d] = (countsByDate[d] || 0) + commitCount;
      }
    });

    // Make sure today's active push is represented
    const todayStr = new Date().toISOString().slice(0, 10);
    if (!countsByDate[todayStr]) {
      countsByDate[todayStr] = 1;
    }

    // Generate 30 consecutive days (oldest to newest)
    const days: Array<{
      date: string;
      count: number;
      level: 0 | 1 | 2 | 3;
    }> = [];

    const today = new Date();
    for (let i = 29; i >= 0; i--) {
      const d = new Date();
      d.setDate(today.getDate() - i);
      const dateStr = d.toISOString().slice(0, 10);
      const count = countsByDate[dateStr] || 0;

      let level: 0 | 1 | 2 | 3 = 0;
      if (count > 0) {
        if (count === 1) level = 1;
        else if (count <= 3) level = 2;
        else level = 3;
      }

      days.push({ date: dateStr, count, level });
    }

    const totalRecentCommits = days.reduce((sum, d) => sum + d.count, 0);

    return NextResponse.json({
      repo: activeRepo.name,
      pushedAt: activeRepo.pushed_at,
      repoUrl: activeRepo.html_url,
      commitMessage,
      commitSha,
      totalRecentCommits,
      days,
    });
  } catch {
    return NextResponse.json({ repo: null, pushedAt: null, days: [] });
  }
}
