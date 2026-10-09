import Image from "next/image";
import type { Course } from "@/types/course";
import { CourseCta } from "./CourseCta";

interface Props {
  course: Course;
  preload?: boolean;
}

export function CourseCard({ course, preload = false }: Props) {
  return (
    <article className="relative flex w-full flex-col overflow-hidden rounded-md border border-line bg-white transition-shadow duration-200 hover:shadow-card motion-reduce:transition-none">
      <div className="relative aspect-video bg-surface-alt">
        <Image
          src={course.image}
          alt=""
          fill
          preload={preload}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-6">
        <h2 className="text-h4">{course.title}</h2>
        <p className="text-sm text-muted">{course.instructor}</p>
        <p className="line-clamp-2 text-sm text-soft">{course.description}</p>
        <ul
          role="list"
          className="mt-2 mb-4 flex flex-wrap gap-x-4 text-sm text-muted"
        >
          <li>{course.lessonCount} lessons</li>
          <li>{course.duration}</li>
        </ul>
        <CourseCta
          slug={course.slug}
          title={course.title}
          totalLessons={course.lessonCount}
        />
      </div>
    </article>
  );
}
