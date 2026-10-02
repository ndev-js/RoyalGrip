import { PROCESS_STEPS } from "../../constants/content";
import type { Tokens } from "../../types";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";

const Process = ({ t }: { t: Tokens }) => (
  <section id="process" className={`py-20 lg:py-28 ${t.surface}`}>
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <Reveal>
        <div className="max-w-2xl">
          <SectionLabel>How we work</SectionLabel>
          <h2 className={`mt-4 text-3xl font-black tracking-tight sm:text-4xl ${t.heading}`}>
            Five stages, documented at every step.
          </h2>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-5">
        {PROCESS_STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 90}>
            <div className={`group relative h-full overflow-hidden rounded-2xl border ${t.border} ${t.raised} p-6 transition-colors hover:border-orange-500`}>
              <span className="text-3xl font-black text-orange-500/30 transition-colors group-hover:text-orange-500">{s.n}</span>
              <h3 className={`mt-3 text-base font-bold ${t.heading}`}>{s.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${t.body}`}>{s.desc}</p>
              <div className="absolute inset-x-6 bottom-0 h-0.5 origin-left scale-x-0 bg-orange-500 transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
