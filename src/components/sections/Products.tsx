import { useState } from "react";
import { Layers, Ruler } from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES } from "../../constants/content";
import type { Tokens } from "../../types";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";

const Products = ({ t }: { t: Tokens }) => {
  const [active, setActive] = useState<(typeof PRODUCT_CATEGORIES)[number]>("All");
  const list = active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <section id="products" className={`py-20 lg:py-28 ${t.page}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <SectionLabel>Our catalogue</SectionLabel>
              <h2 className={`mt-4 text-3xl font-black tracking-tight sm:text-4xl ${t.heading}`}>
                Membranes, coatings and chemicals.
              </h2>
              <p className={`mt-4 text-base leading-relaxed ${t.body}`}>
                Supplied by the roll or installed by our own crews. Technical data sheets are available
                for every line on request.
              </p>
            </div>

            <div className={`inline-flex flex-wrap gap-1 rounded-xl border ${t.border} ${t.surface} p-1.5`}>
              {PRODUCT_CATEGORIES.map((c) => (
                <button key={c} onClick={() => setActive(c)}
                  className={`rounded-lg px-4 py-2 text-sm font-bold transition-all ${
                    active === c ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25" : `${t.body} hover:text-orange-500`
                  }`}>
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={i * 50}>
              <article className={`group flex h-full flex-col overflow-hidden rounded-2xl border ${t.border} ${t.surface} transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500/60`}>
                <div className="relative h-36 overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-orange-950">
                  <div className="absolute inset-0 opacity-50"
                    style={{ backgroundImage: "repeating-linear-gradient(115deg, rgba(249,115,22,.25) 0 14px, transparent 14px 34px)" }} />
                  <Layers className="absolute bottom-4 right-4 h-14 w-14 text-orange-500/40 transition-all duration-500 group-hover:scale-110 group-hover:text-orange-500/70" />
                  <span className="absolute left-4 top-4 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-orange-400 backdrop-blur">
                    {p.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className={`text-base font-bold ${t.heading}`}>{p.name}</h3>
                  <p className={`mt-2 flex-1 text-sm leading-relaxed ${t.body}`}>{p.tagline}</p>

                  <ul className="mt-4 space-y-1.5">
                    {p.specs.map((s) => (
                      <li key={s} className={`flex items-start gap-1.5 text-xs ${t.muted}`}>
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-orange-500" /> {s}
                      </li>
                    ))}
                  </ul>

                  <div className={`mt-5 flex items-center justify-between border-t ${t.border} pt-4`}>
                    <span className={`inline-flex items-center gap-1 text-xs font-semibold ${t.muted}`}>
                      <Ruler className="h-3.5 w-3.5 text-orange-500" /> {p.size}
                    </span>
                    <a href="#contact" className="text-xs font-bold text-orange-500 hover:underline">Enquire</a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
