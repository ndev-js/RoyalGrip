import { SERVICES } from "../../constants/services";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";

const Services = () => (
  <section className="bg-surface py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeading center label="Our services" className="max-w-3xl"
        title="One contractor for every surface water can reach."
        lead="Roofs, basements, tanks and bathrooms each fail differently. We match the system to the structure instead of applying the same coating everywhere." />

      <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 3) * 90} className="h-full">
            <ServiceCard service={s} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
