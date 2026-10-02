import { Droplets } from "lucide-react";
import { CAPABILITIES } from "../../constants/content";

/* The list is rendered twice so the -50% marquee loop is seamless; the copy is hidden from assistive tech */
const Ticker = () => (
  <section aria-label="What we do" className="overflow-hidden bg-orange-500 py-4">
    <div className="animate-marquee flex w-max whitespace-nowrap">
      {[false, true].map((duplicate) => (
        <ul key={String(duplicate)} aria-hidden={duplicate} className="flex">
          {CAPABILITIES.map((c) => (
            <li key={c} className="mx-5 inline-flex items-center gap-3 font-display text-base font-extrabold uppercase tracking-wide text-white">
              <Droplets className="h-4 w-4 text-navy-950" /> {c}
            </li>
          ))}
        </ul>
      ))}
    </div>
  </section>
);

export default Ticker;
