import type { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function Section({ title, children }: Props) {
  return (
    <section className="mb-16">
      <h2 className="text-sm uppercase tracking-widest text-[var(--color-muted)] mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}
