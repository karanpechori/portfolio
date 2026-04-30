import Section from "../components/Section";
import { surface } from "../components/styles";
import { profile } from "../data/profile";
import { contacts } from "../data/contacts";

export default function Contact() {
  return (
    <Section title="Get in touch">
      <p className="leading-relaxed mb-5">{profile.contactBlurb}</p>
      <ul className="grid gap-3">
        {contacts.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className={`flex items-center justify-between rounded-md ${surface} px-4 py-3 transition hover:border-[var(--color-accent)]/50`}
            >
              <span className="text-sm text-[var(--color-muted)]">{l.label}</span>
              <span className="text-sm">{l.value} →</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
