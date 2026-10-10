import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  label: string;
  value: string;
}

export function MaterialRow({ icon: Icon, label, value }: Props) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-line py-4 first:pt-0 last:border-0 last:pb-0">
      <dt className="flex items-center gap-4 font-heading text-base">
        <Icon size={22} aria-hidden="true" />
        {label}
      </dt>
      <dd className="text-base">{value}</dd>
    </div>
  );
}
