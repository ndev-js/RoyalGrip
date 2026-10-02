import { Clock, Mail, MapPin, ShieldCheck } from "lucide-react";
import { ADDRESS, EMAIL, HOURS } from "../../constants/content";

const TopBar = () => (
  <div className="bg-navy-950 text-slate-300">
    <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-4 py-2 text-xs font-medium sm:justify-between sm:px-8 sm:py-2.5">
      <p className="inline-flex items-center gap-2 font-semibold text-white">
        <ShieldCheck className="h-4 w-4 shrink-0 text-orange-500" />
        <span className="sm:hidden">Free site survey · 10-year warranty</span>
        <span className="hidden sm:inline">Free site survey in Lahore, Karachi &amp; Islamabad</span>
      </p>
      <div className="hidden items-center gap-6 sm:flex">
        <span className="hidden items-center gap-1.5 lg:inline-flex">
          <MapPin className="h-3.5 w-3.5 text-orange-500" /> {ADDRESS}
        </span>
        <span className="hidden items-center gap-1.5 md:inline-flex">
          <Clock className="h-3.5 w-3.5 text-orange-500" /> {HOURS}
        </span>
        <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
          <Mail className="h-3.5 w-3.5 text-orange-500" /> {EMAIL}
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
