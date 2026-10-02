import { useEffect, useState } from "react";
import { ArrowRight, ChevronRight, Menu, Moon, Sun, X } from "lucide-react";
import { NAV } from "../../constants/content";
import type { Theme, Tokens } from "../../types";
import Logo from "../ui/Logo";

const Header = ({ t, theme, toggle }: { t: Tokens; theme: Theme; toggle: () => void }) => {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${solid ? `${t.page} border-b ${t.border} shadow-sm` : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center justify-between py-4">
          <Logo t={t} />

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((i) => (
              <a key={i.href} href={i.href}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${t.body} hover:text-orange-500`}>
                {i.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              className={`grid h-10 w-10 place-items-center rounded-xl border ${t.border} ${t.body} transition-colors hover:border-orange-500 hover:text-orange-500`}>
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a href="#contact"
              className="hidden items-center gap-1.5 rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-600 sm:inline-flex">
              Free Survey <ArrowRight className="h-4 w-4" />
            </a>
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}
              className={`grid h-10 w-10 place-items-center rounded-xl border lg:hidden ${t.border} ${t.heading}`}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-300 lg:hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <nav className={`${t.surface} border-t ${t.border} space-y-1 px-5 py-3`}>
          {NAV.map((i) => (
            <a key={i.href} href={i.href} onClick={() => setOpen(false)}
              className={`flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium ${t.body} hover:text-orange-500`}>
              {i.label} <ChevronRight className="h-4 w-4 opacity-40" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
