import type { Topic } from "@/types/course";

/** A lesson is a title, or [title, number of quiz questions]. */
export type LessonInput = string | readonly [title: string, questions: number];

export interface TopicInput {
  title: string;
  description: string;
  lessons: LessonInput[];
}

/**
 * Splits one course video into equal lessons (mock data).
 * Replace with real chapter timestamps when available.
 */
export function buildTopics(
  slug: string,
  totalSeconds: number,
  topics: TopicInput[],
): Topic[] {
  const total = topics.reduce((sum, topic) => sum + topic.lessons.length, 0);
  const segment = Math.floor(totalSeconds / total);
  let position = 0;

  return topics.map((topic, topicIndex) => ({
    id: `${slug}-t${topicIndex + 1}`,
    title: topic.title,
    description: topic.description,
    lessons: topic.lessons.map((input) => {
      const [title, questions] = typeof input === "string" ? [input, 0] : input;
      const startSeconds = position * segment;
      position += 1;
      const endSeconds =
        position === total ? totalSeconds : startSeconds + segment;

      return {
        id: `${slug}-l${position}`,
        title,
        questions,
        startSeconds,
        endSeconds,
        minutes: Math.round((endSeconds - startSeconds) / 60),
      };
    }),
  }));
}
