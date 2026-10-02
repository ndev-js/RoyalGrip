import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronRight, Menu, MessageCircle, Moon, Phone, PhoneCall, Sun, X } from "lucide-react";
import { Link, NavLink } from "react-router";
import { NAV, PHONE_DISPLAY, PHONE_URL, WHATSAPP_URL } from "../../constants/content";
import { useTheme } from "../../hooks/useTheme";
import Logo from "../ui/Logo";

const ICON_BUTTON = "grid h-11 w-11 place-items-center rounded-full border border-line transition-colors hover:border-orange-500 hover:text-orange-500";

const Header = () => {
  const { toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      /* Written straight to the element: a state update on every scroll tick would re-render the header */
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* While the mobile menu is open: freeze the page behind it and let Escape close it */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const wide = window.matchMedia("(min-width: 1024px)");
    const onWide = () => wide.matches && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50">
      {/* The frosted backdrop is its own layer: a filter on <header> would trap the fixed overlay below inside it */}
      <div aria-hidden="true"
        className={`absolute inset-0 -z-10 border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 ${
          open ? "border-line bg-page" : scrolled ? "border-line bg-page/85 shadow-card" : "border-transparent bg-page"
        }`} />
      {open && <div aria-hidden="true" onClick={close} className="fixed inset-0 -z-20 bg-navy-950/60 backdrop-blur-sm lg:hidden" />}
      <div ref={progress} aria-hidden="true" style={{ transform: "scaleX(0)" }}
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-linear-to-r from-orange-500 via-amber-400 to-orange-500" />

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex h-16 items-center justify-between gap-3 lg:h-20">
          <span onClick={close}><Logo /></span>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {NAV.map((i) => (
              <NavLink key={i.to} to={i.to} end={i.to === "/"}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                    isActive ? "bg-orange-500/10 text-accent" : "text-heading hover:bg-surface hover:text-accent"
                  }`}>
                {i.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a href={PHONE_URL} className="group hidden items-center gap-3 xl:flex">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-orange-500/10 text-accent transition-colors group-hover:bg-orange-500 group-hover:text-white">
                <PhoneCall className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted">Call us now</span>
                <span className="block text-sm font-extrabold text-heading">{PHONE_DISPLAY}</span>
              </span>
            </a>
            {/* Both icons are rendered and CSS picks one, so the prerendered HTML is right in either theme */}
            <button type="button" onClick={toggle} aria-label="Switch between light and dark theme" className={`${ICON_BUTTON} text-body`}>
              <Moon className="h-4 w-4 dark:hidden" />
              <Sun className="hidden h-4 w-4 dark:block" />
            </button>
            <Link to="/contact/" onClick={close}
              className="hidden h-11 items-center rounded-full bg-orange-500 px-6 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-600 active:translate-y-0 sm:inline-flex">
              Get a Free Quote
            </Link>
            <button type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open} aria-controls="mobile-menu" className={`${ICON_BUTTON} text-heading lg:hidden`}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" inert={!open}
        className={`absolute inset-x-0 top-full grid border-b border-line bg-page shadow-lift transition-[grid-template-rows,opacity] duration-300 ease-out-soft lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] border-transparent opacity-0"
        }`}>
        <div className="overflow-hidden">
          <div className="max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-contain px-4 pb-6 pt-2 sm:px-8">
            <nav aria-label="Mobile">
              <ul className="divide-y divide-line">
                {NAV.map((i) => (
                  <li key={i.to}>
                    <NavLink to={i.to} end={i.to === "/"} onClick={close}
                      className={({ isActive }) =>
                        `flex items-center justify-between py-4 font-display text-xl font-extrabold tracking-tight ${isActive ? "text-accent" : "text-heading"}`}>
                      {i.label} <ChevronRight className="h-5 w-5 text-muted" />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <a href={PHONE_URL}
                className="flex h-12 items-center justify-center gap-2 rounded-full border border-line text-sm font-bold text-heading">
                <Phone className="h-4 w-4 text-accent" /> Call
              </a>
              <a href={WHATSAPP_URL}
                className="flex h-12 items-center justify-center gap-2 rounded-full border border-line text-sm font-bold text-heading">
                <MessageCircle className="h-4 w-4 text-emerald-500" /> WhatsApp
              </a>
              <Link to="/contact/" onClick={close}
                className="col-span-2 flex h-12 items-center justify-center gap-2 rounded-full bg-orange-500 text-sm font-bold text-white shadow-lg shadow-orange-500/25">
                Get a free quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
