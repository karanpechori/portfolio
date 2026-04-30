import type { ProjectStatus } from "../types";

const statusColor: Record<ProjectStatus, string> = {
  "In progress": "bg-amber-500/15 text-amber-300 border-amber-500/30",
  Planned: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  Shipped: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
};

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={`text-xs px-2 py-0.5 rounded border ${statusColor[status]}`}>
      {status}
    </span>
  );
}
