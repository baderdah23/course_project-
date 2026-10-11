"use client";

import { useState } from "react";
import { CircleHelp } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { iconButtonClasses } from "@/components/ui/iconButtonStyles";
import { QuestionForm } from "./QuestionForm";

interface Props {
  slug: string;
  courseTitle: string;
}

export function AskQuestionButton({ slug, courseTitle }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Ask a Question"
        title="Ask a Question"
        className={iconButtonClasses}
      >
        <CircleHelp size={20} aria-hidden="true" />
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        eyebrow={courseTitle}
        title="Ask a Question"
        size="md"
      >
        <QuestionForm slug={slug} />
      </Modal>
    </>
  );
}
