import type { Tokens } from "../../types";

const Logo = ({ t }: { t: Tokens }) => (
  <a href="#home" className="flex items-center gap-2.5 group">
    <svg viewBox="0 0 48 48" className="h-9 w-9 shrink-0" aria-hidden="true">
      <path d="M24 5 44 21v3H34L24 15 14 24H4v-3Z" fill="#F97316" />
      <path d="M24 20s-8 9-8 14a8 8 0 0 0 16 0c0-5-8-14-8-14Z" fill="currentColor" className={t.heading} />
      <circle cx="24" cy="35" r="3.2" fill="#F97316" />
    </svg>
    <span className="leading-none">
      <span className={`block text-lg font-black tracking-tight ${t.heading}`}>
        ROYAL<span className="text-orange-500">GRIP</span>
      </span>
      <span className={`block text-[9px] font-semibold tracking-[0.22em] ${t.muted}`}>WATERPROOFING</span>
    </span>
  </a>
);

export default Logo;
