import { CLIENTS } from "../../constants/content";
import type { Tokens } from "../../types";

const Marquee = ({ t }: { t: Tokens }) => (
  <section className={`overflow-hidden py-8 ${t.page}`}>
    <p className={`mb-5 text-center text-[11px] font-bold uppercase tracking-[0.25em] ${t.muted}`}>
      Trusted on sites for
    </p>
    <div className="relative flex overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...CLIENTS, ...CLIENTS].map((c, i) => (
          <span key={i} className={`mx-8 text-lg font-bold tracking-tight transition-colors ${t.muted} hover:text-orange-500`}>
            {c}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Marquee;
