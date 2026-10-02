import { Link } from "react-router";

/* `onDark` forces white lettering for navy backgrounds regardless of theme */
const Logo = ({ onDark = false }: { onDark?: boolean }) => {
  const ink = onDark ? "text-white" : "text-heading";
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="RoyalGrip Waterproofing — home">
      <svg viewBox="0 0 48 48" className="h-10 w-10 shrink-0" aria-hidden="true">
        <path d="M24 5 44 21v3H34L24 15 14 24H4v-3Z" fill="#F97316" />
        <path d="M24 20s-8 9-8 14a8 8 0 0 0 16 0c0-5-8-14-8-14Z" fill="currentColor" className={ink} />
        <circle cx="24" cy="35" r="3.2" fill="#F97316" />
      </svg>
      <span className="leading-none">
        <span className={`block font-display text-xl font-extrabold tracking-tight ${ink}`}>
          ROYAL<span className="text-orange-500">GRIP</span>
        </span>
        <span className={`block text-[9px] font-semibold tracking-[0.22em] ${onDark ? "text-slate-400" : "text-muted"}`}>WATERPROOFING</span>
      </span>
    </Link>
  );
};

export default Logo;
