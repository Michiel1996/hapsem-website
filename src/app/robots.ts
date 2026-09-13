import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

/** robots.txt — publieke site mag gecrawld worden; sitemap voor Google */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
