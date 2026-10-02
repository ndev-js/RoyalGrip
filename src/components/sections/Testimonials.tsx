import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "../../constants/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const initials = (name: string) => name.split(" ").map((w) => w[0]).join("").slice(0, 2);

const Testimonials = () => (
  <section className="bg-page py-16 sm:py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-8">
      <SectionHeading center label="Client reviews"
        title="Trusted by owners, builders and facility managers."
        lead="Rated 4.9 out of 5 by more than 180 clients." />

      {/* Swipeable on phones and tablets, three columns on desktop */}
      <Reveal className="mt-10 sm:mt-14">
        <ul className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 -mb-6 px-4 pb-8 pt-1 sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:mb-0 lg:grid lg:grid-cols-3 lg:gap-7 lg:overflow-visible lg:p-0">
          {TESTIMONIALS.map((tm) => (
            <li key={tm.name} className="w-[86%] shrink-0 snap-start sm:w-[26rem] lg:w-auto">
              <figure className="spotlight relative flex h-full flex-col rounded-3xl border border-line bg-raised p-6 shadow-card transition-shadow duration-300 hover:shadow-lift sm:p-8">
                <Quote className="absolute right-6 top-6 h-12 w-12 text-orange-500/15" aria-hidden="true" />
                <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
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
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

export default Testimonials;
