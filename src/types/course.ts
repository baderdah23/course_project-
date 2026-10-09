export interface CourseVideo {
  provider: "youtube";
  id: string;
  title: string;
  channel: string;
  /** Approximate. The player reads the real duration at runtime. */
  durationSeconds: number;
}

export interface Lesson {
  id: string;
  title: string;
  questions: number;
  minutes: number;
  startSeconds: number;
  endSeconds: number;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Course {
  slug: string;
  title: string;
  instructor: string;
  description: string;
  image: string;
  duration: string;
  language: string;
  enrolled: number;
  lessonCount: number;
  video: CourseVideo;
  topics: Topic[];
}

export interface LessonProgress {
  time: number;
  maxWatched: number;
  duration: number;
  completed: boolean;
}

export interface CourseProgress {
  currentLessonId: string | null;
  lessons: Record<string, LessonProgress>;
}

export type CourseStatus = "not-started" | "in-progress" | "completed";
