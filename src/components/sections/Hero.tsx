import { useEffect, useState } from "react";
import { Award, CheckCircle2, Phone, ShieldCheck, Star } from "lucide-react";
// import { Award, CheckCircle2, Droplets, Phone, ShieldCheck, Star } from "lucide-react";
import { PHONE_DISPLAY, PHONE_URL } from "../../constants/content";
import ButtonLink from "../ui/ButtonLink";
import RoofBuild from "../ui/RoofBuild";
import Waves from "../ui/Waves";

const PROMISES = ["Free site survey", "Itemised written quote", "Flood tested before handover"];

const Stars = () => (
  <span className="flex" aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
    ))}
  </span>
);

/* The banner cycles through these: each photo comes with the problem it shows, which completes the headline "Stop … for good."
   `widths` are the sizes saved in public/images/hero/ as <name>-<width>.webp; the largest is the original's full resolution. */
const SLIDES = [
  { phrase: "roof leaks", name: "roof", widths: [1280, 1920, 2880, 3840], position: "object-[78%_center] lg:object-right", alt: "Applicator spraying a waterproof coating onto a flat concrete roof" },
  { phrase: "damp walls", name: "damp", widths: [1280, 1920, 2880, 3840], position: "object-center", alt: "Wall stained and flaking from long-term damp" },
  { phrase: "tank leaks", name: "tank", widths: [1280, 1920, 2668], position: "object-center", alt: "Clear water in a lined tank" },
  { phrase: "seepage", name: "bathroom", widths: [1280, 1920, 2880, 3499], position: "object-center", alt: "Tiled bathroom with a walk-in shower" },
];

const heroSrc = (name: string, width: number) => `/images/hero/${name}-${width}.webp`;

/* The photo is cropped to fill a banner that is taller than the photo's own shape, so it is drawn wider than the screen
   (much wider on phones). These tell the browser how wide, so it picks a file sharp enough for the display. */
const HERO_SIZES = "(max-width: 640px) 220vw, (max-width: 1024px) 160vw, 125vw";

const SLIDE_MS = 6000;

/* Dark glass: the photo behind these is a white suit and bright sky, so a light tint would wash the text out */
// const GLASS = "rounded-2xl bg-navy-950/70 p-3.5 text-white shadow-2xl shadow-navy-950/50 ring-1 ring-white/15 backdrop-blur-xl";

