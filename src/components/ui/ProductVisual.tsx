import type { ReactNode } from "react";
import type { ProductCategory } from "../../types";

const ORANGE = "#f97316";

const Brand = ({ x, y, size = 9 }: { x: number; y: number; size?: number }) => (
  <text x={x} y={y} textAnchor="middle" fontSize={size} fontWeight="800" fill="#fff" fontFamily="Archivo, sans-serif">
    ROYALGRIP
  </text>
);

/* Simple pack illustrations standing in for product photography */
const Roll = (
  <>
    <ellipse cx="100" cy="132" rx="34" ry="11" fill="#111827" />
    <rect x="66" y="32" width="68" height="100" fill="#1f2937" />
    <rect x="66" y="62" width="68" height="42" fill={ORANGE} />
    <Brand x={100} y={87} />
    <ellipse cx="100" cy="32" rx="34" ry="11" fill="#374151" />
    <ellipse cx="100" cy="32" rx="24" ry="7.5" fill="none" stroke="#111827" strokeWidth="2" />
    <ellipse cx="100" cy="32" rx="14" ry="4.5" fill="none" stroke="#111827" strokeWidth="2" />
    <ellipse cx="100" cy="32" rx="5" ry="1.8" fill="#111827" />
  </>
);

const Pail = (
  <>
    <path d="M60 50 Q100 2 140 50" fill="none" stroke="#94a3b8" strokeWidth="3" />
    <path d="M60 46h80l-9 88a8 8 0 0 1-8 7H77a8 8 0 0 1-8-7Z" fill="#16294a" />
    <path d="M63 72h74l-4.5 40h-65Z" fill={ORANGE} />
    <Brand x={100} y={96} />
    <ellipse cx="100" cy="46" rx="42" ry="9" fill="#223a63" />
    <ellipse cx="100" cy="46" rx="33" ry="6" fill="#16294a" />
  </>
);

const Bag = (
  <>
    <rect x="56" y="26" width="88" height="114" rx="9" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
    <path d="M56 40h88" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5 4" />
    <rect x="56" y="64" width="88" height="44" fill={ORANGE} />
    <Brand x={100} y={90} />
    <rect x="74" y="118" width="52" height="5" rx="2.5" fill="#94a3b8" />
  </>
);

const Cartridge = (
  <>
    <path d="M93 44 97 14h6l4 30Z" fill="#cbd5e1" />
    <rect x="86" y="42" width="28" height="8" rx="2" fill="#94a3b8" />
    <rect x="80" y="50" width="40" height="92" rx="5" fill="#16294a" />
    <rect x="80" y="72" width="40" height="46" fill={ORANGE} />
    <text x="100" y="100" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" fontFamily="Archivo, sans-serif">RG</text>
  </>
);

const Board = (
  <>
    <path d="M38 104 118 132 166 100 86 72Z" fill="#111827" />
    <path d="M38 90 118 118 166 86 86 58Z" fill="#1f2937" />
    <path d="M38 76 118 104 166 72 86 44Z" fill="#374151" />
    <path d="M118 104 166 72v8l-48 32Z" fill="#1f2937" />
    <path d="M100 56 124 64 108 75 84 67Z" fill={ORANGE} />
  </>
);

const PACKS: Record<ProductCategory, ReactNode> = {
  "Membranes": Roll,
  "Liquid Coatings": Pail,
  "Primers & Bitumen": Pail,
  "Sealants": Cartridge,
  "Admixtures & Repair": Pail,
  "Tile Adhesives & Grouts": Bag,
  "Accessories": Board,
};

/* Illustrated product panel used on cards and the product page */
const ProductVisual = ({ category, className = "h-44" }: { category: ProductCategory; className?: string }) => (
  <div className={`relative overflow-hidden bg-linear-to-br from-slate-100 to-slate-200 dark:from-navy-800 dark:to-navy-900 ${className}`}>
    <div className="absolute -bottom-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-orange-500/25 blur-3xl" aria-hidden="true" />
    <svg viewBox="0 0 200 160" aria-hidden="true"
      className="relative mx-auto h-full w-auto drop-shadow-xl transition-transform duration-500 group-hover:scale-110">
      {PACKS[category]}
    </svg>
    <span className="absolute left-4 top-4 rounded-full bg-navy-950 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
      {category}
    </span>
  </div>
);

export default ProductVisual;
