import ContactForm from "../ui/ContactForm";

/* Sits directly after the hero; the negative margin pulls the card up over the hero's bottom edge */
const QuickQuote = () => (
  <section aria-label="Quick quote" className="flow-root bg-navy-900 px-4 sm:px-8">
    <div className="relative z-10 mx-auto -mt-24 max-w-7xl rounded-3xl border border-line bg-raised p-5 shadow-2xl shadow-navy-950/40 sm:p-8">
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h2 className="text-xl font-extrabold tracking-tight text-heading sm:text-2xl">Get a free quote in one working day</h2>
        <p className="text-sm text-muted">No obligation. Your details go straight to our team on WhatsApp.</p>
      </div>
      <ContactForm compact />
    </div>
  </section>
);

export default QuickQuote;
