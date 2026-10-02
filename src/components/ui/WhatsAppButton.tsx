import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../../constants/content";

const WhatsAppButton = () => (
  <a href={WHATSAPP_URL} aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-orange-500 text-white shadow-2xl shadow-orange-500/40 transition-transform hover:scale-110">
    <MessageCircle className="h-6 w-6" />
  </a>
);

export default WhatsAppButton;
