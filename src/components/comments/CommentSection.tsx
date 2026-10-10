"use client";

import { seedComments } from "@/data/comments";
import { useComments } from "@/hooks/useComments";
import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";

export function CommentSection({ slug }: { slug: string }) {
  const { stored, addComment } = useComments(slug);

  return (
    <section
      id="comments"
      aria-labelledby="comments-heading"
      className="scroll-mt-6"
    >
      <h2 id="comments-heading" className="text-h2">
        Comments
      </h2>
      <CommentList comments={[...seedComments, ...stored]} />
      <CommentForm onSubmit={addComment} />
    </section>
  );
}
