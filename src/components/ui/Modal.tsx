"use client";

import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";

const SIZE_CLASSES = {
  md: "max-w-xl",
  lg: "max-w-4xl",
} as const;

interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  eyebrow?: string;
  size?: keyof typeof SIZE_CLASSES;
  children: React.ReactNode;
}

export function Modal({
  open,
  onClose,
  title,
  eyebrow,
  size = "lg",
  children,
}: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className={`m-auto w-[calc(100%-2rem)] ${SIZE_CLASSES[size]} rounded-md bg-white p-0 text-ink shadow-modal backdrop:bg-overlay-modal`}
    >
      <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-4">
        <div>
          {eyebrow && <p className="text-sm text-muted">{eyebrow}</p>}
          <h2 id={titleId} className="text-h4">
            {title}
          </h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="grid size-(--tap-min) shrink-0 place-items-center rounded-full hover:bg-surface-alt"
        >
          <X size={22} aria-hidden="true" />
        </button>
      </div>
      <div className="p-6">{open && children}</div>
    </dialog>
  );
}
