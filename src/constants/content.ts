import { Building2, Droplets, Factory, Flame, Home, Waves } from "lucide-react";
import type { Faq, NavItem, ProcessStep, Product, Project, Service, Stat, Testimonial } from "../types";

export const WHATSAPP_URL = "https://wa.me/923000000000";

export const NAV: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES: Service[] = [
  {
    icon: Home, title: "Roof & Terrace Waterproofing",
    desc: "Torch-applied modified bituminous membrane that seals flat roofs against monsoon downpours and 50°C summers.",
    points: ["Single & double layer systems", "Slate or aluminium finish", "10-year written warranty"],
  },
  {
    icon: Building2, title: "Basement & Foundation",
    desc: "Tanking systems that hold back rising damp and hydrostatic pressure before the structure is backfilled.",
    points: ["Positive & negative side", "Protection board install", "Drainage layer detailing"],
  },
  {
    icon: Waves, title: "Water Tanks & Pools",
    desc: "Safe lining for underground tanks, overhead tanks and swimming pools with full leak testing.",
    points: ["48-hour flood test", "Potable-safe coatings", "Crack bridging up to 2mm"],
  },
  {
    icon: Droplets, title: "Bathroom & Wet Areas",
    desc: "Thin-film liquid membranes applied beneath tiling to stop seepage reaching the room below.",
    points: ["No slab demolition", "Dries in 6 hours", "Tile-over ready"],
  },
  {
    icon: Factory, title: "Industrial & Commercial",
    desc: "Large-span factory roofs, warehouses and plazas sequenced around your production calendar.",
    points: ["Night & weekend crews", "100,000+ sq.ft capacity", "HSE-compliant teams"],
  },
  {
    icon: Flame, title: "Leak Diagnosis & Repair",
    desc: "We trace the actual entry point instead of patching the stain, then repair with a compatible system.",
    points: ["Moisture mapping", "Free site survey", "Same-week mobilisation"],
  },
];

export const PRODUCT_CATEGORIES = ["All", "Membrane", "Coating", "Chemical"] as const;

export const PRODUCTS: Product[] = [
  { id: "rg-torch-4", name: "RoyalGrip Torch 4000", category: "Membrane", tagline: "APP-modified torch-on membrane for roofs, decks and foundations.", size: "3mm / 4mm / 5mm", specs: ["Polyester reinforced core", "Softening point 150°C", "Elongation ≥ 45%"] },
  { id: "rg-slate", name: "RoyalGrip SlateShield", category: "Membrane", tagline: "Mineral-granule surface for permanently exposed rooftops.", size: "4mm roll", specs: ["UV-stable slate finish", "No screed required", "Charcoal & terracotta"] },
  { id: "rg-alu", name: "RoyalGrip AluGuard", category: "Membrane", tagline: "Aluminium-faced membrane that reflects heat off the slab.", size: "4mm roll", specs: ["Reflects ~70% solar gain", "Lowers roof temp 8–12°C", "Embossed foil face"] },
  { id: "rg-root", name: "RoyalGrip RootBlock", category: "Membrane", tagline: "Anti-root membrane for planters, lawns and green roofs.", size: "4mm roll", specs: ["Chemical root barrier", "Planter-box detailing", "Garden-deck tested"] },
  { id: "rg-primer", name: "RoyalGrip Bitumen Primer", category: "Chemical", tagline: "Fast-drying primer that locks the membrane onto concrete.", size: "18L / 200L", specs: ["Touch-dry in 60 min", "Coverage 5–6 m²/L", "Low-odour formulation"] },
  { id: "rg-liquid", name: "RoyalGrip FlexCoat", category: "Coating", tagline: "Elastomeric liquid membrane for wet areas and awkward geometry.", size: "5kg / 20kg", specs: ["Brush, roller or spray", "Bridges 2mm cracks", "Tile-over compatible"] },
  { id: "rg-plast", name: "GripPlast SP", category: "Chemical", tagline: "High-range superplasticiser for dense, low-permeability concrete.", size: "20L / 200L", specs: ["Up to 25% water cut", "Chloride free", "ASTM C494 Type F"] },
  { id: "rg-cure", name: "GripCure W", category: "Coating", tagline: "Curing compound that holds moisture in fresh slabs and pavements.", size: "20L / 200L", specs: ["Retains ≥ 90% moisture", "Single-coat spray", "Reduces plastic cracking"] },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { n: "01", title: "Site survey", desc: "We walk the roof or basement, map moisture, photograph every junction and identify the true entry point." },
  { n: "02", title: "Written scope", desc: "An itemised quotation listing each layer, quantity and rate. No allowances that quietly expand later." },
  { n: "03", title: "Surface preparation", desc: "Cleaning, crack repair, slope correction and fillet coving — the stage most failures trace back to." },
  { n: "04", title: "System application", desc: "Primer, membrane and detailing installed by trained torch applicators under supervision." },
  { n: "05", title: "Testing & handover", desc: "Flood test, photo record, warranty certificate and a short maintenance brief for your team." },
];

