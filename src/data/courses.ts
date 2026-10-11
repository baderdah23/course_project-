import type { Course } from "@/types/course";
import { buildTopics, type TopicInput } from "@/lib/curriculum";
import { youtubeThumbnail } from "@/lib/youtube";

type CourseInput = Omit<
  Course,
  "image" | "topics" | "lessonCount" | "summaryPdf"
> & {
  topics: TopicInput[];
};

function createCourse({ topics, ...course }: CourseInput): Course {
  const built = buildTopics(course.slug, course.video.durationSeconds, topics);
  return {
    ...course,
    image: youtubeThumbnail(course.video.id),
    summaryPdf: `/pdfs/${course.slug}.pdf`,
    topics: built,
    lessonCount: built.reduce((sum, topic) => sum + topic.lessons.length, 0),
  };
}

export const courses: Course[] = [
  createCourse({
    slug: "linux-fundamentals",
    title: "Linux Fundamentals",
    instructor: "Beau Carnes",
    description:
      "Learn the Linux command line, file system, and everyday tools used by sysadmins and developers.",
    duration: "6 hours",
    language: "English",
    enrolled: 120,
    video: {
      provider: "youtube",
      id: "sWbUDq4S6Y8",
      title: "Introduction to Linux – Full Course for Beginners",
      channel: "freeCodeCamp.org",
      durationSeconds: 21600,
    },
    topics: [
      {
        title: "Week 1-2",
        description:
          "Understand what Linux is and get comfortable with the desktop and installation.",
        lessons: [
          "What is Linux",
          "Distributions and Installation",
          "The Graphical Interface",
          "The Linux Philosophy",
        ],
      },
      {
        title: "Week 3-4",
        description:
          "Work confidently from the terminal: files, editors, and permissions.",
        lessons: [
          ["Basic Commands", 3],
          "Working with Files",
          "Text Editors",
          ["Users and Permissions", 2],
        ],
      },
    ],
  }),
  createCourse({
    slug: "typescript-essentials",
    title: "TypeScript Essentials",
    instructor: "Dave Gray",
    description:
      "Write safer JavaScript with types, interfaces, generics, and modern TypeScript patterns.",
    duration: "8 hours",
    language: "English",
    enrolled: 96,
    video: {
      provider: "youtube",
      id: "gieEQFIfgYc",
      title:
        "TypeScript Full Course for Beginners | Complete All-in-One Tutorial",
      channel: "Dave Gray",
      durationSeconds: 28800,
    },
    topics: [
      {
        title: "Week 1-2",
        description:
          "Set up the compiler and learn the building blocks of the type system.",
        lessons: [
          "Why TypeScript",
          "Setup and Compiler",
          ["Basic Types", 3],
          "Functions and Types",
        ],
      },
      {
        title: "Week 3-4",
        description: "Model real data with interfaces, classes, and generics.",
        lessons: [
          "Interfaces and Type Aliases",
          "Classes",
          ["Generics", 2],
          "Utility Types",
        ],
      },
    ],
  }),
  createCourse({
    slug: "cpp-programming",
    title: "C++ Programming Course",
    instructor: "Caleb Curry",
    description:
      "Master modern C++ programming from fundamental syntax, memory management, and OOP to advanced problem solving.",
    duration: "4 hours",
    language: "English",
    enrolled: 185,
    video: {
      provider: "youtube",
      id: "vLnPwxZdW4Y",
      title: "C++ Tutorial for Beginners - Full Course",
      channel: "freeCodeCamp.org",
      durationSeconds: 14400,
    },
    topics: [
      {
        title: "Week 1-2",
        description:
          "Write and run your first programs and learn core syntax and control flow.",
        lessons: [
          "Setup and Hello World",
          "Variables and Data Types",
          ["Control Flow", 2],
          "Functions",
        ],
      },
      {
        title: "Week 3-4",
        description: "Work with memory, pointers, and structure your code with classes.",
        lessons: [
          "Arrays and Strings",
          ["Pointers and Memory", 3],
          "Classes and Objects",
          "Inheritance",
        ],
      },
    ],
  }),
  createCourse({
    slug: "python-for-beginners",
    title: "Python for Beginners",
    instructor: "Mike Dane",
    description:
      "Learn Python basics by building small programs: lists, functions, loops, and classes.",
    duration: "4 hours",
    language: "English",
    enrolled: 210,
    video: {
      provider: "youtube",
      id: "rfscVS0vtbw",
      title: "Learn Python - Full Course for Beginners",
      channel: "freeCodeCamp.org",
      durationSeconds: 16000,
    },
    topics: [
      {
        title: "Week 1-2",
        description: "Get set up and learn how Python stores and handles data.",
        lessons: [
          "Setup and Hello World",
          "Variables and Strings",
          ["Lists and Tuples", 2],
          "Functions",
        ],
      },
      {
        title: "Week 3-4",
        description:
          "Control the flow of your programs and organize them with classes.",
        lessons: [
          "Conditionals and Loops",
          "Dictionaries",
          "Files and Errors",
          ["Classes and Objects", 3],
        ],
      },
    ],
  }),
  createCourse({
    slug: "nodejs-backend",
    title: "Node.js and Express",
    instructor: "John Smilga",
    description:
      "Build back-end servers and REST APIs with Node.js and Express, step by step.",
    duration: "8 hours",
    language: "English",
    enrolled: 88,
    video: {
      provider: "youtube",
      id: "Oe421EPjeBE",
      title: "Node.js and Express.js - Full Course",
      channel: "freeCodeCamp.org",
      durationSeconds: 28800,
    },
    topics: [
      {
        title: "Week 1-2",
        description:
          "Understand how Node.js runs JavaScript outside the browser.",
        lessons: ["What is Node.js", "Modules", ["Built-in Modules", 2], "NPM"],
      },
      {
        title: "Week 3-4",
        description: "Build and structure a REST API with Express.",
        lessons: [
          "Routing",
          ["Middleware", 3],
          "Building a REST API",
          "Connecting a Database",
        ],
      },
    ],
  }),
  createCourse({
    slug: "html-from-scratch",
    title: "HTML from Scratch",
    instructor: "Dave Gray",
    description:
      "Learn the structure of every web page: text, links, images, tables, forms, and semantic tags.",
    duration: "4 hours",
    language: "English",
    enrolled: 150,
    video: {
      provider: "youtube",
      id: "kUMe1FH4CHE",
      title: "Learn HTML – Full Tutorial for Beginners",
      channel: "Dave Gray",
      durationSeconds: 14400,
    },
    topics: [
      {
        title: "Week 1-2",
        description: "Create your first page and learn the essential tags.",
        lessons: [
          "Getting Started",
          "Head and Text",
          ["Lists and Links", 2],
          "Images",
        ],
      },
      {
        title: "Week 3-4",
        description:
          "Structure real pages with semantic tags, tables, and forms.",
        lessons: [
          "Semantic Tags",
          "Tables",
          ["Forms and Inputs", 3],
          "Final Project",
        ],
      },
    ],
  }),
];
