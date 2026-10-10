"use client";

import { useState } from "react";
import { FileText } from "lucide-react";
import { Modal } from "@/components/ui/Modal";

interface Props {
  pdfUrl: string;
  courseTitle: string;
}

export function SummaryButton({ pdfUrl, courseTitle }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex min-h-(--btn-height) items-center gap-2 rounded-sm border border-line px-5 font-heading text-base transition-colors hover:border-ink motion-reduce:transition-none"
      >
        <FileText size={20} aria-hidden="true" />
        Summary (PDF)
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={`${courseTitle}: Summary`}
      >
        <object
          data={pdfUrl}
          type="application/pdf"
          title={`${courseTitle} summary`}
          className="h-[65vh] w-full"
        >
          <p>Your browser cannot display this PDF here.</p>
        </object>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener"
          className="mt-4 inline-block underline"
        >
          Open in a new tab
        </a>
      </Modal>
    </>
  );
}
