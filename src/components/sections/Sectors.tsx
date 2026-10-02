import { useState } from "react";
import { SECTORS } from "../../constants/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { SWIPE_ITEM, SWIPE_ROW } from "../ui/swipeRow";

const Sectors = () => {
  /* Desktop only: the hovered (or tapped, or focused) panel widens and the rest narrow. Phones and tablets show every card in full. */
  const [active, setActive] = useState(0);

  return (
    <section className="bg-page py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading label="Who we work for"
          title="Waterproofing solutions for every structure."
          lead="From a single leaking bathroom to a 100,000 sq.ft factory roof, the same survey-first approach applies." />

        {/* Phones swipe through the cards (bleeding to the screen edge); from `sm` up it is a grid; on desktop an accordion of panels */}
        <Reveal className="mt-10 sm:mt-14">
          <ul className={`${SWIPE_ROW} sm:grid-cols-2 sm:gap-6 lg:flex lg:gap-4`}>
            {SECTORS.map((s, i) => {
              const open = active === i;
              return (
                <li key={s.title} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}
                  className={`${SWIPE_ITEM} lg:min-w-0 lg:basis-0 lg:transition-[flex-grow] lg:duration-700 lg:ease-out-soft ${open ? "lg:grow-3" : "lg:grow"}`}>
                  <article tabIndex={0}
                    className="group relative isolate flex h-full min-h-96 flex-col justify-end overflow-hidden rounded-3xl p-6 shadow-card sm:min-h-104 sm:p-7 lg:min-h-120 lg:p-6">
                    <img src={s.image} alt="" loading="lazy" decoding="async" width={1000} height={667}
                      className={`absolute inset-0 -z-10 h-full w-full object-cover transition-[transform,filter] duration-700 ease-out-soft ${open ? "lg:scale-105" : "lg:saturate-50"}`} />
                    <div className="absolute inset-0 -z-10 bg-linear-to-t from-navy-950 via-navy-950/75 to-navy-950/10" />

                    <div className={`grid h-12 w-12 place-items-center rounded-2xl text-white shadow-lg transition-colors duration-500 ${open ? "bg-orange-500 shadow-orange-500/40" : "bg-orange-500 lg:bg-white/15 lg:shadow-none lg:backdrop-blur"}`}>
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h3 className={`mt-4 wrap-break-word font-extrabold tracking-tight text-white transition-[font-size] duration-500 ${open ? "text-2xl" : "text-2xl lg:text-xl"}`}>{s.title}</h3>

                    {/* Collapses to nothing on desktop while the panel is narrow */}
                    <div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out-soft ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[1fr] opacity-100 lg:grid-rows-[0fr] lg:opacity-0"}`}>
                      <div className="overflow-hidden">
                        <p className="mt-2 text-sm leading-relaxed text-slate-200">{s.desc}</p>
                        <ul className="mt-4 flex flex-wrap gap-1.5">
                          {s.items.map((item) => (
                            <li key={item} className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default Sectors;
