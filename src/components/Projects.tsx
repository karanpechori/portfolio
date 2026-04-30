const projects = [
  {
    name: "Storefront-in-a-box",
    status: "In progress",
    description:
      "Open-source Next.js storefront framework with SSR, dynamic SEO meta, structured data, image optimization, and edge caching. Lighthouse 95+ target.",
    tags: ["Next.js", "TypeScript", "SEO", "Edge"],
    href: "#",
  },
  {
    name: "Job queue service",
    status: "Planned",
    description:
      "Tiny self-hostable job queue à la Trigger.dev — persistent queue, retries with exponential backoff, dead-letter queue, and a dashboard.",
    tags: ["Node.js", "Redis", "System Design"],
    href: "#",
  },
  {
    name: "Hotel Booking Application",
    status: "Shipped",
    description:
      "Node.js app integrating the Amadeus API for real-time hotel availability and pricing. RESTful design, auth, and persistence.",
    tags: ["Node.js", "Express", "REST"],
    href: "#",
  },
];

const statusColor: Record<string, string> = {
  "In progress": "bg-amber-500/15 text-amber-300 border-amber-500/30",
  Planned: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  Shipped: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
};

export default function Projects() {
  return (
    <section className="mb-16">
      <h2 className="text-sm uppercase tracking-widest text-[var(--color-muted)] mb-6">
        Projects
      </h2>
      <div className="grid gap-4">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.href}
            className="group rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition hover:border-[var(--color-accent)]/50"
          >
            <div className="flex items-center justify-between gap-3 mb-2">
              <h3 className="font-medium text-white group-hover:text-[var(--color-accent)] transition">
                {p.name}
              </h3>
              <span
                className={`text-xs px-2 py-0.5 rounded border ${statusColor[p.status]}`}
              >
                {p.status}
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-3">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs text-[var(--color-muted)] before:content-['#']"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
