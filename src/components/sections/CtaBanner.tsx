import type { ReactNode } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_URL, WHATSAPP_URL } from "../../constants/content";
import ButtonLink from "../ui/ButtonLink";
import Reveal from "../ui/Reveal";

interface Props { title?: ReactNode; lead?: string }

const CtaBanner = ({
  title = "Roof leaking this monsoon? Get it surveyed free.",
  lead = "An engineer visits, maps the moisture and sends you a written scope. No charge and no obligation inside Lahore, Karachi and Islamabad.",
}: Props) => (
  <section className="relative isolate overflow-hidden bg-orange-600">
    <img src="/images/rain.jpg" alt="" loading="lazy" width={1600} height={1067}
      className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30 mix-blend-multiply" />
    <div className="absolute inset-0 -z-10 bg-linear-to-r from-orange-600 via-orange-600/90 to-orange-500/60" />

    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-16 lg:py-20">
      <Reveal>
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <h2 className="text-title font-black tracking-tight text-white">{title}</h2>
            <p className="mt-4 text-base leading-relaxed text-orange-50 sm:text-lg">{lead}</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-0 lg:shrink-0 lg:flex-col">
            <ButtonLink to="/contact/" variant="white" arrow>Book a free survey</ButtonLink>
            <ButtonLink to={PHONE_URL} variant="ghost"><Phone className="h-4 w-4" /> {PHONE_DISPLAY}</ButtonLink>
            <ButtonLink to={WHATSAPP_URL} variant="ghost"><MessageCircle className="h-4 w-4" /> WhatsApp us</ButtonLink>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CtaBanner;
