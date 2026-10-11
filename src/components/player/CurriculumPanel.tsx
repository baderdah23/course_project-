"use client";

import { useCoursePercent } from "@/hooks/useCourseProgress";
import type { Course } from "@/types/course";
import { CourseProgress } from "./CourseProgress";
import { SummaryButton } from "./SummaryButton";
import { QuestionForm } from "./QuestionForm";
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

      <section
        aria-labelledby="aside-questions-heading"
        className="mt-10 rounded-sm border border-line bg-white p-6"
      >
        <h3 id="aside-questions-heading" className="text-h4 mb-4">
          Course Questions
        </h3>
        <QuestionForm slug={course.slug} />
      </section>
    </section>
  );
}
