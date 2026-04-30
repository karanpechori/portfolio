import type { Project } from "../types";

export const projects: Project[] = [
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
