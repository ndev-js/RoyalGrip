import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router";
import { productPath } from "../../routes";
import type { Product } from "../../types";
import ProductVisual from "./ProductVisual";

const ProductCard = ({ product: p }: { product: Product }) => (
  <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-raised shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-navy-950/10">
    <ProductVisual category={p.category} />

    <div className="flex flex-1 flex-col p-6">
      <h3 className="text-lg font-bold leading-snug text-heading">
        {/* Stretched link: the whole card is clickable */}
        <Link to={productPath(p.slug)} className="after:absolute after:inset-0">{p.name}</Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{p.tagline}</p>

      <ul className="mt-4 space-y-1.5">
        {p.specs.map((s) => (
          <li key={s} className="flex items-start gap-2 text-xs font-medium text-muted">
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-500" /> {s}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
        <span className="text-xs font-semibold text-muted">{p.size}</span>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-orange-500/10 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  </article>
);

export default ProductCard;
