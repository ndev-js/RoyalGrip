import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ADDRESS, EMAIL, HOURS, PHONE_DISPLAY, PHONE_URL, WHATSAPP_URL } from "../../constants/content";
import ContactForm from "../ui/ContactForm";
import Reveal from "../ui/Reveal";

const CHANNELS = [
  { icon: Phone, label: "Call sales", value: PHONE_DISPLAY, href: PHONE_URL },
  { icon: MessageCircle, label: "WhatsApp", value: PHONE_DISPLAY, href: WHATSAPP_URL },
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: MapPin, label: "Office", value: `${ADDRESS} — serving nationwide` },
  { icon: Clock, label: "Hours", value: HOURS },
];

const Contact = () => (
  <section id="contact" className="bg-page py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <Reveal>
        <div className="grid overflow-hidden rounded-[2rem] border border-line shadow-2xl shadow-navy-950/10 lg:grid-cols-5">
          {/* Navy in both themes */}
          <div className="relative isolate overflow-hidden bg-navy-950 p-8 text-white sm:p-10 lg:col-span-2">
            <div className="absolute -bottom-24 -right-24 -z-10 h-72 w-72 rounded-full bg-orange-500/25 blur-3xl" aria-hidden="true" />
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">Tell us where it leaks.</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Send a few details and our team will arrange a site visit. Surveys and quotations are free
              inside Lahore, Karachi and Islamabad.
            </p>

            <ul className="mt-9 space-y-5">
              {CHANNELS.map((c) => {
                const body = (
                  <>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-orange-400 ring-1 ring-white/10 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">{c.label}</span>
                      <span className="block text-sm font-bold text-white">{c.value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={c.label}>
                    {c.href
                      ? <a href={c.href} className="group flex items-center gap-4">{body}</a>
                      : <div className="flex items-center gap-4">{body}</div>}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="bg-raised p-8 sm:p-10 lg:col-span-3">
            <h3 className="text-2xl font-extrabold text-heading">Request your free survey</h3>
            <p className="mb-7 mt-2 text-sm text-body">Fill in the form and it opens in WhatsApp, ready to send to our team.</p>
            <ContactForm />
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Contact;
