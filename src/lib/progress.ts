import type { CourseStatus } from "@/types/course";

export type LessonState = "completed" | "current" | "locked";

export function getStatus(percent: number): CourseStatus {
  if (percent >= 100) return "completed";
  return percent > 0 ? "in-progress" : "not-started";
}

export function getLessonState(
  index: number,
  total: number,
  percent: number,
): LessonState {
  const completedCount = Math.floor((percent / 100) * total);
  if (index < completedCount) return "completed";
  return index === completedCount ? "current" : "locked";
}
