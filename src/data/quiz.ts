export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
  correctOptionId: string;
}

// أسئلة لكل كورس (5 أسئلة تخصصية لكل كورس)
export const courseQuestionsMap: Record<string, QuizQuestion[]> = {
  // C++ Programming
  "cpp-programming": [
    {
      id: 1,
      question: "Which of the following is the correct syntax to output 'Hello World' in C++?",
      options: [
        { id: "a", text: "System.out.println('Hello World');" },
        { id: "b", text: "cout << 'Hello World';" },
        { id: "c", text: "print('Hello World');" },
        { id: "d", text: "Console.WriteLine('Hello World');" },
      ],
      correctOptionId: "b",
    },
    {
      id: 2,
      question: "Which operator is used to access the memory address of a variable in C++?",
      options: [
        { id: "a", text: "*" },
        { id: "b", text: "&" },
        { id: "c", text: "->" },
        { id: "d", text: "%" },
      ],
      correctOptionId: "b",
    },
    {
      id: 3,
      question: "Which concept in C++ OOP allows a derived class to acquire the properties of a base class?",
      options: [
        { id: "a", text: "Encapsulation" },
        { id: "b", text: "Inheritance" },
        { id: "c", text: "Polymorphism" },
        { id: "d", text: "Abstraction" },
      ],
      correctOptionId: "b",
    },
    {
      id: 4,
      question: "What is the return type of the main() function in standard C++?",
      options: [
        { id: "a", text: "void" },
        { id: "b", text: "int" },
        { id: "c", text: "float" },
        { id: "d", text: "bool" },
      ],
      correctOptionId: "b",
    },
    {
      id: 5,
      question: "Which modern pointer automatically deletes memory when going out of scope?",
      options: [
        { id: "a", text: "std::unique_ptr" },
        { id: "b", text: "raw pointer (*)" },
        { id: "c", text: "void*" },
        { id: "d", text: "nullptr" },
      ],
      correctOptionId: "a",
    },
  ],

  // HTML from Scratch
  "html-from-scratch": [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: [
        { id: "a", text: "Hyper Text Markup Language" },
        { id: "b", text: "High Tech Modern Language" },
        { id: "c", text: "Hyperlinks and Text Manipulation Language" },
        { id: "d", text: "Home Tool Markup Language" },
      ],
      correctOptionId: "a",
    },
    {
      id: 2,
      question: "Which tag is used to define an internal hyperlink in HTML?",
      options: [
        { id: "a", text: "<link>" },
        { id: "b", text: "<a>" },
        { id: "c", text: "<href>" },
        { id: "d", text: "<nav>" },
      ],
      correctOptionId: "b",
    },
    {
      id: 3,
      question: "Which semantic HTML5 element represents the primary content of the document body?",
      options: [
        { id: "a", text: "<section>" },
        { id: "b", text: "<article>" },
        { id: "c", text: "<main>" },
        { id: "d", text: "<div>" },
      ],
      correctOptionId: "c",
    },
    {
      id: 4,
      question: "Which attribute is used to provide alternative text for an image?",
      options: [
        { id: "a", text: "title" },
        { id: "b", text: "alt" },
        { id: "c", text: "caption" },
        { id: "d", text: "src" },
      ],
      correctOptionId: "b",
    },
    {
      id: 5,
      question: "Which tag is used to create a numbered list?",
      options: [
        { id: "a", text: "<ul>" },
        { id: "b", text: "<ol>" },
        { id: "c", text: "<li>" },
        { id: "d", text: "<dl>" },
      ],
      correctOptionId: "b",
    },
  ],

  // Linux Fundamentals
  "linux-fundamentals": [
    {
      id: 1,
      question: "Which command is used to display the current working directory in Linux?",
      options: [
        { id: "a", text: "cd" },
        { id: "b", text: "ls" },
        { id: "c", text: "pwd" },
        { id: "d", text: "dir" },
      ],
      correctOptionId: "c",
    },
    {
      id: 2,
      question: "Which command is used to change file permissions in Linux?",
      options: [
        { id: "a", text: "chmod" },
        { id: "b", text: "chown" },
        { id: "c", text: "sudo" },
        { id: "d", text: "touch" },
      ],
      correctOptionId: "a",
    },
    {
      id: 3,
      question: "What is the command to search for specific text patterns inside files?",
      options: [
        { id: "a", text: "find" },
        { id: "b", text: "grep" },
        { id: "c", text: "locate" },
        { id: "d", text: "cat" },
      ],
      correctOptionId: "b",
    },
    {
      id: 4,
      question: "Which flag with 'rm' allows recursive deletion of a non-empty directory?",
      options: [
        { id: "a", text: "-f" },
        { id: "b", text: "-r" },
        { id: "c", text: "-d" },
        { id: "d", text: "-a" },
      ],
      correctOptionId: "b",
    },
    {
      id: 5,
      question: "Which key switches the Vim editor back to Normal / Command mode?",
      options: [
        { id: "a", text: "Ctrl + C" },
        { id: "b", text: "Esc" },
        { id: "c", text: ":q" },
        { id: "d", text: "Tab" },
      ],
      correctOptionId: "b",
    },
  ],

  // Node.js Backend
  "nodejs-backend": [
    {
      id: 1,
      question: "What JavaScript engine powers Node.js under the hood?",
      options: [
        { id: "a", text: "SpiderMonkey" },
        { id: "b", text: "V8" },
        { id: "c", text: "JavaScriptCore" },
        { id: "d", text: "Chakra" },
      ],
      correctOptionId: "b",
    },
    {
      id: 2,
      question: "Which built-in module is used to work with the server file system in Node.js?",
      options: [
        { id: "a", text: "path" },
        { id: "b", text: "http" },
        { id: "c", text: "fs" },
        { id: "d", text: "os" },
      ],
      correctOptionId: "c",
    },
    {
      id: 3,
      question: "In Express.js, what function parses incoming JSON request payloads?",
      options: [
        { id: "a", text: "express.static()" },
        { id: "b", text: "express.json()" },
        { id: "c", text: "express.urlencoded()" },
        { id: "d", text: "JSON.stringify()" },
      ],
      correctOptionId: "b",
    },
    {
      id: 4,
      question: "What is the third argument in an Express middleware function?",
      options: [
        { id: "a", text: "err" },
        { id: "b", text: "res" },
        { id: "c", text: "next" },
        { id: "d", text: "callback" },
      ],
      correctOptionId: "c",
    },
    {
      id: 5,
      question: "Which HTTP status code signifies that a requested resource was not found?",
      options: [
        { id: "a", text: "200" },
        { id: "b", text: "400" },
        { id: "c", text: "404" },
        { id: "d", text: "500" },
      ],
      correctOptionId: "c",
    },
  ],

  // TypeScript Essentials
  "typescript-essentials": [
    {
      id: 1,
      question: "What is TypeScript in relation to JavaScript?",
      options: [
        { id: "a", text: "A replacement scripting engine" },
        { id: "b", text: "A statically typed superset of JavaScript" },
        { id: "c", text: "A front-end UI framework" },
        { id: "d", text: "A database query language" },
      ],
      correctOptionId: "b",
    },
    {
      id: 2,
      question: "Which keyword defines an object contract with shape and method definitions?",
      options: [
        { id: "a", text: "interface" },
        { id: "b", text: "struct" },
        { id: "c", text: "prototype" },
        { id: "d", text: "record" },
      ],
      correctOptionId: "a",
    },
    {
      id: 3,
      question: "Which TypeScript utility type constructs a type with all properties set to optional?",
      options: [
        { id: "a", text: "Required<T>" },
        { id: "b", text: "Readonly<T>" },
        { id: "c", text: "Partial<T>" },
        { id: "d", text: "Pick<T>" },
      ],
      correctOptionId: "c",
    },
    {
      id: 4,
      question: "What does the 'any' type indicate in TypeScript?",
      options: [
        { id: "a", text: "Only primitive numbers and strings" },
        { id: "b", text: "Disables type-checking for that variable" },
        { id: "c", text: "A strict unknown type" },
        { id: "d", text: "A compile-time constant" },
      ],
      correctOptionId: "b",
    },
    {
      id: 5,
      question: "What is the configuration file name used by the TypeScript compiler?",
      options: [
        { id: "a", text: "package.json" },
        { id: "b", text: "tslint.json" },
        { id: "c", text: "tsconfig.json" },
        { id: "d", text: "typescript.config.js" },
      ],
      correctOptionId: "c",
    },
  ],

  // Python for Beginners
  "python-for-beginners": [
    {
      id: 1,
      question: "Which keyword is used to declare a function in Python?",
      options: [
        { id: "a", text: "function" },
        { id: "b", text: "func" },
        { id: "c", text: "def" },
        { id: "d", text: "define" },
      ],
      correctOptionId: "c",
    },
    {
      id: 2,
      question: "Which Python data structure is ordered, mutable, and written with square brackets []?",
      options: [
        { id: "a", text: "Tuple" },
        { id: "b", text: "List" },
        { id: "c", text: "Set" },
        { id: "d", text: "Dictionary" },
      ],
      correctOptionId: "b",
    },
    {
      id: 3,
      question: "How do you start a single-line comment in Python?",
      options: [
        { id: "a", text: "//" },
        { id: "b", text: "/*" },
        { id: "c", text: "#" },
        { id: "d", text: "--" },
      ],
      correctOptionId: "c",
    },
    {
      id: 4,
      question: "What method is used to add an item to the end of a Python list?",
      options: [
        { id: "a", text: "push()" },
        { id: "b", text: "append()" },
        { id: "c", text: "add()" },
        { id: "d", text: "insert()" },
      ],
      correctOptionId: "b",
    },
    {
      id: 5,
      question: "Which built-in function returns the number of items in a sequence?",
      options: [
        { id: "a", text: "count()" },
        { id: "b", text: "size()" },
        { id: "c", text: "len()" },
        { id: "d", text: "length()" },
      ],
      correctOptionId: "c",
    },
  ],
};

export const defaultQuizQuestions: QuizQuestion[] = courseQuestionsMap["cpp-programming"];

export function getQuizQuestionsForCourse(slug: string): QuizQuestion[] {
  return courseQuestionsMap[slug] || defaultQuizQuestions;
}
