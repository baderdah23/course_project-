import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";

export function ButtonLink({
  children,
  className = "",
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link
      className={`inline-flex min-h-(--btn-height) items-center justify-center gap-2 rounded-sm bg-primary-strong px-6 font-heading text-base font-medium text-white transition-colors duration-150 hover:bg-primary-strong-hover motion-reduce:transition-none ${className}`}
      {...props}
    >
      {children}
      <ArrowRight size={18} aria-hidden="true" />
    </Link>
  );
}
