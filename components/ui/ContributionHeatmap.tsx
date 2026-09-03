"use client";

import { useEffect, useState } from "react";

type Day = {
  date: string;
  contributionCount: number;
  contributionLevel:
    | "NONE"
    | "FIRST_QUARTILE"
    | "SECOND_QUARTILE"
    | "THIRD_QUARTILE"
    | "FOURTH_QUARTILE";
};

// Map GitHub's 5-bucket label to a Tailwind bg class.
// Staying in the blue family to match the LatestPush badge dot.
const LEVEL_CLASS: Record<Day["contributionLevel"], string> = {
  NONE:             "bg-white/5",
  FIRST_QUARTILE:  "bg-blue-900/60",
  SECOND_QUARTILE: "bg-blue-700/70",
  THIRD_QUARTILE:  "bg-blue-500/80",
  FOURTH_QUARTILE: "bg-blue-400",
};

/**
 * Renders a 30-day contribution heatmap strip.
 * Each square is a 10×10px block; the whole row is ~330px wide.
 *
 * Returns null when:
 * - Data hasn't loaded yet (no flash of empty boxes)
 * - The API returned zero days (GITHUB_TOKEN not set)
 */
export default function ContributionHeatmap() {
  const [days, setDays] = useState<Day[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/github-heatmap")
      .then((r) => r.json())
      .then((json: { days: Day[] }) => {
        setDays(json.days ?? []);
        setLoaded(true);
      })
      .catch(() => setLoaded(true)); // still mark loaded so we don't wait forever
  }, []);

  // Don't render anything until we know what we have
  if (!loaded || days.length === 0) return null;

  const totalContributions = days.reduce((sum, d) => sum + d.contributionCount, 0);

  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="flex gap-[3px]"
        role="img"
        aria-label={`${totalContributions} contributions in the last 30 days`}
      >
        {days.map((day) => (
          <div
            key={day.date}
            title={`${day.date}: ${day.contributionCount} contribution${day.contributionCount !== 1 ? "s" : ""}`}
            className={`h-[10px] w-[10px] rounded-[2px] transition-opacity duration-150 hover:opacity-80 ${LEVEL_CLASS[day.contributionLevel]}`}
          />
        ))}
      </div>
      <p className="text-[11px] text-text-dim tracking-wide">
        {totalContributions} contributions · last 30 days
      </p>
    </div>
  );
}
