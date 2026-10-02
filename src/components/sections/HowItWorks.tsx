import { useState } from "react";
import { Droplets } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import ButtonLink from "../ui/ButtonLink";
import Reveal from "../ui/Reveal";
import RoofBuild from "../ui/RoofBuild";
import SectionHeading from "../ui/SectionHeading";

/* In build order, matching the layer indexes in RoofBuild (0 = slab … 3 = finish) */
const STEPS = [
  { title: "Prepare the slab", desc: "Loose screed comes off, cracks are repaired and the slope is corrected so water drains instead of ponding." },
  { title: "Prime the surface", desc: "A bitumen primer soaks into the concrete so the membrane bonds to the whole slab, not just the high spots." },
  { title: "Torch on the membrane", desc: "4mm modified bitumen sheets are heat-welded to the slab and to each other, forming one continuous waterproof skin." },
  { title: "Protect the finish", desc: "Screed, slate granules or aluminium facing shield the membrane from sun and foot traffic." },
];

/* Navy in both themes */
const HowItWorks = () => {
  const { ref, seen } = useInView(0.3);
  /* The step under the pointer (or keyboard focus) is singled out in the drawing */
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="relative isolate overflow-hidden bg-navy-950 py-16 sm:py-20 lg:py-28">
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-96 w-96 rounded-full bg-orange-500/15 blur-3xl" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div ref={ref} className="rounded-3xl bg-white/[0.04] p-4 ring-1 ring-white/10 sm:p-8">
          <RoofBuild play={seen} highlight={active} className="w-full" />
          <p className="mt-2 flex items-start gap-2.5 border-t border-white/10 pt-4 text-sm leading-relaxed text-slate-300">
            <Droplets className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
            Water lands on the finished roof and runs off it, not into it.
          </p>
        </div>

        <div>
          <SectionHeading onDark label="How it works"
            title="Four layers between the rain and your room."
            lead="A leak-proof roof is a system, not a coat of paint. Each layer does one job, and skipping any of them is how roofs fail." />

          <ol className="mt-8 space-y-2" onMouseLeave={() => setActive(null)}>
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 80}>
                  <div tabIndex={0} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onBlur={() => setActive(null)}
                    className={`flex gap-4 rounded-2xl p-4 ring-1 transition-colors duration-300 ${
                      active === i ? "bg-white/[0.07] ring-orange-500/50" : "ring-transparent"
                    }`}>
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl font-display text-sm font-black transition-colors duration-300 ${
                      active === i ? "bg-orange-500 text-white" : "bg-orange-500/15 text-orange-400 ring-1 ring-orange-500/30"
                    }`}>
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-sans text-base font-extrabold text-white">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-300">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          <div className="mt-8">
            <ButtonLink to="/services/roof-waterproofing/" arrow>See the full roof service</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
