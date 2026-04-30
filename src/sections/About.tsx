import Section from "../components/Section";
import Tag from "../components/Tag";
import { profile } from "../data/profile";
import { skills } from "../data/skills";

export default function About() {
  return (
    <Section title="About">
      <p className="leading-relaxed mb-6">{profile.about}</p>
      <div className="space-y-3">
        {skills.map(({ group, items }) => (
          <div key={group} className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-[var(--color-muted)] w-24 shrink-0">
              {group}
            </span>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
