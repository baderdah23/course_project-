import type { CourseComment } from "@/types/course";

export const ANONYMOUS_AUTHOR = "Anonymous";

export const commentsKey = (slug: string) => `cp:comments:${slug}`;

export function createComment(text: string): CourseComment {
  return {
    id: `c-${Date.now()}`,
    author: ANONYMOUS_AUTHOR,
    date: new Date().toISOString(),
    text: text.trim(),
  };
}

const isComment = (value: unknown): value is CourseComment =>
  typeof value === "object" &&
  value !== null &&
  ["id", "author", "date", "text"].every(
    (key) => typeof (value as Record<string, unknown>)[key] === "string",
  );

/** Safely parses stored comments; bad data becomes an empty list. */
export function parseComments(raw: string): CourseComment[] {
  if (!raw) return [];
  try {
    const data: unknown = JSON.parse(raw);
    return Array.isArray(data) ? data.filter(isComment) : [];
  } catch {
    return [];
  }
}
