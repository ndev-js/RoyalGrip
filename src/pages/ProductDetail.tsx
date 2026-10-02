import { CheckCircle2, MessageCircle, Package, Truck, Wrench } from "lucide-react";
import { useParams } from "react-router";
import CtaBanner from "../components/sections/CtaBanner";
import ButtonLink from "../components/ui/ButtonLink";
import JsonLd from "../components/ui/JsonLd";
import PageHero from "../components/ui/PageHero";
import ProductCard from "../components/ui/ProductCard";
import ProductVisual from "../components/ui/ProductVisual";
import SectionLabel from "../components/ui/SectionLabel";
import { WHATSAPP_URL } from "../constants/content";
import { PRODUCTS, productBySlug } from "../constants/products";
import { canonicalFor, enquiryPath, productPath } from "../routes";
import NotFound from "./NotFound";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productBySlug(slug);
  if (!product) return <NotFound />;

  const related = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug);
  const fill = PRODUCTS.filter((p) => p.featured && p.category !== product.category);
  const suggestions = [...related, ...fill].slice(0, 4);

  const whatsapp = `${WHATSAPP_URL}?text=${encodeURIComponent(`I would like a quotation for ${product.name}.`)}`;

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Products", to: "/products/" },
          { label: product.category, to: `/products/?category=${encodeURIComponent(product.category)}` },
          { label: product.name },
        ]}
        title={product.name} lead={product.tagline} />

      <section className="bg-page py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="group overflow-hidden rounded-3xl border border-line shadow-2xl lg:sticky lg:top-28">
              <ProductVisual category={product.category} className="h-64 sm:h-80" />
              <dl className="divide-y divide-line bg-surface text-sm">
                <div className="flex items-center gap-3 px-6 py-4">
                  <Package className="h-4 w-4 shrink-0 text-orange-500" />
                  <dt className="text-muted">Supplied as</dt>
                  <dd className="ml-auto text-right font-bold text-heading">{product.size}</dd>
                </div>
                <div className="flex items-center gap-3 px-6 py-4">
                  <Truck className="h-4 w-4 shrink-0 text-orange-500" />
                  <dt className="text-muted">Delivery</dt>
                  <dd className="ml-auto text-right font-bold text-heading">Nationwide</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="space-y-12 lg:col-span-3">
            <div>
              <SectionLabel>Overview</SectionLabel>
              <p className="mt-4 text-lg leading-relaxed text-body">{product.description}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink to={enquiryPath(product.name)} arrow>Request a quote</ButtonLink>
                <ButtonLink to={whatsapp} variant="outline">
                  <MessageCircle className="h-4 w-4 text-orange-500" /> Ask on WhatsApp
                </ButtonLink>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-heading sm:text-2xl">Key features</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                {product.specs.map((s) => (
                  <li key={s} className="rounded-2xl border border-line bg-surface p-5 text-sm font-bold text-heading">
                    <CheckCircle2 className="mb-3 h-5 w-5 text-orange-500" /> {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-heading sm:text-2xl">Where to use it</h2>
              <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {product.applications.map((a) => (
                  <li key={a} className="flex items-start gap-2.5 text-sm text-body">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" /> {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-6 sm:p-7">
              <h2 className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-heading sm:text-2xl">
                <Wrench className="h-5 w-5 text-orange-500" /> How it is applied
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">{product.method}</p>
              <p className="mt-4 text-xs leading-relaxed text-muted">
                This is a summary. Always follow the technical data sheet supplied with the product, and
                ask our team if your site conditions are unusual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {suggestions.length > 0 && (
        <section className="bg-surface py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionLabel>Keep browsing</SectionLabel>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-heading sm:text-3xl">Related products</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {suggestions.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          </div>
        </section>
      )}

      <CtaBanner title={<>Need {product.name} installed? Our crews can do it.</>}
        lead="Buy the material alone or have our trained applicators install the full system under a written warranty." />

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.description,
        category: product.category,
        url: canonicalFor(productPath(product.slug)),
        brand: { "@type": "Brand", name: "RoyalGrip" },
      }} />
    </>
  );
};

export default ProductDetail;
