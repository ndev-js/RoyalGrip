import { AlertTriangle, ChevronRight, MessageCircle, Phone } from "lucide-react";
import { Link, useParams } from "react-router";
import CtaBanner from "../components/sections/CtaBanner";
import ButtonLink from "../components/ui/ButtonLink";
import JsonLd from "../components/ui/JsonLd";
import PageHero from "../components/ui/PageHero";
import ProductCard from "../components/ui/ProductCard";
import Reveal from "../components/ui/Reveal";
import SectionLabel from "../components/ui/SectionLabel";
import { PHONE_DISPLAY, PHONE_URL, WHATSAPP_URL } from "../constants/content";
import { productBySlug } from "../constants/products";
import { SERVICES, serviceBySlug } from "../constants/services";
import { canonicalFor, servicePath } from "../routes";
import NotFound from "./NotFound";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceBySlug(slug);
  if (!service) return <NotFound />;

  const products = service.products.map(productBySlug).filter((p) => p !== undefined);
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero crumbs={[{ label: "Services", to: "/services/" }, { label: service.title }]}
        title={service.title} lead={service.desc} image={service.image}>
        <ButtonLink to="/contact/" arrow>Book a free survey</ButtonLink>
        <ButtonLink to={PHONE_URL} variant="ghost"><Phone className="h-4 w-4" /> {PHONE_DISPLAY}</ButtonLink>
      </PageHero>

      <section className="bg-page py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-3">
          <div className="space-y-14 lg:col-span-2">
            <Reveal>
              <SectionLabel>Overview</SectionLabel>
              <p className="mt-4 text-lg leading-relaxed text-body">{service.intro}</p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {service.points.map((p) => (
                  <li key={p} className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-heading">{p}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <SectionLabel>Warning signs</SectionLabel>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-heading sm:text-3xl">When you need it</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.signs.map((s) => (
                  <li key={s} className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-5 text-sm leading-relaxed text-body">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" /> {s}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <SectionLabel>Our method</SectionLabel>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-heading sm:text-3xl">How we do it</h2>
              <ol className="mt-6 space-y-4">
                {service.approach.map((step, i) => (
                  <li key={step} className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-orange-500 text-sm font-extrabold text-white">{i + 1}</span>
                    <p className="pt-1.5 text-sm leading-relaxed text-body">{step}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-linear-to-br from-orange-500 via-orange-600 to-amber-500 p-7 text-white shadow-2xl shadow-orange-500/25">
              <h2 className="text-xl font-extrabold">Get a free survey</h2>
              <p className="mt-2 text-sm leading-relaxed text-orange-50">
                An engineer inspects the site and sends an itemised quotation. No charge inside Lahore,
                Karachi and Islamabad.
              </p>
              <div className="mt-6 space-y-2.5">
                <ButtonLink to="/contact/" variant="white" arrow className="w-full">Request a quote</ButtonLink>
                <a href={WHATSAPP_URL}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-6 py-3 text-sm font-bold transition-colors hover:bg-white/10">
                  <MessageCircle className="h-4 w-4" /> WhatsApp us
                </a>
              </div>
            </div>

            <nav aria-label="Other services" className="rounded-3xl border border-line bg-surface p-7">
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-heading">Other services</h2>
              <ul className="mt-4 divide-y divide-line">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link to={servicePath(s.slug)}
                      className="flex items-center justify-between gap-3 py-3 text-sm font-semibold text-body transition-colors hover:text-orange-500">
                      {s.title} <ChevronRight className="h-4 w-4 shrink-0 opacity-50" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </section>

      {products.length > 0 && (
        <section className="bg-surface py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionLabel>Materials</SectionLabel>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-heading sm:text-3xl">Products we use for this work</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        description: service.intro,
        url: canonicalFor(servicePath(service.slug)),
        areaServed: { "@type": "Country", name: "Pakistan" },
        provider: { "@type": "HomeAndConstructionBusiness", name: "RoyalGrip Waterproofing Solutions" },
      }} />
    </>
  );
};

export default ServiceDetail;
