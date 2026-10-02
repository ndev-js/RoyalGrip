import type { CSSProperties } from "react";
import { Award, CheckCircle2, Droplets, Phone, ShieldCheck, Star } from "lucide-react";
import { PHONE_DISPLAY, PHONE_URL } from "../../constants/content";
import Bubbles from "../ui/Bubbles";
import ButtonLink from "../ui/ButtonLink";

const PROMISES = ["Free site survey", "Itemised written quote", "Flood tested before handover"];

const Stars = () => (
  <span className="flex" aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
    ))}
  </span>
);

/* Each word fades up in turn; `from` offsets the delay so the second line follows the first */
const Words = ({ text, from = 0 }: { text: string; from?: number }) => (
  <>
    {text.split(" ").map((w, i) => (
      <span key={w} className="animate-fade inline-block" style={{ animationDelay: `${120 + (from + i) * 110}ms` } as CSSProperties}>
        {w}&nbsp;
      </span>
    ))}
  </>
);

/* Dark glass: the photo behind these is a white suit and bright sky, so a light tint would wash the text out */
const GLASS = "rounded-2xl bg-navy-950/70 p-3.5 text-white shadow-2xl shadow-navy-950/50 ring-1 ring-white/15 backdrop-blur-xl";

const Hero = () => (
  <section className="relative isolate overflow-hidden bg-navy-950">
    <img src="/images/hero.jpg" alt="Applicator spraying a waterproof coating onto a flat concrete roof"
      width={1920} height={1280} fetchPriority="high" decoding="async"
      className="parallax absolute inset-0 -z-10 h-full w-full object-cover object-[78%_center] lg:object-right" />
    {/* Phones get a top-to-bottom scrim (text sits over the whole photo); wide screens a left-to-right one */}
    <div className="absolute inset-0 -z-10 bg-linear-to-b from-navy-950/55 via-navy-950/80 to-navy-950 lg:bg-linear-to-r lg:from-navy-950 lg:via-navy-950/85 lg:to-navy-950/10" />
    <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-linear-to-t from-navy-950 to-transparent" />
    <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
    <Bubbles />

    <div className="mx-auto grid max-w-7xl items-center px-4 pb-36 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-12 lg:pb-48 lg:pt-28">
      <div className="max-w-2xl lg:col-span-7">
        <p className="animate-fade inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider text-white ring-1 ring-white/20 backdrop-blur sm:px-4 sm:text-xs">
          <Award className="h-4 w-4 text-orange-400" />
          Pakistan's waterproofing specialists
        </p>

        <h1 className="mt-6 text-hero font-black tracking-tight text-white">
          <Words text="Stop roof leaks" />
          <span className="block">
            <span className="animate-fade inline-block" style={{ animationDelay: "560ms" }}>
              <span className="animate-pan bg-linear-to-r from-orange-500 via-amber-300 to-orange-500 bg-[length:200%_auto] bg-clip-text text-transparent">
                for good.
              </span>
            </span>
          </span>
        </h1>

        <p className="animate-fade mt-6 max-w-xl text-base leading-relaxed text-slate-200 [animation-delay:700ms] sm:text-lg">
          Roof, basement, water tank and bathroom waterproofing with modified bituminous membranes —
          installed by our own crews and backed by a <strong className="font-bold text-white">10-year written warranty</strong>.
        </p>

        <ul className="animate-fade mt-7 flex flex-col gap-2.5 [animation-delay:820ms] sm:flex-row sm:flex-wrap sm:gap-x-6">
          {PROMISES.map((p) => (
            <li key={p} className="inline-flex items-center gap-2 text-sm font-semibold text-white">
              <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-orange-400" /> {p}
            </li>
          ))}
        </ul>

        <div className="animate-fade mt-9 flex flex-col gap-3 [animation-delay:940ms] sm:flex-row sm:flex-wrap">
          <ButtonLink to="/contact/" arrow>Book a free survey</ButtonLink>
          <ButtonLink to={PHONE_URL} variant="ghost"><Phone className="h-4 w-4" /> {PHONE_DISPLAY}</ButtonLink>
        </div>

        {/* Phones and tablets: the proof points sit inline; on desktop they become the floating cards on the right */}
        <div className="animate-fade mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-7 [animation-delay:1060ms] lg:hidden">
          <div className="flex items-center gap-3">
            <Stars />
            <p className="text-sm text-slate-200"><strong className="font-extrabold text-white">4.9/5</strong> from 180+ clients</p>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-slate-200">
            <ShieldCheck className="h-6 w-6 text-orange-400" />
            <span><strong className="font-extrabold text-white">10-year</strong> written warranty</span>
          </div>
        </div>
      </div>

      <div aria-label="Why clients choose RoyalGrip" className="relative hidden h-[28rem] lg:col-span-5 lg:block">
        {/* Stacked down the right edge, staggered, so the worker in the photo stays visible */}
        <div className="animate-fade absolute right-0 top-4 [animation-delay:900ms]">
          <div className={`${GLASS} animate-float flex items-center gap-3 pr-5`}>
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-400/20 ring-1 ring-amber-300/30">
              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
            </span>
            <div>
              <p className="font-display text-xl font-black leading-none">4.9<span className="text-sm font-bold text-slate-300"> / 5</span></p>
              <p className="mt-1 text-xs font-semibold text-slate-200">from 180+ happy clients</p>
            </div>
          </div>
        </div>

        <div className="animate-fade absolute right-10 top-40 [animation-delay:1050ms]">
          <div className={`${GLASS} animate-float flex items-center gap-3 pr-5 [animation-delay:-1.8s]`}>
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange-500 shadow-lg shadow-orange-500/40">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-xl font-black leading-none">10 year</p>
              <p className="mt-1 text-xs font-semibold text-slate-200">written system warranty</p>
            </div>
          </div>
        </div>

        <div className="animate-fade absolute right-2 top-76 [animation-delay:1200ms]">
          <div className={`${GLASS} animate-float flex items-center gap-3 pr-5 [animation-delay:-3.2s]`}>
            <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-sky-400/20 ring-1 ring-sky-300/30">
              <Droplets className="h-5 w-5 text-sky-300" />
              <span className="absolute -right-1 -top-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
              </span>
            </span>
            <div>
              <p className="text-sm font-extrabold leading-none">Flood tested</p>
              <p className="mt-1 text-xs font-semibold text-slate-200">before every handover</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
