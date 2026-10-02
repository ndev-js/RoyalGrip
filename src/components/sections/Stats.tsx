import { STATS } from "../../constants/content";
import { useCountUp } from "../../hooks/useCountUp";
import { useInView } from "../../hooks/useInView";
import type { Stat, Tokens } from "../../types";

const StatCell = ({ t, run, value, suffix, label }: Stat & { t: Tokens; run: boolean }) => {
  const n = useCountUp(value, run);
  return (
    <div className="border-inherit px-6 py-9 text-center">
      <p className="text-3xl font-black tracking-tight text-orange-500 sm:text-4xl">
        {n}<span className="align-top text-xl">{suffix}</span>
      </p>
      <p className={`mt-1.5 text-xs font-medium sm:text-sm ${t.body}`}>{label}</p>
    </div>
  );
};

const Stats = ({ t }: { t: Tokens }) => {
  const { ref, seen } = useInView(0.3);
  return (
    <section className={`border-y ${t.border} ${t.surface}`}>
      <div ref={ref} className={`mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y lg:grid-cols-4 lg:divide-y-0 ${t.border}`}>
        {STATS.map((s) => <StatCell key={s.label} t={t} run={seen} {...s} />)}
      </div>
    </section>
  );
};

export default Stats;
