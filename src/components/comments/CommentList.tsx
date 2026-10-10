import { AVATAR_COLORS } from "@/components/ui/Avatar";
import type { CourseComment } from "@/types/course";
import { CommentItem } from "./CommentItem";

export function CommentList({ comments }: { comments: CourseComment[] }) {
  return (
    <ul role="list" className="mt-6">
      {comments.map((comment, index) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          avatarColor={AVATAR_COLORS[index % AVATAR_COLORS.length]}
        />
      ))}
    </ul>
  );
}
