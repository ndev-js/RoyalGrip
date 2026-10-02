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
    <div className="flex flex-col gap-4 bg-navy-900 p-5 sm:flex-row sm:items-center sm:p-7">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange-500/15 text-orange-400 ring-1 ring-orange-500/30 sm:h-14 sm:w-14 sm:rounded-2xl">
        <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
      </span>
      <div>
        <p className="font-display text-3xl font-black leading-none tracking-tight text-white tabular-nums sm:text-4xl">
          {n}<span className="text-xl text-orange-500 sm:text-2xl">{suffix}</span>
        </p>
        <p className="mt-1.5 text-xs font-medium text-slate-300 sm:text-sm">{label}</p>
      </div>
    </div>
  );
};

const Stats = () => {
  const { ref, seen } = useInView(0.3);
  return (
    <section aria-label="Company statistics" className="bg-navy-900 px-4 py-10 sm:px-8 sm:py-14">
      {/* The 1px gap over a white/10 backdrop draws hairlines between cells at every column count */}
      <div ref={ref} className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 ring-1 ring-white/10 lg:grid-cols-4">
        {STATS.map((s, i) => <StatCell key={s.label} run={seen} icon={ICONS[i]} {...s} />)}
      </div>
    </section>
  );
};

export default Stats;
