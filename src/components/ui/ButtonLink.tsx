import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const BASE = "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all";

const VARIANTS = {
  primary: "bg-orange-500 text-white shadow-lg shadow-orange-500/30 hover:-translate-y-0.5 hover:bg-orange-600",
  outline: "border-2 border-line text-heading hover:border-orange-500 hover:text-orange-500",
  white: "bg-white text-navy-950 shadow-lg hover:-translate-y-0.5",
  /* For use on photos and navy sections */
  ghost: "border-2 border-white/30 text-white hover:border-white hover:bg-white/10",
};

interface Props {
  to: string;
  variant?: keyof typeof VARIANTS;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}

/* Internal paths use the router; tel:, mailto: and external URLs render a plain anchor */
const ButtonLink = ({ to, variant = "primary", arrow = false, className = "", children }: Props) => {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
    </>
  );
  return to.startsWith("/")
    ? <Link to={to} className={classes}>{content}</Link>
    : <a href={to} className={classes}>{content}</a>;
};

export default ButtonLink;
