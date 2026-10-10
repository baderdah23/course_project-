import { ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";

export function Button({
  children,
  className = "",
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      className={`inline-flex min-h-(--btn-height) cursor-pointer items-center justify-center gap-2 rounded-sm bg-primary-strong px-6 font-heading text-base font-medium text-white transition-colors duration-150 hover:bg-primary-strong-hover motion-reduce:transition-none ${className}`}
      {...props}
    >
      {children}
      <ArrowRight size={18} aria-hidden="true" />
    </button>
  );
}
