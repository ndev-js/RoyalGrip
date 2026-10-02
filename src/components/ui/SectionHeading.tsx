import type { ReactNode } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

interface Props {
  label: string; title: ReactNode; lead?: ReactNode;
  center?: boolean; onDark?: boolean; className?: string;
}

const SectionHeading = ({ label, title, lead, center = false, onDark = false, className = "max-w-2xl" }: Props) => (
  <Reveal>
    <div className={`${className} ${center ? "mx-auto text-center" : ""}`}>
      <SectionLabel onDark={onDark}>{label}</SectionLabel>
      <h2 className={`mt-4 text-title font-extrabold tracking-tight ${onDark ? "text-white" : "text-heading"}`}>
        {title}
      </h2>
      {lead && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${onDark ? "text-slate-300" : "text-body"}`}>{lead}</p>}
    </div>
  </Reveal>
);

export default SectionHeading;
