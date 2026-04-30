import Section from "../components/Section";
import { roles } from "../data/experience";

export default function Experience() {
  return (
    <Section title="Experience">
      <div className="space-y-8">
        {roles.map((r) => (
          <div key={r.company} className="border-l-2 border-[var(--color-border)] pl-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="font-medium text-white">
                {r.title} ·{" "}
                <span className="text-[var(--color-accent)]">{r.company}</span>
              </h3>
              <span className="text-xs text-[var(--color-muted)]">{r.period}</span>
            </div>
            <div className="text-xs text-[var(--color-muted)] mb-3">{r.location}</div>
            <ul className="space-y-1.5 text-sm leading-relaxed list-disc list-outside ml-4">
              {r.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
