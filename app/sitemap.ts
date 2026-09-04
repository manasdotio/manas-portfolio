import type { MetadataRoute } from "next";
import { PORTFOLIO_DATA } from "../data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://manassingh.dev";
  const lastModified = new Date();

  const projectUrls: MetadataRoute.Sitemap = PORTFOLIO_DATA.projects
    .filter((project) => project.enabled)
    .map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...projectUrls,
  ];
}
