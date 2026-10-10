import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-lg">
      <ol className="flex flex-wrap items-center gap-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-x-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="font-medium">
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRight size={16} aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
