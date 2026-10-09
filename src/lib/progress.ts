import type { CourseProgress, CourseStatus } from "@/types/course";

export function calcCoursePercent(
  progress: CourseProgress,
  totalLessons: number,
): number {
  if (totalLessons <= 0) return 0;
  const sum = Object.values(progress.lessons).reduce((acc, lesson) => {
    if (lesson.completed) return acc + 1;
    return (
      acc +
      (lesson.duration > 0
        ? Math.min(lesson.maxWatched / lesson.duration, 1)
        : 0)
    );
  }, 0);
  return Math.min(100, Math.round((sum / totalLessons) * 100));
}

export function getStatus(percent: number): CourseStatus {
  if (percent >= 100) return "completed";
  return percent > 0 ? "in-progress" : "not-started";
}
