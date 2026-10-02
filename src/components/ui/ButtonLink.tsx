import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

/* min-h-12 keeps every button a comfortable 48px touch target */
const BASE = "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold transition-all duration-200 active:translate-y-0 active:scale-[0.98]";

const VARIANTS = {
  primary: "shine bg-orange-500 text-white shadow-lg shadow-orange-500/25 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30",
  outline: "border border-line bg-raised text-heading shadow-card hover:border-orange-500 hover:text-accent",
  white: "shine bg-white text-navy-950 shadow-lg hover:-translate-y-0.5 hover:shadow-xl",
  /* For use on photos and navy sections */
  ghost: "border border-white/25 bg-white/5 text-white backdrop-blur hover:border-white/60 hover:bg-white/15",
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
