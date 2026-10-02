import ContactSection from "../components/sections/Contact";
import Faq from "../components/sections/Faq";
import ServiceAreas from "../components/sections/ServiceAreas";
import PageHero from "../components/ui/PageHero";

const Contact = () => (
  <>
    <PageHero crumbs={[{ label: "Contact" }]}
      title="Book a free waterproofing survey."
      lead="Call, WhatsApp or send the form. An engineer will visit, find where the water is getting in and give you a written quotation." />
    <ContactSection />
    <ServiceAreas />
    <Faq />
  </>
);

export default Contact;
