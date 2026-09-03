import { NextResponse } from "next/server";

// Cached for 1 hour. GitHub recalculates contributions daily,
// so there's no point refreshing more frequently.
export const revalidate = 3600;

// Shape of a single day returned by GitHub's GraphQL contributionCalendar
type ContributionDay = {
  date: string;        // "2025-08-04"
  contributionCount: number;
  contributionLevel:  // GitHub's 5-bucket label
    | "NONE"
    | "FIRST_QUARTILE"
    | "SECOND_QUARTILE"
    | "THIRD_QUARTILE"
    | "FOURTH_QUARTILE";
};

const GITHUB_USERNAME = "manasdotio";

const QUERY = `
  query($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    // No token in env — return empty so the component hides itself
    return NextResponse.json({ days: [] });
  }

  // Last 30 days
  const to = new Date();
  const from = new Date();
  from.setDate(from.getDate() - 29);

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: QUERY,
        variables: {
          login: GITHUB_USERNAME,
          from: from.toISOString(),
          to: to.toISOString(),
        },
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({ days: [] });
    }

    const json = await res.json();

    // Flatten the weeks → days nested structure into a flat array
    const weeks: { contributionDays: ContributionDay[] }[] =
      json?.data?.user?.contributionsCollection?.contributionCalendar?.weeks ?? [];

    const days: ContributionDay[] = weeks
      .flatMap((w) => w.contributionDays)
      // Keep only the last 30 days (the query may return slightly more due to week alignment)
      .slice(-30);

    return NextResponse.json({ days });
  } catch {
    return NextResponse.json({ days: [] });
  }
}
