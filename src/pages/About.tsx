import { CheckCircle2 } from "lucide-react";
import CtaBanner from "../components/sections/CtaBanner";
import Process from "../components/sections/Process";
import Stats from "../components/sections/Stats";
import WhyUs from "../components/sections/WhyUs";
import ButtonLink from "../components/ui/ButtonLink";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import RoofSystemGraphic from "../components/ui/RoofSystemGraphic";
import SectionHeading from "../components/ui/SectionHeading";
import SectionLabel from "../components/ui/SectionLabel";
import { VALUES } from "../constants/content";

const WHAT_WE_DO = [
  "Supply of APP and SBS modified bituminous membranes",
  "Liquid coatings, primers, sealants and concrete admixtures",
  "Installation by our own trained application crews",
  "Leak surveys, written scopes and system warranties",
];

const About = () => (
  <>
    <PageHero crumbs={[{ label: "About" }]}
      title="Waterproofing done properly, from the survey to the warranty."
      lead="RoyalGrip is a waterproofing contractor and supplier. We sell the materials, we install them with our own crews, and we put our name on the result in writing." />

    <section className="bg-page py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <div>
            <SectionLabel>Who we are</SectionLabel>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
              One company for the material and the workmanship.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-body">
              <p>
                Most leaks we are called to were waterproofed once already. The usual story is a good
                product applied badly, or the wrong product applied well: a coating where a membrane
                was needed, laps left unsealed, a parapet junction never detailed.
              </p>
              <p>
                RoyalGrip was built to close that gap. Because we both supply the system and install it,
                there is no argument between a manufacturer and an applicator when something goes
                wrong. There is one scope, one crew and one warranty.
              </p>
              <p>
                Our range covers modified bituminous membranes, liquid coatings, primers, joint
                sealants, concrete admixtures and tile fixing products, chosen to work together and to
                cope with Pakistan's monsoon rain and summer roof temperatures.
              </p>
            </div>
            <ul className="mt-7 space-y-2.5">
              {WHAT_WE_DO.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-semibold text-heading">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" /> {item}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink to="/services/" arrow>Our services</ButtonLink>
              <ButtonLink to="/products/" variant="outline">Product range</ButtonLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative rounded-3xl border border-line bg-surface p-8 shadow-2xl">
            <RoofSystemGraphic className="mx-auto w-full max-w-sm" />
            <p className="mt-4 text-center text-sm text-muted">
              Slab, primer, membrane and protective finish: every layer specified, installed and
              warranted by one team.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <Stats />

    <section className="bg-page py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading label="What drives us" title="Fix the cause, not the stain." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 80} className="h-full">
              <article className="h-full rounded-2xl border border-line bg-surface p-7">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-linear-to-br from-orange-500 to-amber-400 shadow-lg shadow-orange-500/30">
                  <v.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-heading">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{v.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <WhyUs />
    <Process />
    <CtaBanner title={<>Have a project in mind? Talk to an engineer.</>}
      lead="Share your drawings or book a site visit and we will come back with a written scope and quotation." />
  </>
);

export default About;
