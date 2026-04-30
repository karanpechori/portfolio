export type ProjectStatus = "In progress" | "Planned" | "Shipped";

export interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface Project {
  name: string;
  status: ProjectStatus;
  description: string;
  tags: string[];
  href: string;
}

export interface Achievement {
  title: string;
  body: string;
}

export interface ContactLink {
  label: string;
  href: string;
  value: string;
}

export interface SkillGroup {
  group: string;
  items: string[];
}
