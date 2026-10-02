import type { ElementType } from "react";

export type Theme = "dark" | "light";

export interface Tokens {
  page: string; surface: string; raised: string; border: string;
  heading: string; body: string; muted: string; inputBg: string;
}

export interface NavItem { label: string; href: string }

export interface Service {
  icon: ElementType; title: string; desc: string; points: string[];
}

export interface Product {
  id: string; name: string; category: "Membrane" | "Coating" | "Chemical";
  tagline: string; size: string; specs: string[];
}

export interface Project { name: string; sector: string; city: string; area: string }
export interface Testimonial { name: string; role: string; quote: string }
export interface Faq { q: string; a: string }
export interface Stat { value: number; suffix: string; label: string }
export interface ProcessStep { n: string; title: string; desc: string }
