import { ProgressBar } from "@/components/ui/ProgressBar";

export function CourseProgress({ percent }: { percent: number }) {
  // Keeps the marker inside the bar edges at 0% and 100%.
  const markerPosition = {
    left: `clamp(1.25rem, ${percent}%, calc(100% - 1.25rem))`,
  };

  return (
    <div className="relative mt-14 mb-8">
      <div
        aria-hidden="true"
        style={markerPosition}
        className="absolute bottom-full mb-3 -translate-x-1/2"
      >
        <span className="relative grid size-10 place-items-center rounded-full border border-line bg-white text-xxs text-muted">
          You
          <span className="absolute top-full left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-r border-b border-line bg-white" />
        </span>
      </div>

      <ProgressBar value={percent} label="Course progress" />

      <span
        aria-hidden="true"
        style={markerPosition}
        className="absolute top-full mt-2 -translate-x-1/2 text-xxs"
      >
        {percent}%
      </span>
    </div>
  );
}
