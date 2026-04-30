const items = [
  {
    title: "Patent No. 202111041609",
    body: "Smart Shoe with Integrated Locking + Fitness Tracking",
  },
  {
    title: "Cyber Srishti Prize Winner",
    body: "Fly Wing — bird-shaped surveillance aircraft (Arduino + flight controller)",
  },
];

export default function Achievements() {
  return (
    <section className="mb-16">
      <h2 className="text-sm uppercase tracking-widest text-[var(--color-muted)] mb-6">
        Achievements
      </h2>
      <ul className="space-y-3">
        {items.map((it) => (
          <li
            key={it.title}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
          >
            <div className="font-medium text-white">{it.title}</div>
            <div className="text-sm text-[var(--color-muted)] mt-1">
              {it.body}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
