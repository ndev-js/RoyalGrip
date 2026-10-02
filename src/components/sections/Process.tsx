import { PROCESS_STEPS } from "../../constants/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

/* Navy in both themes */
const Process = () => (
  <section id="process" className="relative overflow-hidden bg-navy-950 py-20 lg:py-28">
    <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-orange-500/15 blur-3xl" aria-hidden="true" />
    <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-navy-700/60 blur-3xl" aria-hidden="true" />

    <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeading center onDark label="How we work"
        title="Five steps from first call to a dry building."
        lead="Every stage is photographed and documented, so you always know what was done and why." />

      <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {/* Connector behind the numbered circles on desktop */}
        <li aria-hidden="true" className="absolute left-[10%] right-[10%] top-8 hidden border-t-2 border-dashed border-white/20 lg:block" />
        {PROCESS_STEPS.map((s, i) => (
          <li key={s.n} className="relative">
            <Reveal delay={i * 100}>
              <div className="group text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-orange-500 font-display text-xl font-black text-white shadow-lg shadow-orange-500/40 ring-8 ring-navy-950 transition-transform group-hover:scale-110">
                  {s.n}
                </span>
                <h3 className="mt-6 text-lg font-extrabold text-white">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-300">{s.desc}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Process;
