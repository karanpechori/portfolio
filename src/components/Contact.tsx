const links = [
  { label: "Email", href: "mailto:kpechori@gmail.com", value: "kpechori@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/karan-pechori", value: "linkedin.com/in/karan-pechori" },
  { label: "GitHub", href: "https://github.com/karanpechori", value: "github.com/karanpechori" },
];

export default function Contact() {
  return (
    <section className="mb-16">
      <h2 className="text-sm uppercase tracking-widest text-[var(--color-muted)] mb-6">
        Get in touch
      </h2>
      <p className="leading-relaxed mb-5">
        Best way to reach me is email. I reply within a day.
      </p>
      <ul className="grid gap-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center justify-between rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 transition hover:border-[var(--color-accent)]/50"
            >
              <span className="text-sm text-[var(--color-muted)]">{l.label}</span>
              <span className="text-sm">{l.value} →</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
