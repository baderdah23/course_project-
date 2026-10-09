"use client";

import { useSyncExternalStore } from "react";
import { readCoursePercent, subscribeToStorage } from "@/lib/storage";

export function useCoursePercent(slug: string, totalLessons: number): number {
  return useSyncExternalStore(
    subscribeToStorage,
    () => readCoursePercent(slug, totalLessons),
    () => 0,
  );
}
