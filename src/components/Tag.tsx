import type { ReactNode } from "react";
import { surface } from "./styles";

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className={`rounded-md ${surface} px-2 py-1 text-xs`}>{children}</span>
  );
}
