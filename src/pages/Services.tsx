import CtaBanner from "../components/sections/CtaBanner";
import Faq from "../components/sections/Faq";
import Process from "../components/sections/Process";
import Sectors from "../components/sections/Sectors";
import ServicesGrid from "../components/sections/Services";
import ButtonLink from "../components/ui/ButtonLink";
import PageHero from "../components/ui/PageHero";

const Services = () => (
  <>
    <PageHero crumbs={[{ label: "Services" }]} wave="text-surface"
      title="Waterproofing services for roofs, basements, tanks and wet areas."
      lead="Survey, specification, installation and testing by our own crews, anywhere in Pakistan. Every full-system installation carries a 10-year written warranty.">
      <ButtonLink to="/contact/" arrow>Book a free survey</ButtonLink>
    </PageHero>
    <ServicesGrid />
    <Sectors />
    <Process />
    <CtaBanner />
    <Faq />
  </>
);

export default Services;