export const PROJECTS: Project[] = [
  { name: "Gulberg Heights", sector: "Residential Tower", city: "Lahore", area: "82,000 sq.ft" },
  { name: "Korangi Packaging Plant", sector: "Industrial Roof", city: "Karachi", area: "140,000 sq.ft" },
  { name: "Blue Area Office Block", sector: "Basement Tanking", city: "Islamabad", area: "36,000 sq.ft" },
  { name: "DHA Phase 6 Villas", sector: "Roof & Wet Areas", city: "Lahore", area: "24 units" },
  { name: "Civil Hospital Annexe", sector: "Terrace & Tanks", city: "Multan", area: "51,000 sq.ft" },
  { name: "Ring Road Logistics Park", sector: "Warehouse Deck", city: "Peshawar", area: "96,000 sq.ft" },
];

export const TESTIMONIALS: Testimonial[] = [
  { name: "Imran Sheikh", role: "Project Director, Gulberg Heights", quote: "Three contractors patched the same terrace over two years. RoyalGrip surveyed it, found the parapet joint, and it has stayed dry through two monsoons." },
  { name: "Ayesha Raza", role: "Facilities Head, Korangi Plant", quote: "They worked night shifts so our line never stopped. Flood test reports and warranty paperwork arrived without us chasing anyone." },
  { name: "Bilal Ahmed", role: "Homeowner, DHA Phase 6", quote: "Clear quotation, no surprise additions, and the crew left the roof cleaner than they found it. The bathroom seepage has not come back." },
];

export const FAQS: Faq[] = [
  { q: "How long does a modified bituminous membrane last?", a: "A correctly installed torch-on system with proper surface protection typically performs for 12 to 20 years. We issue a written 10-year warranty covering both material and workmanship on full-system installations." },
  { q: "Do you work outside Lahore?", a: "Yes. Our crews mobilise across Punjab, Sindh, KPK and Balochistan, and material is dispatched nationwide. For sites beyond 200km we quote travel and accommodation transparently inside the proposal." },
  { q: "Can you waterproof an occupied building?", a: "Most of our work happens on live sites. Roof and terrace applications rarely require vacating. For wet areas we sequence room by room so the family or staff always keep a working bathroom." },
  { q: "What does a survey cost?", a: "Site survey and written quotation are free within the city limits of Lahore, Karachi and Islamabad. The survey includes moisture mapping, photographs, and a scope that itemises every layer we intend to install." },
  { q: "Do you supply material without installation?", a: "Yes. Contractors and dealers can buy membrane rolls, primers and admixtures directly from our depot with trade pricing, technical data sheets and application guidance for their own crews." },
];

export const STATS: Stat[] = [
  { value: 18, suffix: "+", label: "Years in the field" },
  { value: 640, suffix: "+", label: "Projects completed" },
  { value: 12, suffix: "M", label: "Sq.ft membrane laid" },
  { value: 10, suffix: "yr", label: "Written warranty" },
];

export const CLIENTS = ["Habib Group", "Pak Cement", "Meezan Builders", "Descon", "Ittefaq Steel", "Nishat Mills", "Crescent Textiles", "Fatima Group"];
