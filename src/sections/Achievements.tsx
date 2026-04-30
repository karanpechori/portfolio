import Section from "../components/Section";
import { surface } from "../components/styles";
import { achievements } from "../data/achievements";

export default function Achievements() {
  return (
    <Section title="Achievements">
      <ul className="space-y-3">
        {achievements.map((it) => (
          <li key={it.title} className={`rounded-lg ${surface} p-4`}>
            <div className="font-medium text-white">{it.title}</div>
            <div className="text-sm text-[var(--color-muted)] mt-1">{it.body}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
