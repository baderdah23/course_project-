export const AVATAR_COLORS = ["green", "pink", "red", "yellow"] as const;
export type AvatarColor = (typeof AVATAR_COLORS)[number];

const COLOR_CLASS: Record<AvatarColor, string> = {
  green: "text-avatar-green",
  pink: "text-avatar-pink",
  red: "text-avatar-red",
  yellow: "text-avatar-yellow",
};

export function Avatar({ color }: { color: AvatarColor }) {
  return (
    <svg
      viewBox="0 0 56 56"
      aria-hidden="true"
      className={`size-(--avatar-size) shrink-0 ${COLOR_CLASS[color]}`}
    >
      <circle cx="28" cy="28" r="28" fill="currentColor" fillOpacity="0.18" />
      <circle cx="28" cy="22" r="8" fill="currentColor" />
      <path
        d="M11 47c0-9.4 7.1-15 17-15s17 5.6 17 15c0 .6-.4 1-1 1H12c-.6 0-1-.4-1-1z"
        fill="currentColor"
      />
    </svg>
  );
}
