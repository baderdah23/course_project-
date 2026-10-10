import { Container } from "./Container";

interface Props {
  title: string;
  description?: string;
  breadcrumb?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  description,
  breadcrumb,
  className = "mb-10",
}: Props) {
  return (
    <header
      className={`bg-surface-alt pb-8 ${breadcrumb ? "pt-4" : "pt-10"} ${className}`}
    >
      <Container>
        {breadcrumb}
        <h1 className="text-h1">{title}</h1>
        {description && <p className="mt-2 text-lg text-soft">{description}</p>}
      </Container>
    </header>
  );
}
