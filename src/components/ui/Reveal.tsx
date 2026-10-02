import type { ReactNode } from "react";
import { useInView } from "../../hooks/useInView";

/* Where the block starts before it slides/scales into place */
const HIDDEN = {
  up: "translate-y-5",
  left: "-translate-x-10",
  right: "translate-x-10",
  scale: "scale-90",
};

interface Props { children: ReactNode; delay?: number; className?: string; from?: keyof typeof HIDDEN }

const Reveal = ({ children, delay = 0, className = "", from = "up" }: Props) => {
  const { ref, seen } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-[opacity,translate,scale] duration-700 ease-out-soft ${seen ? "translate-x-0 translate-y-0 scale-100 opacity-100" : `opacity-0 ${HIDDEN[from]}`} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
