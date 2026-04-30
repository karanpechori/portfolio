const skills = {
  Frontend: ["React", "TypeScript", "Next.js", "Redux", "Tailwind", "SEO"],
  Backend: ["Node.js", "Express", "REST APIs", "MongoDB", "MySQL"],
  Platforms: ["WordPress Plugins", "Vercel", "Git"],
};

export default function About() {
  return (
    <section className="mb-16">
      <h2 className="text-sm uppercase tracking-widest text-[var(--color-muted)] mb-4">
        About
      </h2>
      <p className="leading-relaxed mb-6">
        I work close to the customer journey — where frontend craft, performance,
        and SEO directly move business metrics. Most effective on full-stack
        product teams shipping features end-to-end. Currently SDE-II at
        WizCommerce, exploring senior roles where I can keep doing exactly that.
      </p>
      <div className="space-y-3">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-[var(--color-muted)] w-24 shrink-0">
              {group}
            </span>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-1 text-xs"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
