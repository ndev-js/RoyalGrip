import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { useSearchParams } from "react-router";
import { WHATSAPP_URL } from "../../constants/content";
import { SERVICES } from "../../constants/services";

const SUPPLY_ONLY = "Material supply only";

const FIELD = "min-h-12 w-full rounded-xl border bg-page px-4 py-3 text-sm text-heading outline-none transition-[border-color,box-shadow] placeholder:text-muted focus:border-orange-500 focus:ring-4 focus:ring-orange-500/15";
const LABEL = "mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted";

/*
 * There is no backend: a valid enquiry is handed to WhatsApp as a pre-filled message.
 * `compact` is the one-row quick-quote bar (name, phone, service only); ids are prefixed so both
 * variants can appear on the same page.
 */
const ContactForm = ({ compact = false }: { compact?: boolean }) => {
  const [params] = useSearchParams();
  const product = params.get("product");
  const id = (name: string) => (compact ? `quick-${name}` : name);

  const emptyForm = {
    name: "", phone: "", city: "",
    service: product ? SUPPLY_ONLY : SERVICES[0].title,
    message: product ? `I would like a quotation for ${product}.` : "",
  };

  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name";
    if (!/^[0-9+\-\s]{10,15}$/.test(form.phone.trim())) next.phone = "Enter a valid phone number";
    if (!compact && form.message.trim().length < 10) next.message = "Tell us a little more (10+ characters)";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const text = [
      "New enquiry from the RoyalGrip website",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      form.city.trim() && `City: ${form.city.trim()}`,
      `Service: ${form.service}`,
      form.message.trim() && `Details: ${form.message.trim()}`,
    ].filter(Boolean).join("\n");

    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
  };

  if (sent) {
    return (
      <div className={compact ? "flex flex-wrap items-center justify-center gap-x-5 gap-y-3 py-3 text-center" : "py-16 text-center"}>
        <CheckCircle2 className={compact ? "h-9 w-9 text-accent" : "mx-auto h-14 w-14 text-accent"} />
        <div>
          <h3 className={`font-bold text-heading ${compact ? "text-base" : "mt-5 text-xl"}`}>Almost done, {form.name.trim().split(" ")[0]}</h3>
          <p className={`max-w-sm text-sm text-body ${compact ? "" : "mx-auto mt-2"}`}>
            WhatsApp has opened with your enquiry filled in. Press send there and we will reply within
            one working day.
          </p>
        </div>
        <button type="button" onClick={() => { setSent(false); setForm(emptyForm); }}
          className={`rounded-full border-2 border-orange-500 px-5 py-2.5 text-sm font-bold text-accent transition-colors hover:bg-orange-500 hover:text-white ${compact ? "" : "mt-7"}`}>
          Start another enquiry
        </button>
      </div>
    );
  }

  const nameField = (
    <div>
      <label htmlFor={id("name")} className={LABEL}>Full name</label>
      <input id={id("name")} name="name" autoComplete="name" value={form.name} onChange={(e) => set("name", e.target.value)}
        className={`${FIELD} ${errors.name ? "border-red-500" : "border-line"}`} placeholder="Ahmed Khan" />
      {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
    </div>
  );

  const phoneField = (
    <div>
      <label htmlFor={id("phone")} className={LABEL}>Phone</label>
      <input id={id("phone")} name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)}
        className={`${FIELD} ${errors.phone ? "border-red-500" : "border-line"}`} placeholder="0300 0000000" />
      {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
    </div>
  );

  const serviceField = (
    <div>
      <label htmlFor={id("service")} className={LABEL}>Service</label>
      <select id={id("service")} name="service" value={form.service} onChange={(e) => set("service", e.target.value)}
        className={`${FIELD} border-line`}>
        {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
        <option>{SUPPLY_ONLY}</option>
      </select>
    </div>
  );

  const submitButton = (label: string) => (
    <button type="submit"
      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-colors hover:bg-orange-600">
      {label}
      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </button>
  );

  if (compact) {
    return (
      <form onSubmit={submit} noValidate className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.2fr_auto]">
        {nameField}
        {phoneField}
        {serviceField}
        {/* Spacer matches the label height so the button lines up with the inputs */}
        <div className="lg:pt-[1.375rem]">{submitButton("Get free quote")}</div>
      </form>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {nameField}
        {phoneField}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="city" className={LABEL}>City</label>
          <input id="city" name="city" autoComplete="address-level2" value={form.city} onChange={(e) => set("city", e.target.value)}
            className={`${FIELD} border-line`} placeholder="Lahore" />
        </div>
        {serviceField}
      </div>

      <div>
        <label htmlFor="message" className={LABEL}>Details</label>
        <textarea id="message" name="message" rows={4} value={form.message} onChange={(e) => set("message", e.target.value)}
          className={`${FIELD} resize-none ${errors.message ? "border-red-500" : "border-line"}`}
          placeholder="Approx. area, type of structure, and where you see water..." />
        {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
      </div>

      {submitButton("Send enquiry on WhatsApp")}
      <p className="text-center text-xs text-muted">We reply within one working day. No spam, ever.</p>
    </form>
  );
};

export default ContactForm;
