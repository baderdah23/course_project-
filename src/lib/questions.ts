import type { CourseQuestion } from "@/types/course";

export const questionsKey = (slug: string) => `cp:questions:${slug}`;

export function createQuestion(text: string): CourseQuestion {
  return {
    id: `q-${Date.now()}`,
    text: text.trim(),
    date: new Date().toISOString(),
  };
}

const isQuestion = (value: unknown): value is CourseQuestion =>
  typeof value === "object" &&
  value !== null &&
  ["id", "text", "date"].every(
    (key) => typeof (value as Record<string, unknown>)[key] === "string",
  );

export function parseQuestions(raw: string): CourseQuestion[] {
  if (!raw) return [];
  try {
    const data: unknown = JSON.parse(raw);
    return Array.isArray(data) ? data.filter(isQuestion) : [];
  } catch {
    return [];
  }
}
