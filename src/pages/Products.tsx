import { useState } from "react";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router";
import CtaBanner from "../components/sections/CtaBanner";
import PageHero from "../components/ui/PageHero";
import ProductCard from "../components/ui/ProductCard";
import { CATEGORY_BLURBS, PRODUCT_CATEGORIES, PRODUCTS } from "../constants/products";
import type { ProductCategory } from "../types";

const Products = () => {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState("");

  const requested = params.get("category");
  const active = PRODUCT_CATEGORIES.find((c) => c === requested) ?? "All";

  const select = (c: ProductCategory | "All") =>
    setParams(c === "All" ? {} : { category: c }, { replace: true, preventScrollReset: true });

  const q = query.trim().toLowerCase();
  const list = PRODUCTS.filter((p) =>
    (active === "All" || p.category === active) &&
    (q === "" || `${p.name} ${p.tagline} ${p.category}`.toLowerCase().includes(q))
  );

  return (
    <>
      <PageHero crumbs={[{ label: "Products" }]}
        title="Waterproofing membranes, coatings and construction chemicals."
        lead="A complete range for new construction and repair, supplied nationwide by the roll, pail or drum. Technical data sheets and application guidance come with every order." />

      <section className="bg-page py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* One swipeable row on phones instead of four wrapped lines of chips */}
            <div role="group" aria-label="Filter by category"
              className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
              {(["All", ...PRODUCT_CATEGORIES] as const).map((c) => (
                <button type="button" key={c} onClick={() => select(c)} aria-pressed={active === c}
                  className={`min-h-11 shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-bold transition-all ${
                    active === c
                      ? "border-orange-500 bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                      : "border-line bg-surface text-body hover:border-orange-500 hover:text-accent"
                  }`}>
                  {c}
                </button>
              ))}
            </div>

            <label className="relative block w-full shrink-0 lg:w-72">
              <span className="sr-only">Search products</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products"
                className="min-h-12 w-full rounded-xl border border-line bg-surface py-3 pl-11 pr-4 text-sm text-heading outline-none transition-[border-color,box-shadow] focus:border-orange-500 focus:ring-4 focus:ring-orange-500/15" />
            </label>
          </div>

          <p className="mt-6 text-sm text-muted" aria-live="polite">
            {active !== "All" && <>{CATEGORY_BLURBS[active]} · </>}
            {list.length} {list.length === 1 ? "product" : "products"}
          </p>

          {list.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {list.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-line p-12 text-center">
              <p className="text-base font-bold text-heading">No products match your search.</p>
              <p className="mt-2 text-sm text-body">Try a different term or category, or ask us directly.</p>
              <button type="button" onClick={() => { setQuery(""); select("All"); }}
                className="mt-5 text-sm font-bold text-accent hover:underline">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CtaBanner title={<>Not sure which product fits? Ask our technical team.</>}
        lead="Tell us the structure and the problem and we will recommend a system, quantities and an application method." />
    </>
  );
};

export default Products;
