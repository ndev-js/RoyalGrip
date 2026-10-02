import { useState } from "react";
import { Minus, Phone, Plus } from "lucide-react";
import { FAQS, PHONE_DISPLAY, PHONE_URL } from "../../constants/content";
import JsonLd from "../ui/JsonLd";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-page py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <SectionHeading label="FAQ"
            title="Questions clients ask before signing."
            lead="Anything not covered here, call us and an engineer will answer directly." />
          <a href={PHONE_URL}
            className="mt-8 flex items-center gap-4 rounded-3xl bg-navy-950 p-6 text-white shadow-xl transition-transform hover:-translate-y-1 dark:bg-navy-800">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-orange-500"><Phone className="h-6 w-6" /></span>
            <span>
              <span className="block text-sm text-slate-300">Speak to an engineer</span>
              <span className="block font-display text-2xl font-extrabold">{PHONE_DISPLAY}</span>
            </span>
          </a>
        </div>

        <div className="space-y-3 lg:col-span-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <div className={`overflow-hidden rounded-2xl border bg-raised transition-shadow ${open === i ? "border-orange-500 shadow-lg" : "border-line"}`}>
                <h3 className="font-sans">
                  <button type="button" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                    <span className="text-base font-bold text-heading">{f.q}</span>
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-colors ${open === i ? "bg-orange-500 text-white" : "bg-orange-500/10 text-orange-500"}`}>
                      {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                </h3>
                <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-body">{f.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }} />
    </section>
  );
};

export default Faq;
