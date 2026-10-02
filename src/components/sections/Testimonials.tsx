import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "../../constants/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const initials = (name: string) => name.split(" ").map((w) => w[0]).join("").slice(0, 2);

const Testimonials = () => (
  <section className="bg-page py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeading center label="Client reviews"
        title="Trusted by owners, builders and facility managers."
        lead="Rated 4.9 out of 5 by more than 180 clients." />

      <div className="mt-14 grid gap-7 lg:grid-cols-3">
        {TESTIMONIALS.map((tm, i) => (
          <Reveal key={tm.name} delay={i * 100} className="h-full">
            <figure className="relative flex h-full flex-col rounded-3xl border border-line bg-raised p-8 shadow-sm transition-shadow hover:shadow-xl">
              <Quote className="absolute right-7 top-7 h-12 w-12 text-orange-500/15" aria-hidden="true" />
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-body">“{tm.quote}”</blockquote>
              <figcaption className="mt-7 flex items-center gap-4 border-t border-line pt-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy-950 font-display text-sm font-extrabold text-white dark:bg-orange-500">
                  {initials(tm.name)}
                </span>
                <span>
                  <span className="block font-bold text-heading">{tm.name}</span>
                  <span className="block text-sm text-muted">{tm.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
