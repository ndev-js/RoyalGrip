import { Droplets } from "lucide-react";
import { CAPABILITIES } from "../../constants/content";

/* The list is rendered twice so the -50% marquee loop is seamless; the copy is hidden from assistive tech */
const Ticker = () => (
  <section aria-label="What we do" className="group overflow-hidden bg-orange-500 py-3.5 sm:py-4">
    <div className="animate-marquee flex w-max whitespace-nowrap group-hover:[animation-play-state:paused]">
      {[false, true].map((duplicate) => (
        <ul key={String(duplicate)} aria-hidden={duplicate} className="flex">
          {CAPABILITIES.map((c) => (
            <li key={c} className="mx-4 inline-flex items-center gap-3 font-display text-sm font-extrabold uppercase tracking-wide text-white sm:mx-5 sm:text-base">
              <Droplets className="h-4 w-4 text-navy-950" /> {c}
            </li>
          ))}
        </ul>
      ))}
    </div>
  </section>
);

export default Ticker;
