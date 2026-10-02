import type { ReactNode } from "react";

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-orange-600 ring-1 ring-orange-500/20 dark:text-orange-400">
    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
    {children}
  </span>
);

export default SectionLabel;
