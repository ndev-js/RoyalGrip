import { useEffect, useState } from "react";
import { ChevronRight, Menu, Moon, PhoneCall, Sun, X } from "lucide-react";
import { Link, NavLink } from "react-router";
import { NAV, PHONE_DISPLAY, PHONE_URL } from "../../constants/content";
import { useTheme } from "../../hooks/useTheme";
import Logo from "../ui/Logo";

const Header = () => {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b border-line bg-page transition-shadow duration-300 ${scrolled ? "shadow-lg shadow-navy-950/10" : ""}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Logo />

          <nav aria-label="Main" className="hidden h-full items-stretch gap-1 lg:flex">
            {NAV.map((i) => (
              <NavLink key={i.to} to={i.to} end={i.to === "/"}
                className={({ isActive }) =>
                  `relative flex items-center px-3.5 text-sm font-bold transition-colors after:absolute after:inset-x-3.5 after:bottom-0 after:h-[3px] after:rounded-t-full after:bg-orange-500 after:transition-transform hover:text-orange-500 ${
                    isActive ? "text-orange-500 after:scale-x-100" : "text-heading after:scale-x-0"
                  }`}>
                {i.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={PHONE_URL} className="hidden items-center gap-3 xl:flex">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-orange-500/10 text-orange-500">
                <PhoneCall className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted">Call us now</span>
                <span className="block text-sm font-extrabold text-heading">{PHONE_DISPLAY}</span>
              </span>
            </a>
            <button type="button" onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-body transition-colors hover:border-orange-500 hover:text-orange-500">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Link to="/contact/"
              className="hidden rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:bg-orange-600 sm:inline-flex">
              Get a Free Quote
            </Link>
            <button type="button" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-heading lg:hidden">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-300 lg:hidden ${open ? "max-h-[28rem]" : "max-h-0"}`}>
        <nav aria-label="Mobile" className="space-y-1 border-t border-line bg-surface px-5 py-3">
          {NAV.map((i) => (
            <NavLink key={i.to} to={i.to} end={i.to === "/"} onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold ${isActive ? "bg-orange-500 text-white" : "text-heading"}`}>
              {i.label} <ChevronRight className="h-4 w-4 opacity-50" />
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
