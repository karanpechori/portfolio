import { Fragment } from "react";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-2 text-sm text-[var(--color-muted)] mb-6">
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        {profile.status}
      </div>
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
        {profile.name}
      </h1>
      <p className="text-lg text-[var(--color-muted)] leading-relaxed">
        Full-stack engineer building B2B/B2C e-commerce, CRM, and SEO infra at{" "}
        <span className="text-[var(--color-accent)]">WizCommerce</span>. Three+
        years shipping React, TypeScript, and Node.js features that move
        business metrics.
      </p>
      <div className="mt-6 flex flex-wrap gap-2 text-sm text-[var(--color-muted)]">
        <span>📍 {profile.location}</span>
        {profile.highlights.map((h) => (
          <Fragment key={h}>
            <span>·</span>
            <span>{h}</span>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
