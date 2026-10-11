"use client";

import { useState } from "react";
import { Trophy } from "lucide-react";
import { AVATAR_COLORS, Avatar } from "@/components/ui/Avatar";
import { Modal } from "@/components/ui/Modal";
import { iconButtonClasses } from "@/components/ui/iconButtonStyles";
import { leaderboardStudents } from "@/data/leaderboard";
import { useCoursePercent } from "@/hooks/useCourseProgress";
import {
  buildMessage,
  getBeatenPercent,
  randomMessageIndex,
} from "@/lib/leaderboard";

interface Props {
  slug: string;
  courseTitle: string;
}

export function LeaderboardButton({ slug, courseTitle }: Props) {
  const [open, setOpen] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const percent = useCoursePercent(slug);

  function handleOpen() {
    setMessageIndex(randomMessageIndex());
    setOpen(true);
  }

  const message = buildMessage(
    percent,
    getBeatenPercent(percent, leaderboardStudents),
    messageIndex,
  );

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        aria-label="Leaderboard"
        title="Leaderboard"
        className={iconButtonClasses}
      >
        <Trophy size={20} aria-hidden="true" />
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        eyebrow={courseTitle}
        title="Leaderboard"
        size="md"
      >
        <p
          lang="ar"
          dir="rtl"
          className="rounded-md bg-surface-alt p-5 font-arabic text-base leading-[2]"
        >
          {message}
        </p>

        <ol
          role="list"
          className="mt-6 flex flex-col gap-4 rounded-[2rem] bg-surface-alt p-6"
        >
          {leaderboardStudents.map((student, index) => (
            <li
              key={student.id}
              className="flex items-center gap-4 rounded-md border border-line bg-white px-4 py-3"
            >
              <span className="w-6 font-heading text-lg text-muted">
                {index + 1}
              </span>
              <Avatar color={AVATAR_COLORS[index % AVATAR_COLORS.length]} />
              <span className="min-w-0 flex-1 truncate">{student.name}</span>
              <span className="font-heading text-lg">{student.percent}%</span>
            </li>
          ))}
        </ol>
      </Modal>
    </>
  );
}
