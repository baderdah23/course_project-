import type { CourseComment } from "@/types/course";

const TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export const seedComments: CourseComment[] = [
  { id: "seed-1", author: "Ali", date: "2026-10-10", text: TEXT },
  { id: "seed-2", author: "John", date: "2026-10-15", text: TEXT },
  { id: "seed-3", author: "Ahmed", date: "2026-10-19", text: TEXT },
];
