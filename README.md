# Course Player

A modern course player built with the Next.js App Router. It lists courses on the home page and offers a full learning experience on every course page: video lessons, watch-based progress tracking, a curriculum panel, topic questions, course materials and a comments section.

## Features

- **Course catalog** — a responsive grid of course cards with static generation for fast loading.
- **Adaptive course actions** — each card shows a smart action: `Start` when there is no progress, `Continue` when the learner is part-way through, and `Review` once the course reaches 100%.
- **Interactive player** — embedded YouTube lessons with a poster overlay and a custom play button.
- **Watch-based progress** — progress is stored locally in the browser and updated in real time as videos are watched. The home page reflects it instantly.
- **Curriculum panel** — courses are split into topics (weeks) with lessons, a live percentage bar, and a sticky scrollable list.
- **Lesson states** — lessons are marked as `completed`, `current` or `locked` depending on your progress.
- **Course summary** — a PDF summary is available for download/view per course.
- **Quiz modal** — each topic and lesson exposes a timed multiple-choice quiz with navigation between questions.
- **Materials & metadata** — every course shows duration, lesson count, enrollment and language.
- **Comments** — an inline comment form with client-side persistence.
- **Action bar** — quick access to the curriculum, comments, an ask-question form and a leaderboard view.
- **Skeleton loading screens** — each page has its own placeholder-shaped loader shown during navigation (a "UX loader").

## Tech Stack

- **Framework** — [Next.js](https://nextjs.org) 16 (App Router, Server Components, SSG)
- **Language** — [TypeScript](https://www.typescriptlang.org)
- **UI** — [React](https://react.dev) 19, [Tailwind CSS](https://tailwindcss.com) 4
- **Icons** — [lucide-react](https://lucide.dev/guide/packages/lucide-react)
- **Video** — [@videojs/react](https://github.com/videojs/video.js/tree/main/player) + [@videojs/youtube-video](https://github.com/videojs/video.js/tree/main/contrib-youtube)
- **Fonts** — loaded via `next/font` (League Spartan, Poppins, IBM Plex Sans Arabic)
- **State** — client-side state + browser `localStorage` for progress persistence

## Getting Started

### Prerequisites

- Node.js 18.18 or newer
- npm (or a package manager of your choice: yarn, pnpm, bun)

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
```

### Start the production server

```bash
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── app/                 # App Router pages and layouts
│   ├── page.tsx         # Home page (course catalog)
│   ├── loading.tsx      # Home page skeleton loader
│   ├── courses/[slug]/  # Course detail page + its skeleton loader
│   └── layout.tsx       # Root layout (fonts + global shell)
├── components/          # UI building blocks
│   ├── courses/         # Course cards and grid
│   ├── player/          # Player, curriculum, quiz modal, action bar
│   ├── materials/       # Course materials section
│   ├── comments/        # Comments list and form
│   ├── layout/          # Container, page header, breadcrumb
│   └── ui/              # Shared primitives (Button, Modal, Skeleton, ...)
├── hooks/               # Progress and data hooks
├── lib/                 # Storage, progress, curriculum, helpers
├── data/                # Static course, quiz, comment and leaderboard data
├── styles/              # Design tokens (colors, type scale, spacing)
└── types/               # Shared TypeScript types
```

## How Progress Works

Progress is stored per course in `localStorage` under the key `cp:progress:<slug>` as a percentage (0-100).

- Watching a lesson saves the highest watched percentage.
- The course card on the home page reads this value and updates its action button live.
- The curriculum panel uses the same percentage to unlock lessons and to move the marker on the progress bar.

## How Courses Are Added

Courses are defined in `src/data/courses.ts`. Each course includes metadata, a YouTube video reference, an image, and a list of topics with lessons. The slug paths are generated statically with `generateStaticParams`, so adding a course to the data file is enough to create its page.

## Deployment

The project builds as a fully static site (SSG). You can deploy it to any platform that supports Node.js or static hosting, such as [Vercel](https://vercel.com), by connecting the repository and running the default build command:

```bash
npm run build
```