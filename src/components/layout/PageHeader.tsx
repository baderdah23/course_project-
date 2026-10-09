import { Container } from "./Container";

interface Props {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: Props) {
  return (
    <header className="mb-10 bg-surface-alt pt-10 pb-8">
      <Container>
        <h1 className="text-h1">{title}</h1>
        {description && <p className="mt-2 text-lg text-soft">{description}</p>}
      </Container>
    </header>
  );
}
