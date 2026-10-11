import { ListVideo, MessageSquare } from "lucide-react";
import { iconButtonClasses } from "@/components/ui/iconButtonStyles";
import { AskQuestionButton } from "./AskQuestionButton";
import { LeaderboardButton } from "./LeaderboardButton";

interface Props {
  slug: string;
  courseTitle: string;
}

export function ActionBar({ slug, courseTitle }: Props) {
  return (
    <ul role="list" aria-label="Course actions" className="flex gap-3">
      <li className="lg:hidden">
        <a
          href="#curriculum"
          aria-label="Curriculum"
          title="Curriculum"
          className={iconButtonClasses}
        >
          <ListVideo size={20} aria-hidden="true" />
        </a>
      </li>
      <li>
        <a
          href="#comments"
          aria-label="Comments"
          title="Comments"
          className={iconButtonClasses}
        >
          <MessageSquare size={20} aria-hidden="true" />
        </a>
      </li>
      <li>
        <AskQuestionButton slug={slug} courseTitle={courseTitle} />
      </li>
      <li>
        <LeaderboardButton slug={slug} courseTitle={courseTitle} />
      </li>
    </ul>
  );
}
