const roles = [
  {
    company: "WizCommerce",
    title: "Software Engineer II",
    period: "Jan 2024 — Present",
    location: "Gurugram",
    bullets: [
      "Shipped 240+ merged PRs across B2C storefront, B2B platform, CRM, and WordPress widget repos",
      "Built B2C storefront end-to-end: pre-login, signup, responsive PDP/PLP, cart, payment, checkout",
      "Built SEO infrastructure from scratch — dynamic slugs, structured meta, OG, canonical URLs, country-based routing",
      "Designed and shipped CRM KPI Dashboard (calendar, lead/order/abandoned-cart widgets, deep-linking)",
      "Authored WordPress widget library used across customer storefronts (fat-menu, bestseller, similar-products)",
    ],
  },
  {
    company: "Cognizant",
    title: "Programmer Analyst",
    period: "Sept 2022 — Dec 2023",
    location: "Gurugram",
    bullets: [
      "Maintained and modified production programs for evolving business requirements",
      "Diagnosed program malfunctions, identified root causes, and implemented fixes",
    ],
  },
  {
    company: "ITNow Inc.",
    title: "ServiceNow Developer (Part-Time)",
    period: "Dec 2020 — Jan 2022",
    location: "Remote",
    bullets: [
      "Translated client requirements into ServiceNow application features",
      "Performed routine platform upgrades and integrated open-source code into custom apps",
    ],
  },
];

export default function Experience() {
  return (
    <section className="mb-16">
      <h2 className="text-sm uppercase tracking-widest text-[var(--color-muted)] mb-6">
        Experience
      </h2>
      <div className="space-y-8">
        {roles.map((r) => (
          <div key={r.company} className="border-l-2 border-[var(--color-border)] pl-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="font-medium text-white">
                {r.title} ·{" "}
                <span className="text-[var(--color-accent)]">{r.company}</span>
              </h3>
              <span className="text-xs text-[var(--color-muted)]">
                {r.period}
              </span>
            </div>
            <div className="text-xs text-[var(--color-muted)] mb-3">
              {r.location}
            </div>
            <ul className="space-y-1.5 text-sm leading-relaxed list-disc list-outside ml-4">
              {r.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
