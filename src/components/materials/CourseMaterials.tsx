import { Clock, GraduationCap, Globe, Library } from "lucide-react";
import type { Course } from "@/types/course";
import { MaterialRow } from "./MaterialRow";

export function CourseMaterials({ course }: { course: Course }) {
  const rows = [
    { icon: Clock, label: "Duration:", value: course.duration },
    { icon: Library, label: "Lessons:", value: String(course.lessonCount) },
    {
      icon: GraduationCap,
      label: "Enrolled:",
      value: `${course.enrolled} students`,
    },
    { icon: Globe, label: "Language:", value: course.language },
  ];
  const list = rows.map((row) => <MaterialRow key={row.label} {...row} />);

  return (
    <section aria-labelledby="materials-heading">
      <h2 id="materials-heading" className="text-h2">
        Course Materials
      </h2>
      <div className="mt-6 grid gap-x-16 rounded-sm bg-white p-10 shadow-card sm:grid-cols-2">
        <dl>{list}</dl>
        {/* Second column repeats the first, as in the reference design. */}
        <dl aria-hidden="true" className="hidden sm:block">
          {list}
        </dl>
      </div>
    </section>
  );
}
