import type { MetadataRoute } from "next";
import { PORTFOLIO_DATA } from "../data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://manassingh.dev";

  const projectDates: Record<string, Date> = {
    "operating-system": new Date("2025-03-01"),
    "intentional-yt": new Date("2025-04-01"),
    "vividstream": new Date("2025-06-01"),
  };

  const projectUrls: MetadataRoute.Sitemap = PORTFOLIO_DATA.projects
    .filter((project) => project.enabled)
    .map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: projectDates[project.slug] ?? new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [
    {
      url: baseUrl,
      lastModified: new Date("2025-09-01"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...projectUrls,
  ];
}
