"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import { createQuestion, parseQuestions, questionsKey } from "@/lib/questions";
import { readRaw, subscribeToStorage, writeRaw } from "@/lib/storage";

export function useQuestions(slug: string) {
  const key = questionsKey(slug);

  const raw = useSyncExternalStore(
    subscribeToStorage,
    () => readRaw(key),
    () => "",
  );

  const questions = useMemo(() => parseQuestions(raw), [raw]);

  const addQuestion = useCallback(
    (text: string) =>
      writeRaw(key, JSON.stringify([...questions, createQuestion(text)])),
    [key, questions],
  );

  return { questions, addQuestion };
}
