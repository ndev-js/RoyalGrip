import { ShieldCheck } from "lucide-react";
import { WHY_US } from "../../constants/content";
import ButtonLink from "../ui/ButtonLink";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const WhyUs = () => (
  <section className="bg-surface py-16 sm:py-20 lg:py-28">
    <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-8 lg:grid-cols-2 lg:gap-16">
      <Reveal from="left">
        <div className="relative pb-10 pr-4 sm:pr-10">
          <img src="/images/crew.jpg" alt="Site crew at work on a concrete slab" loading="lazy" decoding="async" width={1200} height={800}
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift sm:aspect-square" />
          <div className="absolute -left-3 top-8 hidden rounded-2xl bg-raised px-5 py-4 shadow-xl ring-1 ring-line sm:block">
            <p className="font-display text-3xl font-black text-accent">640+</p>
            <p className="text-xs font-semibold text-muted">Projects completed</p>
          </div>
          <div className="absolute bottom-0 right-0 flex max-w-[17rem] items-center gap-4 rounded-3xl bg-linear-to-br from-orange-500 to-orange-600 p-5 text-white sm:p-6 shadow-2xl shadow-orange-500/40">
            <ShieldCheck className="h-12 w-12 shrink-0" />
            <div>
              <p className="font-display text-4xl font-black leading-none">10 yr</p>
              <p className="mt-1 text-sm font-semibold leading-snug">Written system warranty</p>
            </div>
          </div>
        </div>
      </Reveal>

      <div>
        <SectionHeading label="Why RoyalGrip"
          title="The reasons clients stop calling other contractors."
          lead="If a RoyalGrip full-system installation leaks inside the warranty period, we come back and fix it. Material and workmanship, in writing." />

        <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {WHY_US.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <div className="flex gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-raised text-accent shadow-md ring-1 ring-line">
                  <f.icon className="h-5.5 w-5.5" />
                </div>
                <div>
                  <h3 className="font-sans text-base font-extrabold text-heading">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-body">{f.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <ButtonLink to="/about/" arrow>More about us</ButtonLink>
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs;
