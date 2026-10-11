import { Container } from "@/components/layout/Container";
import { Skeleton } from "@/components/ui/Skeleton";

const CARD_COUNT = 6;

export default function Loading() {
  return (
    <main id="main">
      <header className="bg-surface-alt pt-10 pb-8">
        <Container>
          <Skeleton className="h-12 w-2/3 max-w-80" />
          <Skeleton className="mt-4 h-6 w-1/2 max-w-60" />
        </Container>
      </header>

      <Container>
        <ul
          role="list"
          aria-label="Loading courses"
          className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,20rem),1fr))] gap-8 pb-20"
        >
          {Array.from({ length: CARD_COUNT }).map((_, index) => (
            <li key={index} className="flex">
              <div className="flex w-full flex-col overflow-hidden rounded-md border border-line bg-white">
                <Skeleton className="aspect-video w-full rounded-none" />
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                  <div className="mt-2 mb-4 flex gap-x-4">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                  <div className="mt-auto grid gap-2">
                    <div className="flex justify-between">
                      <Skeleton className="h-3 w-16" />
                      <Skeleton className="h-3 w-8" />
                    </div>
                    <Skeleton className="h-(--progress-h) w-full rounded-full" />
                    <Skeleton className="mt-3 h-12 w-28" />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}