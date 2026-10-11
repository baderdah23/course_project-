"use client";

import { useState } from "react";
import { FileText, HelpCircle } from "lucide-react";
import { getLessonState } from "@/lib/progress";
import type { Topic } from "@/types/course";
import { LessonItem } from "./LessonItem";
import { QuizModal } from "./QuizModal";
import { Modal } from "@/components/ui/Modal";
import { getQuizQuestionsForCourse } from "@/data/quiz";

interface Props {
  topic: Topic;
  topicIndex?: number;
  startIndex: number;
  totalLessons: number;
  percent: number;
  courseSlug?: string;
  summaryPdf?: string;
  courseTitle?: string;
}

export function TopicSection({
  topic,
  topicIndex = 0,
  startIndex,
  totalLessons,
  percent,
  courseSlug = "",
  summaryPdf = "",
  courseTitle = "",
}: Props) {
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [topicQuizOpen, setTopicQuizOpen] = useState(false);
  const questions = getQuizQuestionsForCourse(courseSlug);

  return (
    <>
      <section
        aria-labelledby={`${topic.id}-title`}
        className="rounded-sm border border-line p-6"
      >
        <h3 id={`${topic.id}-title`} className="text-h4">
          {topic.title}
        </h3>
        <p className="mt-2 text-sm text-soft">{topic.description}</p>
        <ol role="list" className="mt-4 border-t border-line">
          {/* أول أسبوع يتضمن بند ملخص الكورس بصيغة PDF كعنصر داخل القائمة */}
          {topicIndex === 0 && summaryPdf && (
            <li className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-b border-line py-4">
              <span className="flex items-center gap-3">
                <FileText size={18} aria-hidden="true" className="shrink-0 text-primary-strong" />
                <span className="font-medium text-ink">Course Summary (PDF)</span>
              </span>
              <button
                type="button"
                onClick={() => setSummaryOpen(true)}
                className="cursor-pointer rounded-sm border border-line bg-surface-alt px-3 py-1 font-heading text-xs transition-colors hover:border-ink"
              >
                View PDF
              </button>
            </li>
          )}

          {/* دروس الأسبوع */}
          {topic.lessons.map((lesson, index) => (
            <LessonItem
              key={lesson.id}
              lesson={lesson}
              state={getLessonState(startIndex + index, totalLessons, percent)}
              courseSlug={courseSlug}
            />
          ))}

          {/* بند أسئلة الأسبوع / Topic Questions داخل القائمة */}
          <li className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-b border-line py-4 last:border-0 bg-surface-alt/40 -mx-3 px-3 rounded-sm">
            <span className="flex items-center gap-3">
              <HelpCircle size={18} aria-hidden="true" className="shrink-0 text-primary-strong" />
              <span className="font-medium text-ink">{topic.title}: Questions</span>
            </span>
            <button
              type="button"
              onClick={() => setTopicQuizOpen(true)}
              className="cursor-pointer rounded-sm border border-primary-strong bg-primary-strong/10 px-3 py-1 font-heading text-xs text-primary-strong transition-colors hover:bg-primary-strong hover:text-white"
            >
              Start Quiz (5Q)
            </button>
          </li>
        </ol>
      </section>

      {/* مودال الـ PDF Summary */}
      {summaryPdf && (
        <Modal
          open={summaryOpen}
          onClose={() => setSummaryOpen(false)}
          title={`${courseTitle || "Course"}: Summary`}
        >
          <object
            data={summaryPdf}
            type="application/pdf"
            title={`${courseTitle} summary`}
            className="h-[65vh] w-full"
          >
            <p>Your browser cannot display this PDF here.</p>
          </object>
          <a
            href={summaryPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block underline text-sm"
          >
            Open in a new tab
          </a>
        </Modal>
      )}

      {/* مودال أسئلة هذا التوبيك / الأسبوع */}
      <QuizModal
        open={topicQuizOpen}
        onClose={() => setTopicQuizOpen(false)}
        title={`${topic.title} Questions`}
        questions={questions}
      />
    </>
  );
}
