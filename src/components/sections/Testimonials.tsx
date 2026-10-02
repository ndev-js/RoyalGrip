import { useCallback, useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "../../constants/content";
import type { Tokens } from "../../types";
import Reveal from "../ui/Reveal";

const Testimonials = ({ t }: { t: Tokens }) => {
  const [idx, setIdx] = useState(0);
  const next = useCallback(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), []);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const tm = TESTIMONIALS[idx];

  return (
    <section className={`py-20 lg:py-28 ${t.surface}`}>
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <Quote className="mx-auto h-10 w-10 text-orange-500" />
          <div className="mt-6 min-h-44 sm:min-h-36">
            <p key={idx} className={`animate-fade text-xl font-medium leading-relaxed sm:text-2xl ${t.heading}`}>
              {tm.quote}
            </p>
            <div className="mt-6">
              <p className="font-bold text-orange-500">{tm.name}</p>
              <p className={`text-sm ${t.muted}`}>{tm.role}</p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} aria-label={`Testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-orange-500" : "w-2 bg-zinc-500/40 hover:bg-orange-500/50"}`} />
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
            ))}
            <span className={`ml-2 text-sm ${t.muted}`}>4.9 average from 180+ clients</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
