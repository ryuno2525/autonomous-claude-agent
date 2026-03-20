import type { MetadataRoute } from "next";
import { getAllPosts } from "./data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://autonomous-claude.com";
  const now = new Date();

  const blogPosts = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date + "T00:00:00Z"),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    { url: base, lastModified: now, changeFrequency: "daily", priority: 1 },
    ...blogPosts,
  ];
}
