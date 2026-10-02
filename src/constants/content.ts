import {
  Building2, ClipboardList, Droplets, Eye, Factory, Handshake, HardHat, Home, Landmark,
  ShieldCheck, Target, ThermometerSun, Truck,
} from "lucide-react";
import type {
  Faq, Feature, NavItem, ProcessStep, Project, Sector, Stat, Testimonial,
} from "../types";

export const PHONE_DISPLAY = "+92 300 0000000";
export const PHONE_URL = "tel:+923000000000";
export const EMAIL = "info@royalgrip.com.pk";
export const WHATSAPP_URL = "https://wa.me/923000000000";
export const ADDRESS = "Lahore, Pakistan";
export const HOURS = "Mon – Sat, 9am – 6pm";

export const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about/" },
  { label: "Services", to: "/services/" },
  { label: "Products", to: "/products/" },
  { label: "Projects", to: "/projects/" },
  { label: "Contact", to: "/contact/" },
];

/* Scrolling strip under the hero */
export const CAPABILITIES = [
  "Roof waterproofing", "Basement tanking", "Water tank lining", "Bathroom seepage",
  "Torch-applied membrane", "Self-adhesive membrane", "Damp proof course", "Expansion joints",
  "Liquid coatings", "Concrete admixtures", "Leak diagnosis", "Tile adhesives & grouts",
];

export const SECTORS: Sector[] = [
  {
    icon: Home, image: "/images/residential.jpg", title: "Residential",
    desc: "Homes, villas and apartment blocks protected from roof leakage and seepage.",
    items: ["Roofs & terraces", "Bathrooms & kitchens", "DPC & foundations", "Overhead water tanks"],
  },
  {
    icon: Building2, image: "/images/commercial.jpg", title: "Commercial",
    desc: "Plazas, offices, hospitals and hotels kept dry without closing the building.",
    items: ["Basements & parking", "Podium decks", "Expansion joints", "Lift pits & plant rooms"],
  },
  {
    icon: Factory, image: "/images/factory.jpg", title: "Industrial",
    desc: "Large-span roofs and process areas sequenced around your production.",
    items: ["Factory roofs", "Warehouses", "Cold storage", "Effluent & water tanks"],
  },
  {
    icon: Landmark, image: "/images/infrastructure.jpg", title: "Infrastructure",
    desc: "Heavy-duty membrane systems for structures built to last decades.",
    items: ["Bridge decks", "Underpasses & tunnels", "Reservoirs", "Retaining walls"],
  },
];

export const WHY_US: Feature[] = [
  { icon: ShieldCheck, title: "10-year written warranty", desc: "Material and workmanship covered on paper for every full-system installation." },
  { icon: ClipboardList, title: "Free survey, itemised quote", desc: "Every layer, quantity and rate listed up front. No surprise additions later." },
  { icon: HardHat, title: "Our own trained crews", desc: "Certified torch applicators working under supervision on every site." },
  { icon: Droplets, title: "Flood tested before handover", desc: "We pond the surface and document the result before you sign off." },
  { icon: ThermometerSun, title: "Built for Pakistan's climate", desc: "Systems specified for monsoon downpours and 50°C summer roof temperatures." },
  { icon: Truck, title: "Supply and installation", desc: "Membranes, primers and chemicals dispatched nationwide, with or without our crew." },
];

export const VALUES: Feature[] = [
  { icon: Target, title: "Our mission", desc: "To make leaking roofs and damp walls a solved problem for every building we touch, by fixing the cause instead of the symptom." },
  { icon: Eye, title: "Our vision", desc: "To be the waterproofing name contractors, consultants and homeowners across Pakistan specify without a second quote." },
  { icon: Handshake, title: "How we behave", desc: "Written scopes, honest advice on what you do and do not need, and a crew that turns up on the agreed day." },
];

export const CITIES = [
  "Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad", "Multan",
  "Peshawar", "Quetta", "Sialkot", "Gujranwala", "Hyderabad", "Bahawalpur",
];

export const PROCESS_STEPS: ProcessStep[] = [
  { n: "01", title: "Site survey", desc: "We walk the roof or basement, map moisture, photograph every junction and identify the true entry point." },
  { n: "02", title: "Written scope", desc: "An itemised quotation listing each layer, quantity and rate. No allowances that quietly expand later." },
  { n: "03", title: "Surface preparation", desc: "Cleaning, crack repair, slope correction and fillet coving — the stage most failures trace back to." },
  { n: "04", title: "System application", desc: "Primer, membrane and detailing installed by trained torch applicators under supervision." },
  { n: "05", title: "Testing & handover", desc: "Flood test, photo record, warranty certificate and a short maintenance brief for your team." },
];

export const PROJECTS: Project[] = [
  { image: "/images/city.jpg", name: "Gulberg Heights", sector: "Residential", city: "Lahore", area: "82,000 sq.ft", scope: "Roof terraces and podium deck with 4mm torch-applied membrane and slate finish." },
  { image: "/images/plant.jpg", name: "Korangi Packaging Plant", sector: "Industrial", city: "Karachi", area: "140,000 sq.ft", scope: "Phased re-roofing with aluminium-faced membrane, carried out on night shifts." },
  { image: "/images/basement-room.jpg", name: "Blue Area Office Block", sector: "Commercial", city: "Islamabad", area: "36,000 sq.ft", scope: "Basement raft and retaining wall tanking with protection board before backfill." },
  { image: "/images/villa.jpg", name: "DHA Phase 6 Villas", sector: "Residential", city: "Lahore", area: "24 units", scope: "Roof membrane, bathroom liquid membrane and plinth damp proof course." },
  { image: "/images/commercial.jpg", name: "Civil Hospital Annexe", sector: "Commercial", city: "Multan", area: "51,000 sq.ft", scope: "Terrace waterproofing and lining of underground and overhead water tanks." },
  { image: "/images/logistics.jpg", name: "Ring Road Logistics Park", sector: "Industrial", city: "Peshawar", area: "96,000 sq.ft", scope: "Warehouse deck membrane with expansion joint sealing across the full span." },
];

export const TESTIMONIALS: Testimonial[] = [
  { name: "Imran Sheikh", role: "Project Director, Gulberg Heights", quote: "Three contractors patched the same terrace over two years. RoyalGrip surveyed it, found the parapet joint, and it has stayed dry through two monsoons." },
  { name: "Ayesha Raza", role: "Facilities Head, Korangi Plant", quote: "They worked night shifts so our line never stopped. Flood test reports and warranty paperwork arrived without us chasing anyone." },
  { name: "Bilal Ahmed", role: "Homeowner, DHA Phase 6", quote: "Clear quotation, no surprise additions, and the crew left the roof cleaner than they found it. The bathroom seepage has not come back." },
];

export const FAQS: Faq[] = [
  { q: "How long does a modified bituminous membrane last?", a: "A correctly installed torch-on system with proper surface protection typically performs for 12 to 20 years. We issue a written 10-year warranty covering both material and workmanship on full-system installations." },
  { q: "What is the difference between APP and SBS membranes?", a: "APP (plastomeric) membranes are torch-applied and handle high roof temperatures well, which suits exposed roofs in Pakistan. SBS (elastomeric) membranes are more flexible and are available as self-adhesive sheets, which suits basements, foundations and places where a torch cannot be used." },
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
