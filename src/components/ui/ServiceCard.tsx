import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";
import { servicePath } from "../../routes";
import type { Service } from "../../types";

const ServiceCard = ({ service: s }: { service: Service }) => (
  <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-raised shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy-950/10">
    <div className="relative">
      <div className="h-52 overflow-hidden">
        <img src={s.image} alt="" loading="lazy" width={1000} height={667}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-linear-to-t from-navy-950/60 to-transparent" />
      </div>
      {/* Outside the clipped image box so it can straddle the edge */}
      <div className="absolute bottom-0 left-6 grid h-14 w-14 translate-y-1/2 place-items-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/40 ring-4 ring-raised">
        <s.icon className="h-6 w-6" />
      </div>
    </div>

    <div className="flex flex-1 flex-col p-6 pt-11">
      <h3 className="text-xl font-bold leading-snug text-heading">
        <Link to={servicePath(s.slug)} className="after:absolute after:inset-0">{s.title}</Link>
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-body">{s.desc}</p>
      <ul className="mt-5 flex-1 space-y-2">
        {s.points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm font-medium text-muted">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" /> {p}
          </li>
        ))}
      </ul>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-orange-500 transition-all group-hover:gap-2.5">
        Learn more <ArrowRight className="h-4 w-4" />
      </span>
    </div>
  </article>
);

export default ServiceCard;
