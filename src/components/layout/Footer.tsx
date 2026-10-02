import { ChevronRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router";
import { ADDRESS, EMAIL, HOURS, NAV, PHONE_DISPLAY, PHONE_URL, WHATSAPP_URL } from "../../constants/content";
import { PRODUCT_CATEGORIES } from "../../constants/products";
import { SERVICES } from "../../constants/services";
import { servicePath } from "../../routes";
import Logo from "../ui/Logo";

const HEADING = "font-sans text-sm font-extrabold uppercase tracking-[0.14em] text-white";
/* py-1 pads each link out to a comfortable tap height on phones */
const LINK = "group inline-flex items-center gap-1.5 py-1 text-sm text-slate-400 transition-colors hover:text-orange-400";

/* Navy in both themes */
const Footer = () => (
  <footer className="relative isolate overflow-hidden bg-navy-950 text-slate-400">
    <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
    <div className="h-1 bg-linear-to-r from-orange-500 via-amber-400 to-orange-500" />
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-16">
      <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-12">
        <div className="sm:col-span-2 lg:col-span-4">
          <Logo onDark />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            RoyalGrip Waterproofing Solutions — modified bituminous membrane systems, protective coatings
            and construction chemicals, installed and supplied across Pakistan.
          </p>
          <a href={WHATSAPP_URL}
            className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-emerald-600 px-6 text-sm font-bold text-white transition-colors hover:bg-emerald-700">
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>

        <nav aria-label="Services" className="lg:col-span-3">
          <h2 className={HEADING}>Services</h2>
          <ul className="mt-4 space-y-1.5">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to={servicePath(s.slug)} className={LINK}>
                  <ChevronRight className="h-3.5 w-3.5 text-orange-500" /> {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Products" className="lg:col-span-2">
          <h2 className={HEADING}>Products</h2>
          <ul className="mt-4 space-y-1.5">
            {PRODUCT_CATEGORIES.map((c) => (
              <li key={c}>
                <Link to={`/products/?category=${encodeURIComponent(c)}`} className={LINK}>
                  <ChevronRight className="h-3.5 w-3.5 text-orange-500" /> {c}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className={HEADING}>Contact</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href={PHONE_URL} className="flex items-center gap-3 font-bold text-white transition-colors hover:text-orange-400">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/5"><Phone className="h-4 w-4 text-orange-500" /></span>
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 transition-colors hover:text-orange-400">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/5"><Mail className="h-4 w-4 text-orange-500" /></span>
                {EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/5"><MapPin className="h-4 w-4 text-orange-500" /></span>
              {ADDRESS}
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/5"><Clock className="h-4 w-4 text-orange-500" /></span>
              {HOURS}
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 lg:flex-row">
        <p className="text-xs">© {new Date().getFullYear()} RoyalGrip Waterproofing Solutions. All rights reserved.</p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="text-xs transition-colors hover:text-orange-400">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
