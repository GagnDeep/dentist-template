import { siteConfig } from "@/config/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/features",
    "/pricing",
    "/contact",
    "/faq",
    "/news",
    "/legal/privacy",
    "/legal/terms",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const newsRoutes = siteConfig.pages.news.items.map((item) => ({
    url: `${siteConfig.url}/news/${item.slug}`,
    lastModified: new Date(item.date).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...newsRoutes];
}
