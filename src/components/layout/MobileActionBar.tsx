import { ClipboardList, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router";
import { PHONE_URL, WHATSAPP_URL } from "../../constants/content";

const ITEM = "flex min-h-14 flex-col items-center justify-center gap-1 text-heading active:bg-surface";

const MobileActionBar = () => (
  <nav aria-label="Quick contact"
    className="pb-safe fixed inset-x-0 bottom-0 z-40 border-t border-line bg-page/90 text-xs font-bold shadow-[0_-8px_24px_-12px_rgb(8_17_32/0.25)] backdrop-blur-xl sm:hidden">
    <div className="grid grid-cols-3">
      <a href={PHONE_URL} className={ITEM}>
        <Phone className="h-5 w-5 text-accent" /> Call
      </a>
      <a href={WHATSAPP_URL} className={`${ITEM} border-x border-line`}>
        <MessageCircle className="h-5 w-5 text-emerald-500" /> WhatsApp
      </a>
      <Link to="/contact/" className="flex min-h-14 flex-col items-center justify-center gap-1 bg-orange-500 text-white active:bg-orange-600">
        <ClipboardList className="h-5 w-5" /> Free survey
      </Link>
    </div>
  </nav>
);

export default MobileActionBar;
