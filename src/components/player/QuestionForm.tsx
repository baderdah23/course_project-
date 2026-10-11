"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useQuestions } from "@/hooks/useQuestions";
import { formatDate } from "@/lib/format";

const MAX_LENGTH = 500;

export function QuestionForm({ slug }: { slug: string }) {
  const id = useId();
  const { questions, addQuestion } = useQuestions(slug);

  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!text.trim()) {
      setError("Please write your question before sending.");
      setStatus("");
      return;
    }

    addQuestion(text);
    setText("");
    setError("");
    setStatus("Your question was saved.");
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor={`${id}-text`} className="font-heading text-lg">
          Your question
        </label>
        <textarea
          id={`${id}-text`}
          rows={5}
          value={text}
          maxLength={MAX_LENGTH}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          onChange={(event) => setText(event.target.value)}
          className="mt-3 block w-full resize-y rounded-sm border border-line bg-white px-5 py-4 text-base text-ink placeholder:text-soft"
        />
        {error && (
          <p id={`${id}-error`} className="mt-2 text-sm text-accent-strong">
            {error}
          </p>
        )}
        <p role="status" className="sr-only">
          {status}
        </p>
        <Button type="submit" className="mt-6">
          Send Question
        </Button>
      </form>

      {questions.length > 0 && (
        <section aria-labelledby={`${id}-history`} className="mt-10">
          <h3 id={`${id}-history`} className="text-h4">
            Your questions
          </h3>
          <ul role="list" className="mt-4">
            {questions.map((question) => (
              <li
                key={question.id}
                className="border-b border-line py-4 last:border-0"
              >
                <time
                  dateTime={question.date}
                  className="block text-sm text-soft"
                >
                  {formatDate(question.date)}
                </time>
                <p className="mt-1 break-words whitespace-pre-line">
                  {question.text}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
