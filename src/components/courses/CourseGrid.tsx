import type { Course } from "@/types/course";
import { CourseCard } from "./CourseCard";

const EAGER_COUNT = 3; // first row on desktop

export function CourseGrid({ courses }: { courses: Course[] }) {
  return (
    <ul
      id="courses"
      role="list"
      className="grid scroll-mt-6 grid-cols-[repeat(auto-fill,minmax(min(100%,20rem),1fr))] gap-8 pb-20"
    >
      {courses.map((course, index) => (
        <li key={course.slug} className="flex">
          <CourseCard course={course} preload={index < EAGER_COUNT} />
        </li>
      ))}
    </ul>
  );
}
