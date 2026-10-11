export interface LessonProgress {
  time: number;
  maxWatched: number;
  duration: number;
  completed: boolean;
}

export interface CourseVideo {
  provider: "youtube";
  id: string;
  title: string;
  channel: string;
  durationSeconds: number;
}

export interface Lesson {
  id: string;
  title: string;
  questions: number;
  minutes: number;
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
  summaryPdf: string;
  video: CourseVideo;
  topics: Topic[];
}

export type CourseStatus = "not-started" | "in-progress" | "completed";

export interface CourseComment {
  id: string;
  author: string;
  date: string;
  text: string;
}

export interface CourseQuestion {
  id: string;
  text: string;
  date: string;
}
