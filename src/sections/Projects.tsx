import Section from "../components/Section";
import StatusBadge from "../components/StatusBadge";
import { surface } from "../components/styles";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <Section title="Projects">
      <div className="grid gap-4">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.href}
            className={`group rounded-lg ${surface} p-5 transition hover:border-[var(--color-accent)]/50`}
          >
            <div className="flex items-center justify-between gap-3 mb-2">
              <h3 className="font-medium text-white group-hover:text-[var(--color-accent)] transition">
                {p.name}
              </h3>
              <StatusBadge status={p.status} />
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
    </Section>
  );
}
