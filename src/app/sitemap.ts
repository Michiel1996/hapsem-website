import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0 },
    { path: "/over-de-praktijk", priority: 0.8 },
    { path: "/team", priority: 0.9 },
    { path: "/sportgeneeskunde", priority: 0.9 },
    { path: "/praktische-info", priority: 0.7 },
    { path: "/videoconsultaties", priority: 0.6 },
    { path: "/wachtdienst", priority: 0.6 },
    { path: "/helena", priority: 0.5 },
    { path: "/faq", priority: 0.6 },
    { path: "/contact", priority: 0.9 },
    { path: "/privacy", priority: 0.3 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
