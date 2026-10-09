export const SITE = {
  name: "Course Player",
  description:
    "Browse our courses, start learning, and pick up exactly where you left off.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;
