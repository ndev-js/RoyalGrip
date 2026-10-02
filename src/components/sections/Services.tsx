import { SERVICES } from "../../constants/services";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";

/* Wide cards on desktop. With six services these three positions make every row of the 3-column grid fill exactly:
   [wide, 1] [1, wide] [wide, 1] */
const WIDE = new Set([0, 3, 4]);

const Services = () => (
  <section className="bg-surface py-16 sm:py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-8">
      <SectionHeading center label="Our services" className="max-w-3xl"
        title="One contractor for every surface water can reach."
        lead="Roofs, basements, tanks and bathrooms each fail differently. We match the system to the structure instead of applying the same coating everywhere." />

      <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const wide = WIDE.has(i);
          return (
            <Reveal key={s.slug} delay={(i % 3) * 90} from={i % 2 ? "scale" : "up"} className={`h-full ${wide ? "lg:col-span-2" : ""}`}>
              <ServiceCard service={s} wide={wide} />
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
