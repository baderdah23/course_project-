import type { MetadataRoute } from "next";
import { courses } from "@/data/courses";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url },
    ...courses.map((c) => ({ url: `${SITE.url}/courses/${c.slug}` })),
  ];
}
