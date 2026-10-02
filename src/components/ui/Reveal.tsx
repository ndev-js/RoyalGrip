import type { ReactNode } from "react";
import { useInView } from "../../hooks/useInView";

const Reveal = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => {
  const { ref, seen } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${seen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
