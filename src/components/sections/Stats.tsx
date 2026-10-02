import type { ElementType } from "react";
import { Building2, CalendarCheck, Ruler, ShieldCheck } from "lucide-react";
import { STATS } from "../../constants/content";
import { useCountUp } from "../../hooks/useCountUp";
import { useInView } from "../../hooks/useInView";
import type { Stat } from "../../types";

/* One icon per entry in STATS, in order */
const ICONS: ElementType[] = [CalendarCheck, Building2, Ruler, ShieldCheck];

const StatCell = ({ run, value, suffix, label, icon: Icon }: Stat & { run: boolean; icon: ElementType }) => {
  const n = useCountUp(value, run);
  return (
    <div className="flex items-center gap-4 px-2 py-2 sm:justify-center">
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-orange-500/15 text-orange-500 ring-1 ring-orange-500/30">
        <Icon className="h-7 w-7" />
      </span>
      <div>
        <p className="font-display text-4xl font-black leading-none tracking-tight text-white">
          {n}<span className="text-2xl text-orange-500">{suffix}</span>
        </p>
        <p className="mt-1.5 text-sm font-medium text-slate-300">{label}</p>
      </div>
    </div>
  );
};

const Stats = () => {
  const { ref, seen } = useInView(0.3);
  return (
    <section aria-label="Company statistics" className="bg-navy-900 py-14">
      <div ref={ref} className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {STATS.map((s, i) => <StatCell key={s.label} run={seen} icon={ICONS[i]} {...s} />)}
      </div>
    </section>
  );
};

export default Stats;
