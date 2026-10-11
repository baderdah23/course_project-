"use client";

import { useState } from "react";
import { Check, FileText, Lock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { LessonState } from "@/lib/progress";
import type { Lesson } from "@/types/course";
import { QuizModal } from "./QuizModal";

import { getQuizQuestionsForCourse } from "@/data/quiz";

const STATE_LABEL: Record<LessonState, string> = {
  completed: "Completed",
  current: "Current lesson",
  locked: "Locked",
};

interface Props {
  lesson: Lesson;
  state: LessonState;
  courseSlug?: string;
}

export function LessonItem({ lesson, state, courseSlug = "" }: Props) {
  const [quizOpen, setQuizOpen] = useState(false);
  const locked = state === "locked";
  const questions = getQuizQuestionsForCourse(courseSlug);

  return (
    <>
      <li
        aria-current={state === "current" ? "step" : undefined}
        className={`flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-b border-line py-4 last:border-0 ${
          state === "current" ? "-mx-3 rounded-sm bg-lesson-active px-3" : ""
        }`}
      >
        <span className="flex items-center gap-3">
          <FileText size={18} aria-hidden="true" className="shrink-0" />
          <span className={locked ? "text-muted" : "text-ink"}>
            {lesson.title}
          </span>
          <span className="sr-only">{STATE_LABEL[state]}</span>
        </span>

        {locked ? (
          <Lock size={18} aria-hidden="true" className="text-lesson-locked" />
        ) : (
          <span className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setQuizOpen(true)}
              className="cursor-pointer transition-transform hover:scale-105 focus:outline-none"
              title={`View ${lesson.questions} questions for ${lesson.title}`}
            >
              <Badge tone="success">
                {lesson.questions}{" "}
                {lesson.questions === 1 ? "Question" : "Questions"}
              </Badge>
            </button>
            <Badge tone="danger">{lesson.minutes} Minutes</Badge>
            {state === "completed" && (
              <Check
                size={18}
                aria-hidden="true"
                className="text-primary-strong"
              />
            )}
          </span>
        )}
      </li>

      <QuizModal
        open={quizOpen}
        onClose={() => setQuizOpen(false)}
        title={`${lesson.title}: Questions`}
        questions={questions}
      />
    </>
  );
}
