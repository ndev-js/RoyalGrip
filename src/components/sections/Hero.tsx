import { Award, CheckCircle2, Phone, ShieldCheck, Star } from "lucide-react";
import { PHONE_DISPLAY, PHONE_URL } from "../../constants/content";
import ButtonLink from "../ui/ButtonLink";

const PROMISES = ["Free site survey", "Itemised written quote", "Flood tested before handover"];

const Hero = () => (
  <section className="relative isolate bg-navy-950">
    <img src="/images/hero.jpg" alt="Applicator spraying a waterproof coating onto a flat concrete roof"
      width={1920} height={1280} fetchPriority="high"
      className="absolute inset-0 -z-10 h-full w-full object-cover object-right" />
    <div className="absolute inset-0 -z-10 bg-linear-to-r from-navy-950 via-navy-950/85 to-navy-950/10" />
    <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-navy-950/80 to-transparent" />

    <div className="mx-auto max-w-7xl px-5 pb-40 pt-16 sm:px-8 lg:pb-48 lg:pt-28">
      <div className="max-w-2xl">
        <p className="animate-fade inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white ring-1 ring-white/20 backdrop-blur">
          <Award className="h-4 w-4 text-orange-400" />
          Pakistan's waterproofing specialists
        </p>

        <h1 className="animate-fade mt-6 text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Stop roof leaks
          <span className="block text-orange-500">for good.</span>
        </h1>

        <p className="animate-fade mt-6 max-w-xl text-lg leading-relaxed text-slate-200">
          Roof, basement, water tank and bathroom waterproofing with modified bituminous membranes —
          installed by our own crews and backed by a <strong className="font-bold text-white">10-year written warranty</strong>.
        </p>

        <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5">
          {PROMISES.map((p) => (
            <li key={p} className="inline-flex items-center gap-2 text-sm font-semibold text-white">
              <CheckCircle2 className="h-4.5 w-4.5 text-orange-400" /> {p}
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink to="/contact/" arrow>Book a free survey</ButtonLink>
          <ButtonLink to={PHONE_URL} variant="ghost"><Phone className="h-4 w-4" /> {PHONE_DISPLAY}</ButtonLink>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <div className="flex items-center gap-3">
            <span className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <p className="text-sm text-slate-200"><strong className="font-extrabold text-white">4.9/5</strong> from 180+ clients</p>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-slate-200">
            <ShieldCheck className="h-6 w-6 text-orange-400" />
            <span><strong className="font-extrabold text-white">10-year</strong> written warranty</span>
          </div>
        </div>
      </div>
    </div>

  </section>
);

export default Hero;
