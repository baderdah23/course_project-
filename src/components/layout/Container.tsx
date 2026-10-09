interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: Props) {
  return (
    <div
      className={`mx-auto w-full max-w-content px-(--page-gutter) ${className}`}
    >
      {children}
    </div>
  );
}
