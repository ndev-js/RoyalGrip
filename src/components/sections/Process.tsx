import { PROCESS_STEPS } from "../../constants/content";
import { useInView } from "../../hooks/useInView";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

/* Navy in both themes */
const Process = () => {
  const { ref, seen } = useInView<HTMLOListElement>(0.25);

  return (
  <section id="process" className="relative isolate overflow-hidden bg-navy-950 py-16 sm:py-20 lg:py-28">
    <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
    <div className="pointer-events-none absolute -left-40 top-0 -z-10 h-96 w-96 rounded-full bg-orange-500/15 blur-3xl" aria-hidden="true" />
    <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-navy-700/60 blur-3xl" aria-hidden="true" />

    <div className="mx-auto max-w-7xl px-4 sm:px-8">
      <SectionHeading center onDark label="How we work"
        title="Five steps from first call to a dry building."
        lead="Every stage is photographed and documented, so you always know what was done and why." />

      {/* A vertical timeline on phones and tablets, a horizontal one on desktop */}
      <ol ref={ref} className="relative mx-auto mt-12 max-w-xl lg:mt-16 lg:grid lg:max-w-none lg:grid-cols-5 lg:gap-6">
        <li aria-hidden="true" className="absolute bottom-8 left-7 top-8 border-l-2 border-dashed border-white/15 lg:bottom-auto lg:left-[10%] lg:right-[10%] lg:border-l-0 lg:border-t-2">
          {/* The orange line draws itself down (phones) or across (desktop) the first time the steps scroll into view */}
          <span className={`absolute -left-0.5 top-0 block h-full w-0.5 origin-top bg-orange-500 transition-transform duration-[2400ms] ease-out lg:left-0 lg:-top-0.5 lg:h-0.5 lg:w-full lg:origin-left ${
            seen ? "scale-100" : "scale-y-0 scale-x-100 lg:scale-x-0 lg:scale-y-100"
          }`} />
        </li>
        {PROCESS_STEPS.map((s, i) => (
          <li key={s.n} className="relative pb-9 last:pb-0 lg:pb-0">
            <Reveal delay={i * 100} from={i % 2 ? "right" : "left"}>
              <div className="group flex gap-5 lg:block lg:text-center">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-orange-500 font-display text-lg font-black text-white shadow-lg shadow-orange-500/40 ring-8 ring-navy-950 transition-transform duration-300 ease-out-soft group-hover:scale-110 lg:mx-auto lg:h-16 lg:w-16 lg:text-xl">
                  {s.n}
                </span>
                <div className="pt-1 lg:pt-0">
                  <h3 className="text-lg font-extrabold text-white lg:mt-6">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300 lg:mx-auto lg:mt-2 lg:max-w-xs">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </section>
  );
};

export default Process;
