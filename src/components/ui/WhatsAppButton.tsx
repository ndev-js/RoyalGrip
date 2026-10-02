import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../../constants/content";

const WhatsAppButton = () => (
  <a href={WHATSAPP_URL} aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-40 hidden h-14 items-center gap-2.5 rounded-full bg-emerald-600 pl-4 pr-5 text-sm font-bold text-white shadow-2xl shadow-emerald-600/40 transition-transform duration-300 ease-out-soft hover:scale-105 sm:inline-flex">
    <MessageCircle className="h-6 w-6" /> Chat with us
  </a>
);

export default WhatsAppButton;
