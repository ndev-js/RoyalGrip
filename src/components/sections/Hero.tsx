import { ArrowRight, ArrowUpRight, Award, Clock, Layers, ShieldCheck, Truck } from "lucide-react";
import type { Theme, Tokens } from "../../types";
import Reveal from "../ui/Reveal";

const FEATURES = [
  { icon: Clock, text: "Same-week mobilisation" },
  { icon: Truck, text: "Nationwide supply" },
  { icon: Award, text: "Certified applicators" },
];

const SYSTEM_STEPS = [
  "Surface prep & slope correction",
  "Bitumen primer coat",
  "RoyalGrip Torch 4000 membrane",
  "Overlap & flashing detail",
  "Flood test + protective screed",
];

const Hero = ({ t, theme }: { t: Tokens; theme: Theme }) => (
  <section id="home" className="relative overflow-hidden">
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="animate-pulse-slow absolute -right-32 -top-40 h-[30rem] w-[30rem] rounded-full bg-orange-500/20 blur-3xl" />
      <div className={`absolute -left-32 top-40 h-80 w-80 rounded-full blur-3xl ${theme === "dark" ? "bg-orange-700/10" : "bg-orange-300/30"}`} />
      <div className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at top, black, transparent 72%)",
          WebkitMaskImage: "radial-gradient(ellipse at top, black, transparent 72%)",
        }} />
    </div>

    <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 lg:pb-28 lg:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <span className={`inline-flex items-center gap-2 rounded-full border ${t.border} ${t.raised} px-3.5 py-1.5 text-xs font-semibold ${t.body}`}>
              <ShieldCheck className="h-3.5 w-3.5 text-orange-500" />
              ISO-standard materials · 10-year written warranty
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className={`mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl ${t.heading}`}>
              Water stops here.
              <span className="mt-2 block bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                Permanently.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className={`mt-6 max-w-xl text-base leading-relaxed sm:text-lg ${t.body}`}>
              RoyalGrip installs modified bituminous membrane systems for roofs, basements, tanks and wet
              areas across Pakistan. We find where the water actually enters, specify the right system for
              your slab, and back the work in writing.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:bg-orange-600">
                Book a free survey
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#products"
                className={`inline-flex items-center gap-2 rounded-xl border-2 ${t.border} px-6 py-3.5 text-sm font-bold ${t.heading} transition-colors hover:border-orange-500 hover:text-orange-500`}>
                View product range
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className={`mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm ${t.muted}`}>
              {FEATURES.map((f) => (
                <span key={f.text} className="inline-flex items-center gap-2">
                  <f.icon className="h-4 w-4 text-orange-500" /> {f.text}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={200}>
            <div className={`relative rounded-3xl border ${t.border} ${t.surface} p-7 shadow-2xl`}>
              <div className="absolute -top-3 left-7 rounded-full bg-orange-500 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white">
                System spotlight
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-orange-500/10 ring-1 ring-orange-500/30">
                  <Layers className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${t.heading}`}>4mm Torch-On Roof System</h3>
                  <p className={`text-sm ${t.body}`}>The build-up we install on most flat roofs.</p>
                </div>
              </div>

              <ol className="mt-6 space-y-2.5">
                {SYSTEM_STEPS.map((step, i) => (
                  <li key={step}
                    className={`flex items-center gap-3 rounded-xl border ${t.border} ${t.raised} px-4 py-3 text-sm ${t.body} transition-all hover:translate-x-1 hover:border-orange-500/60`}>
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-orange-500 text-[11px] font-black text-white">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>

              <div className={`mt-6 flex items-center justify-between border-t ${t.border} pt-5`}>
                <div>
                  <p className={`text-[11px] uppercase tracking-wider ${t.muted}`}>Typical turnaround</p>
                  <p className={`text-base font-bold ${t.heading}`}>3–5 days / 5,000 sq.ft</p>
                </div>
                <a href="#process" className="inline-flex items-center gap-1 text-sm font-bold text-orange-500 transition-all hover:gap-2">
                  How we work <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
