import { getLessonState } from "@/lib/progress";
import type { Topic } from "@/types/course";
import { LessonItem } from "./LessonItem";

interface Props {
  topic: Topic;
  startIndex: number;
  totalLessons: number;
  percent: number;
}

export function TopicSection({
  topic,
  startIndex,
  totalLessons,
  percent,
}: Props) {
  return (
    <section
      aria-labelledby={`${topic.id}-title`}
      className="rounded-sm border border-line p-6"
    >
      <h3 id={`${topic.id}-title`} className="text-h4">
        {topic.title}
      </h3>
      <p className="mt-2 text-sm text-soft">{topic.description}</p>
      <ol role="list" className="mt-4 border-t border-line">
        {topic.lessons.map((lesson, index) => (
          <LessonItem
            key={lesson.id}
            lesson={lesson}
            state={getLessonState(startIndex + index, totalLessons, percent)}
          />
        ))}
      </ol>
    </section>
  );
}
