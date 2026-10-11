interface Props {
  className?: string;
}

export function Skeleton({ className = "" }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded-sm bg-track ${className}`}
    />
  );
}