import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { FAQS } from "../../constants/content";
import type { Tokens } from "../../types";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";

const Faq = ({ t }: { t: Tokens }) => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className={`py-20 lg:py-28 ${t.page}`}>
      <div className="mx-auto grid max-w-5xl gap-12 px-5 sm:px-8 lg:grid-cols-3">
        <Reveal>
          <div>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className={`mt-4 text-3xl font-black tracking-tight ${t.heading}`}>
              Questions clients ask before signing.
            </h2>
            <p className={`mt-4 text-sm leading-relaxed ${t.body}`}>
              Anything not covered here, call us and an engineer will answer directly.
            </p>
          </div>
        </Reveal>

        <div className="space-y-3 lg:col-span-2">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <div className={`overflow-hidden rounded-2xl border ${open === i ? "border-orange-500/60" : t.border} ${t.surface}`}>
                <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className={`text-sm font-bold sm:text-base ${t.heading}`}>{f.q}</span>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-orange-500/10 text-orange-500">
                    {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className={`px-6 pb-5 text-sm leading-relaxed ${t.body}`}>{f.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
