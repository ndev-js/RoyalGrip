import type { ReactNode } from "react";

/* Eyebrow above a heading; `onDark` is for the fixed-navy sections */
const SectionLabel = ({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) => (
  <span className={`inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] ${onDark ? "text-orange-400" : "text-accent"}`}>
    <span className="h-0.5 w-8 rounded-full bg-orange-500" />
    {children}
  </span>
);

export default SectionLabel;
