import { Container } from "@/components/layout/Container";
import { Skeleton } from "@/components/ui/Skeleton";

const ACTION_BUTTONS = 4;
const MATERIAL_ROWS = 4;
const COMMENT_COUNT = 3;
const TOPIC_COUNT = 2;
const LESSON_ROWS = 4;

export default function Loading() {
  return (
    <main id="main">
      <header className="bg-surface-alt pt-4 pb-8 mb-6">
        <Container>
          <Skeleton className="h-4 w-44" />
          <Skeleton className="mt-4 h-12 w-2/3 max-w-96" />
        </Container>
      </header>

      <Container>
        <div className="grid gap-(--layout-gap) pb-20 lg:grid-cols-[minmax(0,864fr)_minmax(0,468fr)]">
          <div className="flex min-w-0 flex-col gap-6">
            <div className="aspect-(--video-ratio) overflow-hidden rounded-md bg-ink">
              <Skeleton className="size-full rounded-none" />
            </div>

            <ul role="list" aria-label="Loading actions" className="flex gap-3">
              {Array.from({ length: ACTION_BUTTONS }).map((_, index) => (
                <li key={index}>
                  <Skeleton className="size-(--tap-min) rounded-full" />
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-16">
              <section aria-label="Loading materials">
                <Skeleton className="h-9 w-72" />
                <div className="mt-6 grid gap-x-16 rounded-sm bg-white p-10 shadow-card sm:grid-cols-2">
                  {[0, 1].map((column) => (
                    <dl key={column} className={column === 1 ? "hidden sm:block" : ""}>
                      {Array.from({ length: MATERIAL_ROWS }).map((_, row) => (
                        <div
                          key={row}
                          className="flex items-center justify-between gap-4 border-b border-line py-4 first:pt-0 last:border-0 last:pb-0"
                        >
                          <Skeleton className="h-5 w-36" />
                          <Skeleton className="h-5 w-24" />
                        </div>
                      ))}
                    </dl>
                  ))}
                </div>
              </section>

              <section aria-label="Loading comments">
                <Skeleton className="h-9 w-40" />
                <ul role="list" className="mt-6">
                  {Array.from({ length: COMMENT_COUNT }).map((_, index) => (
                    <li
                      key={index}
                      className="flex gap-6 border-b border-line py-6 first:pt-0 last:border-0"
                    >
                      <Skeleton className="size-(--avatar-size) shrink-0 rounded-full" />
                      <div className="min-w-0 flex-1">
                        <Skeleton className="h-5 w-40" />
                        <Skeleton className="mt-2 h-4 w-24" />
                        <div className="mt-4 space-y-2">
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-2/3" />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <Skeleton className="mt-10 h-40 w-full" />
                <Skeleton className="mt-8 h-12 w-40" />
              </section>
            </div>
          </div>

          <aside className="min-w-0" aria-label="Loading curriculum">
            <Skeleton className="h-7 w-60" />
            <div className="mt-14 mb-8">
              <div className="flex justify-end pe-5">
                <Skeleton className="size-10 rounded-full" />
              </div>
              <Skeleton className="mt-2 h-(--progress-h) w-full rounded-full" />
            </div>

            <div className="flex flex-col gap-6">
              {Array.from({ length: TOPIC_COUNT }).map((_, topic) => (
                <div
                  key={topic}
                  className="rounded-sm border border-line p-6"
                >
                  <Skeleton className="h-6 w-2/3" />
                  <Skeleton className="mt-2 h-4 w-3/4" />
                  <ol role="list" className="mt-4 border-t border-line">
                    {Array.from({ length: LESSON_ROWS }).map((_, row) => (
                      <li
                        key={row}
                        className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-b border-line py-4 last:border-0"
                      >
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-5 w-28" />
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}