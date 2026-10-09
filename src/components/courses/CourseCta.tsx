"use client";

import { ProgressBar } from "@/components/ui/ProgressBar";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { useCoursePercent } from "@/hooks/useCourseProgress";
import { getStatus } from "@/lib/progress";
import type { CourseStatus } from "@/types/course";

const STATUS_LABEL: Record<CourseStatus, string> = {
  "not-started": "Not started",
  "in-progress": "In progress",
  completed: "Completed",
};

const ACTION_LABEL: Record<CourseStatus, string> = {
  "not-started": "Start",
  "in-progress": "Continue",
  completed: "Review",
};

interface Props {
  slug: string;
  title: string;
  totalLessons: number;
}

export function CourseCta({ slug, title, totalLessons }: Props) {
  const percent = useCoursePercent(slug, totalLessons);
  const status = getStatus(percent);

  return (
    <div className="mt-auto grid gap-2">
      <div className="flex justify-between text-xs text-muted">
        <span>{STATUS_LABEL[status]}</span>
        <span aria-hidden="true">{percent}%</span>
      </div>
      <ProgressBar value={percent} label={`${title} progress`} />
      <ButtonLink
        href={`/courses/${slug}`}
        aria-label={`${ACTION_LABEL[status]}: ${title}`}
        className="mt-3 after:absolute after:inset-0"
      >
        {ACTION_LABEL[status]}
      </ButtonLink>
    </div>
  );
}
