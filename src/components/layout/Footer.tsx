import { MessageCircle, ShieldCheck } from "lucide-react";
import { NAV, WHATSAPP_URL } from "../../constants/content";
import type { Tokens } from "../../types";
import Logo from "../ui/Logo";

const STANDARDS = ["ASTM-compliant membranes", "Certified torch applicators", "10-year system warranty", "Nationwide delivery"];

const Footer = ({ t }: { t: Tokens }) => (
  <footer className={`border-t ${t.border} ${t.page}`}>
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
      <div className="grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo t={t} />
          <p className={`mt-5 max-w-sm text-sm leading-relaxed ${t.body}`}>
            RoyalGrip Waterproofing Solutions — modified bituminous membrane systems, protective coatings
            and construction chemicals, installed and supplied across Pakistan.
          </p>
          <a href={WHATSAPP_URL}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-orange-600">
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>

        <div>
          <h4 className={`text-xs font-bold uppercase tracking-[0.18em] ${t.heading}`}>Explore</h4>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className={`text-sm transition-colors ${t.body} hover:text-orange-500`}>{n.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={`text-xs font-bold uppercase tracking-[0.18em] ${t.heading}`}>Standards</h4>
          <ul className={`mt-4 space-y-2.5 text-sm ${t.body}`}>
            {STANDARDS.map((s) => (
              <li key={s} className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" /> {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`mt-12 flex flex-col items-center justify-between gap-3 border-t ${t.border} pt-7 sm:flex-row`}>
        <p className={`text-xs ${t.muted}`}>© {new Date().getFullYear()} RoyalGrip Waterproofing Solutions. All rights reserved.</p>
        <p className={`text-xs ${t.muted}`}>Modified Bituminous Membrane · Built for Pakistan's climate</p>
      </div>
    </div>
  </footer>
);

export default Footer;
