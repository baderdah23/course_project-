import { CircleHelp, ListVideo, MessageSquare, Podium } from "lucide-react";

const iconClasses =
  "grid size-(--social-size) place-items-center rounded-full border border-line text-muted transition-colors hover:border-ink hover:text-ink disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none";

const actions = [
  // Hidden on desktop: the topics list is already visible next to the video.
  {
    label: "Curriculum",
    icon: ListVideo,
    href: "#curriculum",
    className: "lg:hidden",
  },
  { label: "Comments", icon: MessageSquare, href: "#comments", className: "" },
  { label: "Ask a Question", icon: CircleHelp, className: "" },
  { label: "Leaderboard", icon: Podium, className: "" },
];

export function ActionBar() {
  return (
    <ul role="list" aria-label="Course actions" className="flex gap-3">
      {actions.map(({ label, icon: Icon, href, className }) => (
        <li key={label} className={className}>
          {href ? (
            <a
              href={href}
              aria-label={label}
              title={label}
              className={iconClasses}
            >
              <Icon size={20} aria-hidden="true" />
            </a>
          ) : (
            <button
              type="button"
              disabled
              aria-label={label}
              title={label}
              className={iconClasses}
            >
              <Icon size={20} aria-hidden="true" />
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
