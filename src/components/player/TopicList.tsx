import type { Topic } from "@/types/course";
import { TopicSection } from "./TopicSection";

interface Props {
  topics: Topic[];
  percent: number;
}

export function TopicList({ topics, percent }: Props) {
  const totalLessons = topics.reduce(
    (sum, topic) => sum + topic.lessons.length,
    0,
  );
  const startIndexes = topics.map((_, index) =>
    topics
      .slice(0, index)
      .reduce((sum, topic) => sum + topic.lessons.length, 0),
  );

  return (
    <div
      role="region"
      aria-label="Course topics"
      tabIndex={0}
      className="mt-8 flex max-h-(--topics-max-h) flex-col gap-6 overflow-y-auto"
    >
      {topics.map((topic, index) => (
        <TopicSection
          key={topic.id}
          topic={topic}
          startIndex={startIndexes[index]}
          totalLessons={totalLessons}
          percent={percent}
        />
      ))}
    </div>
  );
}
