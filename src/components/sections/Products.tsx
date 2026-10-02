import { PRODUCTS, productBySlug } from "../../constants/products";
import ButtonLink from "../ui/ButtonLink";
import ProductCard from "../ui/ProductCard";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

/* One from each main category so the home page shows the breadth of the range */
const FEATURED = ["torch-4000", "flexcoat", "gripflex-pu", "griptile-bond"]
  .map(productBySlug)
  .filter((p) => p !== undefined);

/* Home page teaser; the full catalogue lives on the Products page */
const Products = () => (
  <section className="bg-page py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading label="Our products" className="max-w-xl"
          title="Membranes, coatings and construction chemicals."
          lead="Supplied by the roll, pail or drum, or installed by our own crews." />
        <ButtonLink to="/products/" variant="outline" arrow className="w-fit shrink-0">
          View all {PRODUCTS.length} products
        </ButtonLink>
      </div>

      <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURED.map((p, i) => (
          <Reveal key={p.slug} delay={i * 70} className="h-full">
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
