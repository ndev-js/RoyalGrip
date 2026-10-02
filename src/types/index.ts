import type { ElementType } from "react";

export type Theme = "dark" | "light";

export interface NavItem { label: string; to: string }

export interface Service {
  slug: string; icon: ElementType; image: string; title: string; desc: string; points: string[];
  intro: string; signs: string[]; approach: string[]; products: string[];
}

export interface Sector {
  icon: ElementType; image: string; title: string; desc: string; items: string[];
}

export interface Feature { icon: ElementType; title: string; desc: string }

export type ProductCategory =
  | "Membranes" | "Liquid Coatings" | "Primers & Bitumen" | "Sealants"
  | "Admixtures & Repair" | "Tile Adhesives & Grouts" | "Accessories";

export interface Product {
  slug: string; name: string; category: ProductCategory;
  tagline: string; description: string; size: string;
  specs: string[]; applications: string[]; method: string;
  featured?: boolean;
}

export interface Project { image: string; name: string; sector: string; city: string; area: string; scope: string }
export interface Testimonial { name: string; role: string; quote: string }
export interface Faq { q: string; a: string }
export interface Stat { value: number; suffix: string; label: string }
export interface ProcessStep { n: string; title: string; desc: string }
