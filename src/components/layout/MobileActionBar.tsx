import { ClipboardList, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router";
import { PHONE_URL, WHATSAPP_URL } from "../../constants/content";

const MobileActionBar = () => (
  <nav aria-label="Quick contact"
    className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-line bg-page text-xs font-bold sm:hidden">
    <a href={PHONE_URL} className="flex flex-col items-center gap-1 py-2.5 text-heading">
      <Phone className="h-4 w-4 text-orange-500" /> Call
    </a>
    <a href={WHATSAPP_URL} className="flex flex-col items-center gap-1 border-x border-line py-2.5 text-heading">
      <MessageCircle className="h-4 w-4 text-orange-500" /> WhatsApp
    </a>
    <Link to="/contact/" className="flex flex-col items-center gap-1 bg-orange-500 py-2.5 text-white">
      <ClipboardList className="h-4 w-4" /> Free survey
    </Link>
  </nav>
);

export default MobileActionBar;
