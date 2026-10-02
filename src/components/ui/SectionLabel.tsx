import type { ReactNode } from "react";

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
    <span className="h-px w-6 bg-orange-500" />
    {children}
  </span>
);

export default SectionLabel;
