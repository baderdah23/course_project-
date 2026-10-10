"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";

const MAX_LENGTH = 500;

export function CommentForm({
  onSubmit,
}: {
  onSubmit: (text: string) => void;
}) {
  const id = useId();
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!text.trim()) {
      setError("Please write a comment before submitting.");
      setStatus("");
      return;
    }
    onSubmit(text);
    setText("");
    setError("");
    setStatus("Your comment was added.");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-10">
      <label htmlFor={`${id}-text`} className="sr-only">
        Write a comment
      </label>
      <textarea
        id={`${id}-text`}
        rows={6}
        value={text}
        maxLength={MAX_LENGTH}
        placeholder="Write a comment"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => setText(event.target.value)}
        className="block w-full resize-y rounded-sm border border-line bg-white px-6 py-5 text-base text-ink shadow-card placeholder:text-soft"
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-accent-strong">
          {error}
        </p>
      )}
      <p role="status" className="sr-only">
        {status}
      </p>
      <Button type="submit" className="mt-8">
        Submit Review
      </Button>
    </form>
  );
}
