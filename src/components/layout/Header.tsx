import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, ChevronRight, Menu, MessageCircle, Moon, Phone, PhoneCall, Sun, X } from "lucide-react";
import { Link, NavLink } from "react-router";
import { NAV, PHONE_DISPLAY, PHONE_URL, WHATSAPP_URL } from "../../constants/content";
import { PRODUCT_CATEGORIES } from "../../constants/products";
import { SERVICES } from "../../constants/services";
import { servicePath } from "../../routes";
import { useTheme } from "../../hooks/useTheme";
import Logo from "../ui/Logo";

const ICON_BUTTON = "grid h-11 w-11 place-items-center rounded-full border border-line transition-colors hover:border-orange-500 hover:text-orange-500";

/* Desktop nav links: an underline grows out from the centre on hover and stays for the current page */
const NAV_LINK = "relative flex items-center gap-1 px-3.5 py-2 text-sm font-bold transition-colors after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-0.5 after:origin-center after:rounded-full after:bg-orange-500 after:transition-transform after:duration-300 after:ease-out-soft hover:text-accent";

const PANEL = "rounded-3xl border border-line bg-raised p-3 shadow-lift";
const PANEL_ITEM = "group/item flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-surface";

const Header = () => {
  const { toggle } = useTheme();
  const [open, setOpen] = useState(false);
  /* Which desktop dropdown is showing, by the nav item's path */
  const [menu, setMenu] = useState<string | null>(null);
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
        <div className={`flex h-16 items-center justify-between gap-3 transition-[height] duration-300 ease-out-soft ${scrolled ? "lg:h-16" : "lg:h-20"}`}>
          <span onClick={close}><Logo /></span>

          <nav aria-label="Main" className="hidden items-center lg:flex">
            {NAV.map((i) => {
              const panel = i.to === "/services/" ? "services" : i.to === "/products/" ? "products" : null;
              const shown = menu === i.to;
              return (
                <div key={i.to} className="relative"
                  onMouseEnter={() => panel && setMenu(i.to)} onMouseLeave={() => setMenu(null)}
                  onFocus={() => panel && setMenu(i.to)}
                  onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setMenu(null)}>
                  <NavLink to={i.to} end={i.to === "/"} onClick={() => setMenu(null)}
                    className={({ isActive }) =>
                      `${NAV_LINK} ${isActive ? "text-accent after:scale-x-100" : "text-heading after:scale-x-0 hover:after:scale-x-100"}`}>
                    {i.label}
                    {panel && <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${shown ? "rotate-180" : ""}`} />}
                  </NavLink>

                  {/* The top padding bridges the gap to the link, so the pointer can travel down without the menu closing */}
                  {panel && (
                    <div className={`absolute left-1/2 top-full -translate-x-1/2 pt-4 transition-[opacity,translate,visibility] duration-200 ease-out-soft ${
                      shown ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                    }`}>
                      {panel === "services" ? (
                        <ul className={`${PANEL} grid w-[38rem] grid-cols-2 gap-1`}>
                          {SERVICES.map((s) => (
                            <li key={s.slug}>
                              <Link to={servicePath(s.slug)} onClick={() => setMenu(null)} className={PANEL_ITEM}>
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange-500/10 text-accent transition-colors group-hover/item:bg-orange-500 group-hover/item:text-white">
                                  <s.icon className="h-5 w-5" />
                                </span>
                                <span>
                                  <span className="block text-sm font-bold text-heading">{s.title}</span>
                                  <span className="mt-0.5 block text-xs leading-snug text-muted">{s.points[0]}</span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <ul className={`${PANEL} w-80`}>
                          {PRODUCT_CATEGORIES.map((c) => (
                            <li key={c}>
                              <Link to={`/products/?category=${encodeURIComponent(c)}`} onClick={() => setMenu(null)}
                                className="group/item flex items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-sm font-bold text-heading transition-colors hover:bg-surface hover:text-accent">
                                {c}
                                <ChevronRight className="h-4 w-4 text-muted transition-transform group-hover/item:translate-x-0.5 group-hover/item:text-accent" />
                              </Link>
                            </li>
                          ))}
                          <li className="mt-2 border-t border-line pt-2">
                            <Link to="/products/" onClick={() => setMenu(null)}
                              className="flex items-center justify-between rounded-xl bg-orange-500/10 px-3.5 py-2.5 text-sm font-extrabold text-accent transition-colors hover:bg-orange-500 hover:text-white">
                              View all products <ArrowRight className="h-4 w-4" />
                            </Link>
                          </li>
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
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
              className="shine group hidden h-11 items-center gap-2 rounded-full bg-linear-to-r from-orange-500 to-orange-600 pl-6 pr-2 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/40 active:translate-y-0 sm:inline-flex">
              Get a Free Quote
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20 transition-transform duration-300 ease-out-soft group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
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
