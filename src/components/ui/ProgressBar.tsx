interface Props {
  value: number;
  label: string;
}

export function ProgressBar({ value, label }: Props) {
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      className="h-(--progress-h) overflow-hidden rounded-full bg-track"
    >
      <div
        className="h-full bg-progress transition-[width] duration-200 ease-standard motion-reduce:transition-none"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
