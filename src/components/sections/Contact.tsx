import { useState } from "react";
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { SERVICES, WHATSAPP_URL } from "../../constants/content";
import type { Tokens } from "../../types";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";

const CHANNELS = [
  { icon: Phone, label: "Call sales", value: "+92 300 0000000", href: "tel:+923000000000" },
  { icon: MessageCircle, label: "WhatsApp", value: "+92 300 0000000", href: WHATSAPP_URL },
  { icon: Mail, label: "Email", value: "info@royalgrip.com.pk", href: "mailto:info@royalgrip.com.pk" },
  { icon: MapPin, label: "Office", value: "Lahore, Pakistan — serving nationwide", href: "#contact" },
];

const EMPTY_FORM = { name: "", phone: "", city: "", service: SERVICES[0].title, message: "" };

const Contact = ({ t }: { t: Tokens }) => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const submit = () => {
    const next: Record<string, string> = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name";
    if (!/^[0-9+\-\s]{10,15}$/.test(form.phone.trim())) next.phone = "Enter a valid phone number";
    if (form.message.trim().length < 10) next.message = "Tell us a little more (10+ characters)";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  const field = `w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-orange-500 ${t.inputBg} ${t.heading}`;
  const label = `mb-1.5 block text-xs font-bold uppercase tracking-wider ${t.muted}`;

  return (
    <section id="contact" className={`py-20 lg:py-28 ${t.surface}`}>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div>
            <SectionLabel>Get in touch</SectionLabel>
            <h2 className={`mt-4 text-3xl font-black tracking-tight sm:text-4xl ${t.heading}`}>
              Tell us where it leaks.
            </h2>
            <p className={`mt-4 text-base leading-relaxed ${t.body}`}>
              Send a few details and our team will arrange a site visit. Surveys and quotations are free
              inside Lahore, Karachi and Islamabad.
            </p>

            <div className="mt-10 space-y-4">
              {CHANNELS.map((c) => (
                <a key={c.label} href={c.href}
                  className={`group flex items-center gap-4 rounded-2xl border ${t.border} ${t.raised} p-4 transition-all hover:translate-x-1 hover:border-orange-500/60`}>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange-500/10 ring-1 ring-orange-500/20 transition-colors group-hover:bg-orange-500">
                    <c.icon className="h-5 w-5 text-orange-500 transition-colors group-hover:text-white" />
                  </span>
                  <span>
                    <span className={`block text-[11px] uppercase tracking-wider ${t.muted}`}>{c.label}</span>
                    <span className={`block text-sm font-bold ${t.heading}`}>{c.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className={`rounded-3xl border ${t.border} ${t.raised} p-7 shadow-xl sm:p-9`}>
            {sent ? (
              <div className="py-16 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-orange-500" />
                <h3 className={`mt-5 text-xl font-bold ${t.heading}`}>Request received</h3>
                <p className={`mt-2 text-sm ${t.body}`}>
                  Thank you, {form.name.split(" ")[0]}. Our team will call you within one working day.
                </p>
                <button
                  onClick={() => { setSent(false); setForm(EMPTY_FORM); }}
                  className="mt-7 rounded-xl border-2 border-orange-500 px-5 py-2.5 text-sm font-bold text-orange-500 transition-colors hover:bg-orange-500 hover:text-white">
                  Send another
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={label}>Full name</label>
                    <input id="name" value={form.name} onChange={(e) => set("name", e.target.value)}
                      className={`${field} ${errors.name ? "border-red-500" : t.border}`} placeholder="Ahmed Khan" />
                    {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className={label}>Phone</label>
                    <input id="phone" value={form.phone} onChange={(e) => set("phone", e.target.value)}
                      className={`${field} ${errors.phone ? "border-red-500" : t.border}`} placeholder="0300 0000000" />
                    {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="city" className={label}>City</label>
                    <input id="city" value={form.city} onChange={(e) => set("city", e.target.value)}
                      className={`${field} ${t.border}`} placeholder="Lahore" />
                  </div>
                  <div>
                    <label htmlFor="service" className={label}>Service</label>
                    <select id="service" value={form.service} onChange={(e) => set("service", e.target.value)}
                      className={`${field} ${t.border}`}>
                      {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
                      <option>Material supply only</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={label}>Details</label>
                  <textarea id="message" rows={4} value={form.message} onChange={(e) => set("message", e.target.value)}
                    className={`${field} resize-none ${errors.message ? "border-red-500" : t.border}`}
                    placeholder="Approx. area, type of structure, and where you see water..." />
                  {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
                </div>

                <button onClick={submit}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-orange-500/25 transition-colors hover:bg-orange-600">
                  Request free survey
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className={`text-center text-xs ${t.muted}`}>We reply within one working day. No spam, ever.</p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
