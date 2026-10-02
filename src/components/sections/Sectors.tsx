import { SECTORS } from "../../constants/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const Sectors = () => (
  <section className="bg-page py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeading label="Who we work for"
        title="Waterproofing solutions for every structure."
        lead="From a single leaking bathroom to a 100,000 sq.ft factory roof, the same survey-first approach applies." />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SECTORS.map((s, i) => (
          <Reveal key={s.title} delay={i * 90} className="h-full">
            <article className="group relative isolate flex h-full min-h-[26rem] flex-col justify-end overflow-hidden rounded-3xl p-7 shadow-lg">
              <img src={s.image} alt="" loading="lazy" width={1000} height={667}
                className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 -z-10 bg-linear-to-t from-navy-950 via-navy-950/70 to-navy-950/10" />

              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/40">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-2xl font-extrabold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">{s.desc}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {s.items.map((item) => (
                  <li key={item} className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Sectors;
