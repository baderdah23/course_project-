"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import { commentsKey, createComment, parseComments } from "@/lib/comments";
import { readRaw, subscribeToStorage, writeRaw } from "@/lib/storage";

export function useComments(slug: string) {
  const key = commentsKey(slug);
  const raw = useSyncExternalStore(
    subscribeToStorage,
    () => readRaw(key),
    () => "",
  );
  const stored = useMemo(() => parseComments(raw), [raw]);

  const addComment = useCallback(
    (text: string) =>
      writeRaw(key, JSON.stringify([...stored, createComment(text)])),
    [key, stored],
  );

  return { stored, addComment };
}
