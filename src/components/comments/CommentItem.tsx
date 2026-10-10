import { Avatar, type AvatarColor } from "@/components/ui/Avatar";
import { formatDate } from "@/lib/format";
import type { CourseComment } from "@/types/course";

interface Props {
  comment: CourseComment;
  avatarColor: AvatarColor;
}

export function CommentItem({ comment, avatarColor }: Props) {
  return (
    <li className="flex gap-6 border-b border-line py-6 first:pt-0 last:border-0">
      <Avatar color={avatarColor} />
      <article className="min-w-0 flex-1">
        <h3 className="font-heading text-lg text-muted">{comment.author}</h3>
        <time dateTime={comment.date} className="block text-sm text-soft">
          {formatDate(comment.date)}
        </time>
        <p className="mt-3 text-base break-words whitespace-pre-line text-soft">
          {comment.text}
        </p>
      </article>
    </li>
  );
}
