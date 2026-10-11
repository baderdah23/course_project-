"use client";

import { useSyncExternalStore } from "react";
import { readCoursePercent, subscribeToStorage } from "@/lib/storage";

export function useCoursePercent(slug: string, totalLessons?: number): number {
  void totalLessons;
  return useSyncExternalStore(
    subscribeToStorage,
    () => readCoursePercent(slug),
    () => 0,
  );
}
