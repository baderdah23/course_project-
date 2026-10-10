export type LessonInput = string | readonly [title: string, questions: number];

export interface TopicInput {
  title: string;
  description: string;
  lessons: LessonInput[];
}

export function buildTopics(
  slug: string,
  totalSeconds: number,
  topics: TopicInput[],
) {
  const total = topics.reduce((sum, topic) => sum + topic.lessons.length, 0);

  const minutes = Math.round(totalSeconds / total / 60);

  let position = 0;

  return topics.map((topic, topicIndex) => ({
    id: `${slug}-t${topicIndex + 1}`,
    title: topic.title,
    description: topic.description,
    lessons: topic.lessons.map((input) => {
      const [title, questions]: readonly [string, number] =
        typeof input === "string" ? [input, 0] : input;
      position += 1;
      return { id: `${slug}-l${position}`, title, questions, minutes };
    }),
  }));
}
