import {
  leaderboardCatchUpMessage,
  leaderboardMessages,
  leaderboardStartMessage,
  type LeaderboardStudent,
} from "@/data/leaderboard";

export function getBeatenPercent(
  percent: number,
  students: LeaderboardStudent[],
): number {
  if (students.length === 0) return 0;
  const beaten = students.filter((student) => student.percent < percent).length;
  return Math.round((beaten / students.length) * 100);
}

export function randomMessageIndex(): number {
  return Math.floor(Math.random() * leaderboardMessages.length);
}

export function buildMessage(
  percent: number,
  beatenPercent: number,
  messageIndex: number,
): string {
  if (percent === 0) return leaderboardStartMessage;
  if (beatenPercent === 0) return leaderboardCatchUpMessage;
  const template =
    leaderboardMessages[messageIndex % leaderboardMessages.length];
  const formatted = `${beatenPercent.toLocaleString("ar-EG")}%`;

  return template.replace("{percent}", formatted);
}
