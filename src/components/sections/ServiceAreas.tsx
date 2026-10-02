import { MapPin } from "lucide-react";
import { CITIES } from "../../constants/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const ServiceAreas = () => (
  <section className="bg-surface py-16 lg:py-20">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-8 lg:grid-cols-3 lg:items-center">
      <SectionHeading label="Service areas"
        title="Waterproofing services across Pakistan."
        lead="Crews mobilise across Punjab, Sindh, KPK and Balochistan, and material is dispatched nationwide." />
      <Reveal className="lg:col-span-2">
        <ul className="flex flex-wrap gap-2.5 sm:gap-3">
          {CITIES.map((c) => (
            <li key={c}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-raised px-4 py-2.5 text-sm font-bold text-heading shadow-card transition-all hover:-translate-y-0.5 hover:border-orange-500 hover:text-accent sm:px-5">
              <MapPin className="h-4 w-4 text-accent" /> Waterproofing in {c}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

export default ServiceAreas;
