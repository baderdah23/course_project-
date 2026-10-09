import type { CourseProgress } from "@/types/course";
import { calcCoursePercent } from "./progress";

export const progressKey = (slug: string) => `cp:progress:${slug}`;

export function readCoursePercent(slug: string, totalLessons: number): number {
  try {
    const raw = localStorage.getItem(progressKey(slug));
    if (!raw) return 0;
    return calcCoursePercent(JSON.parse(raw) as CourseProgress, totalLessons);
  } catch {
    return 0;
  }
}

export function subscribeToStorage(onChange: () => void): () => void {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}
