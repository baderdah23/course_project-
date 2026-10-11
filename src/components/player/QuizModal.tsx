"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Clock, X } from "lucide-react";
import { defaultQuizQuestions, type QuizQuestion } from "@/data/quiz";

interface Props {
  open: boolean;
  onClose: () => void;
  title?: string;
  questions?: QuizQuestion[];
}

export function QuizModal({
  open,
  onClose,
  title = "Course Questions",
  questions = defaultQuizQuestions,
}: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [timeLeft, setTimeLeft] = useState(572); // ~ 09:32

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
    }
    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [open]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")} : ${String(secs).padStart(2, "0")}`;
  };

  const currentQ = questions[currentIndex] || questions[0];
  const selectedOption = selectedAnswers[currentIndex];

  const handleSelect = (optionId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionId,
    }));
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label={title}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-sm rounded-[2.5rem] bg-[#4C63D2] p-0 text-white shadow-2xl backdrop:bg-black/60 outline-none"
    >
      <div className="relative flex flex-col p-6 pt-5">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            aria-label="Back"
            className="grid size-9 place-items-center rounded-full text-white/90 hover:bg-white/10 transition-colors"
          >
            <ChevronLeft size={26} strokeWidth={2.5} />
          </button>

          <div className="flex items-center gap-1.5 rounded-lg bg-[#FFD014] px-4 py-1.5 font-bold text-ink shadow-[0_4px_15px_rgba(255,208,20,0.45)]">
            <Clock size={16} strokeWidth={2.5} className="text-ink" />
            <span className="text-sm tracking-wider font-mono">
              {formatTimer(timeLeft)}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid size-9 place-items-center rounded-full text-white/80 hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-between px-1">
          {questions.map((_, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to question ${idx + 1}`}
                className={`grid size-11 place-items-center rounded-full text-base font-semibold transition-all ${
                  isActive
                    ? "bg-white text-[#4C63D2] shadow-lg scale-105"
                    : "border-2 border-white/40 bg-[#4C63D2] text-white hover:border-white/70"
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        <div className="mt-7 rounded-[2rem] bg-white p-6 pb-8 text-ink shadow-xl">
          <div className="space-y-3">
            <span className="font-heading text-lg font-bold text-ink block">
              {currentIndex + 1}.
            </span>
            <p className="font-medium text-[1.05rem] leading-snug text-ink">
              {currentQ.question}
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3.5">
            {currentQ.options.map((opt) => {
              const isChosen = selectedOption === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelect(opt.id)}
                  className={`group flex w-full items-center gap-4 rounded-xl border p-3.5 text-left transition-all ${
                    isChosen
                      ? "border-[#526CE5] bg-[#5B73EA] text-white shadow-[0_4px_16px_rgba(82,108,229,0.35)]"
                      : "border-line bg-white text-ink shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:border-muted hover:shadow-md"
                  }`}
                >
                  <div
                    className={`grid size-6 shrink-0 place-items-center rounded-md border transition-all ${
                      isChosen
                        ? "border-white/60 bg-white/20 text-white"
                        : "border-line bg-surface-alt group-hover:border-soft"
                    }`}
                  >
                    {isChosen ? (
                      <div className="size-2 rounded-sm bg-white" />
                    ) : null}
                  </div>

                  <span className="text-sm font-medium leading-normal">
                    {opt.text}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-xs font-semibold text-muted">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 hover:text-ink disabled:opacity-30 disabled:hover:text-muted"
            >
              <ChevronLeft size={16} /> Previous
            </button>
            <span className="text-muted">
              {currentIndex + 1} of {questions.length}
            </span>
            <button
              type="button"
              disabled={currentIndex === questions.length - 1}
              onClick={() =>
                setCurrentIndex((prev) =>
                  Math.min(questions.length - 1, prev + 1),
                )
              }
              className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 hover:text-ink disabled:opacity-30 disabled:hover:text-muted"
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
