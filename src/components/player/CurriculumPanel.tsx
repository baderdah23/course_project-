"use client";

import { useCoursePercent } from "@/hooks/useCourseProgress";
import type { Course } from "@/types/course";
import { CourseProgress } from "./CourseProgress";
import { SummaryButton } from "./SummaryButton";
import { TopicList } from "./TopicList";

export function CurriculumPanel({ course }: { course: Course }) {
  const percent = useCoursePercent(course.slug);

  return (
    <section
      id="curriculum"
      aria-labelledby="curriculum-heading"
      className="scroll-mt-6"
    >
      <h2 id="curriculum-heading" className="text-h3">
        Topics for This Course
      </h2>
      <CourseProgress percent={percent} />
      <SummaryButton pdfUrl={course.summaryPdf} courseTitle={course.title} />
      <TopicList topics={course.topics} percent={percent} />
    </section>
  );
}
