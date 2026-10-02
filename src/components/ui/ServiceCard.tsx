import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";
import { servicePath } from "../../routes";
import type { Service } from "../../types";

/* `wide` cards span two columns on desktop and lay the photo beside the text instead of above it */
const ServiceCard = ({ service: s, wide = false }: { service: Service; wide?: boolean }) => (
  <article className={`spotlight group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-raised shadow-card transition-all duration-300 ease-out-soft hover:-translate-y-1 hover:shadow-lift ${wide ? "lg:flex-row" : ""}`}>
    <div className={`relative ${wide ? "lg:w-5/12 lg:shrink-0" : ""}`}>
      <div className={`h-44 overflow-hidden sm:h-52 ${wide ? "lg:h-full" : ""}`}>
        <img src={s.image} alt="" loading="lazy" decoding="async" width={1000} height={667}
          className="h-full w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105" />
        <div className="absolute inset-0 bg-linear-to-t from-navy-950/60 to-transparent" />
      </div>
      {/* Outside the clipped image box so it can straddle the edge */}
      <div className={`absolute bottom-0 left-6 grid h-14 w-14 translate-y-1/2 place-items-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/40 ring-4 ring-raised transition-transform duration-300 ease-out-soft group-hover:-rotate-6 group-hover:scale-110 ${wide ? "lg:bottom-auto lg:top-6 lg:translate-y-0 lg:ring-0" : ""}`}>
        <s.icon className="h-6 w-6" />
      </div>
    </div>

    <div className={`flex flex-1 flex-col p-6 pt-11 ${wide ? "lg:justify-center lg:p-8" : ""}`}>
      <h3 className={`font-bold leading-snug text-heading ${wide ? "text-xl lg:text-2xl" : "text-xl"}`}>
        <Link to={servicePath(s.slug)} className="after:absolute after:inset-0">{s.title}</Link>
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-body">{s.desc}</p>
      <ul className={`mt-5 space-y-2 flex-1 ${wide ? "lg:flex-none" : ""}`}>
        {s.points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm font-medium text-muted">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {p}
          </li>
        ))}
      </ul>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-accent transition-all group-hover:gap-3">
        Learn more <ArrowRight className="h-4 w-4" />
      </span>
    </div>
  </article>
);

export default ServiceCard;
