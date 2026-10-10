const TONES = {
  success: "bg-success-soft text-primary-strong",
  danger: "bg-danger-soft text-accent-strong",
} as const;

interface Props {
  tone: keyof typeof TONES;
  children: React.ReactNode;
}

export function Badge({ tone, children }: Props) {
  return (
    <span
      className={`rounded-sm px-3 py-1 text-xs tracking-badge uppercase ${TONES[tone]}`}
    >
      {children}
    </span>
  );
}
