import { CheckCircle2 } from "lucide-react";
import { SERVICES } from "../../constants/content";
import type { Tokens } from "../../types";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";

const Services = ({ t }: { t: Tokens }) => (
  <section id="services" className={`py-20 lg:py-28 ${t.surface}`}>
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <Reveal>
        <div className="max-w-2xl">
          <SectionLabel>What we do</SectionLabel>
          <h2 className={`mt-4 text-3xl font-black tracking-tight sm:text-4xl ${t.heading}`}>
            One contractor for every surface water can reach.
          </h2>
          <p className={`mt-4 text-base leading-relaxed ${t.body}`}>
            Roofs, basements, tanks and bathrooms each fail differently. We match the system to the
            substrate and the exposure instead of applying the same coating everywhere.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 70}>
            <article className={`group h-full rounded-2xl border ${t.border} ${t.raised} p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500/60 hover:shadow-2xl hover:shadow-orange-500/10`}>
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-orange-500/10 ring-1 ring-orange-500/20 transition-colors group-hover:bg-orange-500">
                <s.icon className="h-6 w-6 text-orange-500 transition-colors group-hover:text-white" />
              </div>
              <h3 className={`mt-5 text-lg font-bold ${t.heading}`}>{s.title}</h3>
              <p className={`mt-2.5 text-sm leading-relaxed ${t.body}`}>{s.desc}</p>
              <ul className={`mt-5 space-y-2 border-t ${t.border} pt-4`}>
                {s.points.map((p) => (
                  <li key={p} className={`flex items-start gap-2 text-sm ${t.muted}`}>
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" /> {p}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