const Hero = () => {
  const [slide, setSlide] = useState(0);

  /* Restarts whenever the slide changes, so picking one by hand gives it a full turn before the next */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setSlide((i) => (i + 1) % SLIDES.length), SLIDE_MS);
    return () => clearTimeout(id);
  }, [slide]);

  return (
  <section className="relative isolate overflow-hidden bg-navy-950">
    {/* Photos are stacked and cross-fade; the one showing also drifts slowly closer */}
    <div className="parallax absolute inset-0 -z-10">
      {SLIDES.map((sl, i) => (
        <img key={sl.name} alt={i === slide ? sl.alt : ""} aria-hidden={i !== slide}
          src={heroSrc(sl.name, 1920)} sizes={HERO_SIZES}
          srcSet={sl.widths.map((w) => `${heroSrc(sl.name, w)} ${w}w`).join(", ")}
          width={1920} height={1280} decoding="async"
          fetchPriority={i === 0 ? "high" : "low"}
          className={`absolute inset-0 h-full w-full object-cover transition-[opacity,scale] ease-out ${sl.position} ${
            i === slide ? "scale-105 opacity-100 duration-[1400ms,7000ms]" : "scale-100 opacity-0 duration-[1400ms,0ms] delay-[0ms,1400ms]"
          }`} />
      ))}
    </div>
    {/* Phones get a top-to-bottom scrim (text sits over the whole photo); wide screens a left-to-right one */}
    <div className="absolute inset-0 -z-10 bg-linear-to-b from-navy-950/55 via-navy-950/80 to-navy-950 lg:bg-linear-to-r lg:from-navy-950 lg:via-navy-950/85 lg:to-navy-950/10" />
    <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-linear-to-t from-navy-950 to-transparent" />
    <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
    {/* The hero ends in water the same navy as the quick-quote band below. The waves ride on a solid strip
        as tall as the quote card's overlap, so they show above the card instead of hiding behind it. */}
    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-navy-900" />
    <div className="absolute inset-x-0 bottom-[calc(6rem-1px)] -z-10 h-16">
      <Waves className="text-navy-900" />
    </div>

    <div className="mx-auto grid max-w-7xl items-center px-4 pb-36 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-12 lg:pb-48 lg:pt-28">
      <div className="max-w-2xl lg:col-span-7">
        <p className="animate-fade inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider text-white ring-1 ring-white/20 backdrop-blur sm:px-4 sm:text-xs">
          <Award className="h-4 w-4 text-orange-400" />
          Pakistan's waterproofing specialists
        </p>

        {/* The label keeps the heading stable for screen readers while the visible phrase rotates */}
        <h1 aria-label="Stop roof leaks, damp walls, tank leaks and seepage for good."
          className="mt-6 text-hero font-black tracking-tight text-white">
          {/* On phones "Stop" takes its own line, so a longer phrase never wraps and shifts the page */}
          <span className="animate-fade block [animation-delay:120ms] sm:inline-block">Stop&nbsp;</span>
          {/* Re-keyed per slide so the new phrase rises in */}
          <span key={slide} className="animate-fade inline-block [animation-delay:60ms]">{SLIDES[slide].phrase}</span>
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

        <div className="animate-fade mt-9 flex items-center gap-2 [animation-delay:1000ms]" role="group" aria-label="Banner slides">
          {SLIDES.map((sl, i) => (
            <button key={sl.phrase} type="button" onClick={() => setSlide(i)}
              aria-label={`Show slide ${i + 1}: ${sl.phrase}`} aria-current={i === slide}
              className="group/dot -my-3 py-3">
              <span className={`relative block h-1.5 overflow-hidden rounded-full bg-white/25 transition-[width,background-color] duration-500 ease-out-soft group-hover/dot:bg-white/50 ${i === slide ? "w-14" : "w-6"}`}>
                {/* Fills over the time the slide stays up */}
                {i === slide && (
                  <span className="animate-progress absolute inset-0 origin-left rounded-full bg-orange-500"
                    style={{ animationDuration: `${SLIDE_MS}ms` }} />
                )}
              </span>
            </button>
          ))}
          <span className="ml-2 text-xs font-bold uppercase tracking-wider text-slate-300">
            0{slide + 1} <span className="text-slate-500">/ 0{SLIDES.length}</span>
          </span>
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

      <div className="relative hidden h-[28rem] lg:col-span-5 lg:block">
        {/* Dark glass panel so the diagram and its labels stay readable over any of the photos */}
        <div className="animate-fade absolute inset-y-0 -right-2 left-4 flex flex-col justify-center rounded-3xl bg-navy-950/60 px-6 py-5 shadow-2xl shadow-navy-950/50 ring-1 ring-white/10 backdrop-blur-md [animation-delay:300ms]">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-orange-400">How a dry roof is built</p>
          <RoofBuild className="mt-1 w-full" />
          <p className="text-xs leading-relaxed text-slate-300">
            Four layers, installed and tested by one crew. Water lands on the roof and runs off it, not into it.
          </p>
        </div>

        {/* Stacked down the right edge, staggered, so the worker in the photo stays visible */}
        {/* <div className="animate-fade absolute right-0 top-4 [animation-delay:900ms]">
          <div className={`${GLASS} animate-float flex items-center gap-3 pr-5`}>
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-400/20 ring-1 ring-amber-300/30">
              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
            </span>
            <div>
              <p className="font-display text-xl font-black leading-none">4.9<span className="text-sm font-bold text-slate-300"> / 5</span></p>
              <p className="mt-1 text-xs font-semibold text-slate-200">from 180+ happy clients</p>
            </div>
          </div>
        </div> */}

        {/* <div className="animate-fade absolute right-10 top-40 [animation-delay:1050ms]">
          <div className={`${GLASS} animate-float flex items-center gap-3 pr-5 [animation-delay:-1.8s]`}>
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange-500 shadow-lg shadow-orange-500/40">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-xl font-black leading-none">10 year</p>
              <p className="mt-1 text-xs font-semibold text-slate-200">written system warranty</p>
            </div>
          </div>
        </div> */}

        {/* <div className="animate-fade absolute right-2 top-76 [animation-delay:1200ms]">
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
        </div> */}
      </div>
    </div>
  </section>
  );
};

export default Hero;
