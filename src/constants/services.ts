import { Building2, Droplets, Factory, Flame, Home, Waves } from "lucide-react";
import type { Service } from "../types";

export const SERVICES: Service[] = [
  {
    slug: "roof-waterproofing", icon: Home, image: "/images/roof.jpg", title: "Roof & Terrace Waterproofing",
    desc: "Torch-applied modified bituminous membrane that seals flat roofs against monsoon downpours and 50°C summers.",
    points: ["Single & double layer systems", "Slate or aluminium finish", "10-year written warranty"],
    intro: "Flat concrete roofs in Pakistan take a beating: weeks of standing monsoon water followed by months of intense sun that opens hairline cracks in the screed. We install torch-applied APP modified bituminous membrane as a fully bonded, seam-welded layer, so water has no path to the slab.",
    signs: [
      "Damp patches or peeling paint on the top-floor ceiling",
      "Water ponding on the roof for more than a day after rain",
      "Cracked, lifted or hollow-sounding screed and tiles",
      "Leaks around parapet walls, drains or water tank bases",
    ],
    approach: [
      "Remove loose screed, repair cracks and correct the slope towards drains.",
      "Form mortar fillets at parapet junctions and prime the whole slab.",
      "Torch-apply 4mm membrane with welded laps, dressed up the parapet wall.",
      "Flood test for 48 hours, then finish with screed, slate or aluminium facing.",
    ],
    products: ["torch-4000", "slateshield", "aluguard", "bitumen-primer"],
  },
  {
    slug: "basement-waterproofing", icon: Building2, image: "/images/basement.jpg", title: "Basement & Foundation Waterproofing",
    desc: "Tanking systems that hold back rising damp and hydrostatic pressure before the structure is backfilled.",
    points: ["Positive & negative side", "Protection board install", "Drainage layer detailing"],
    intro: "A basement sits in wet ground for its whole life, and once it is backfilled the outside face can never be reached again. We tank rafts, retaining walls and foundations with sheet membrane and protection board before backfill, and treat existing basements from the inside where the outside is no longer accessible.",
    signs: [
      "Damp or white salt deposits on basement walls",
      "Water seeping through the wall-to-floor joint",
      "Musty smell or mould in basement rooms",
      "Rising damp and flaking paint on ground-floor walls",
    ],
    approach: [
      "Lay membrane over the blinding concrete before the raft is cast.",
      "Continue the membrane up the retaining walls with fully sealed laps.",
      "Fix protection board so backfill cannot puncture the membrane.",
      "Detail construction joints, pipe entries and a damp proof course at plinth level.",
    ],
    products: ["torch-4000", "elastoseal-sa", "protection-board", "dpc-membrane"],
  },
  {
    slug: "water-tank-waterproofing", icon: Waves, image: "/images/tank.jpg", title: "Water Tank & Pool Waterproofing",
    desc: "Safe lining for underground tanks, overhead tanks and swimming pools with full leak testing.",
    points: ["48-hour flood test", "Potable-safe coatings", "Crack bridging up to 2mm"],
    intro: "A leaking tank wastes water every day and soaks the structure around it. We repair cracks and honeycombing, then line the tank with a flexible coating suitable for the water it holds, and prove the result with a fill test before handover.",
    signs: [
      "Water level dropping with all outlets closed",
      "Damp walls or ceilings next to or below the tank",
      "Visible cracks or honeycombed concrete inside the tank",
      "Wet soil or settlement around an underground tank",
    ],
    approach: [
      "Drain, clean and inspect the tank, marking cracks and weak concrete.",
      "Repair with polymer-modified mortar and form coves at the corners.",
      "Apply a flexible lining in multiple coats to walls and floor.",
      "Cure, fill and monitor the water level before returning the tank to service.",
    ],
    products: ["pu-shield", "flexcoat", "gripproof-wp", "gripbond-sbr"],
  },
  {
    slug: "bathroom-waterproofing", icon: Droplets, image: "/images/bathroom.jpg", title: "Bathroom & Wet Area Waterproofing",
    desc: "Thin-film liquid membranes applied beneath tiling to stop seepage reaching the room below.",
    points: ["Sealed floor traps and pipes", "Tile-over ready", "Room-by-room sequencing"],
    intro: "Bathroom seepage almost always starts at the floor trap, the pipe penetrations or the wall-to-floor corner. We apply a seamless liquid membrane under the tiles and seal every penetration, so water that gets past the grout still cannot reach the slab.",
    signs: [
      "Damp patch on the ceiling below a bathroom or kitchen",
      "Paint bubbling on the wall behind a shower",
      "Loose, hollow or discoloured floor tiles",
      "Persistent smell of damp despite ventilation",
    ],
    approach: [
      "Check falls to the floor trap and repair the screed where needed.",
      "Seal pipe penetrations, floor traps and corners with sealant and fabric.",
      "Apply liquid membrane to the floor and up the walls in two coats.",
      "Pond test, then fix tiles with adhesive and waterproof grout.",
    ],
    products: ["flexcoat", "griptile-bond", "griptile-grout-ep", "gripflex-pu"],
  },
  {
    slug: "industrial-waterproofing", icon: Factory, image: "/images/industrial.jpg", title: "Industrial & Commercial Waterproofing",
    desc: "Large-span factory roofs, warehouses and plazas sequenced around your production calendar.",
    points: ["Night & weekend crews", "100,000+ sq.ft capacity", "HSE-compliant teams"],
    intro: "On a factory or commercial building a roof leak stops production, damages stock and disrupts tenants. We plan large areas in sections, work nights and weekends where needed, and keep the building watertight at the end of every shift.",
    signs: [
      "Leaks over production lines, stock or electrical panels",
      "Failed expansion joints on large roof spans",
      "Ageing felt or membrane that is blistered and cracked",
      "High cooling loads from an unprotected roof slab",
    ],
    approach: [
      "Survey the full roof and agree a phased programme with your operations team.",
      "Strip or overlay the existing system section by section.",
      "Install membrane, expansion joint details and flashings to plant bases.",
      "Hand over each section with test records and a consolidated warranty.",
    ],
    products: ["torch-4000", "aluguard", "gripjoint-compound", "pu-shield"],
  },
  {
    slug: "leak-repair", icon: Flame, image: "/images/leak.jpg", title: "Leak Diagnosis & Repair",
    desc: "We trace the actual entry point instead of patching the stain, then repair with a compatible system.",
    points: ["Moisture mapping", "Free site survey", "Same-week mobilisation"],
    intro: "Water rarely enters where the stain appears; it travels along the slab and shows up metres away. We map moisture, test the suspects one by one and repair the real entry point with materials compatible with what is already on your roof.",
    signs: [
      "A leak that returns after every previous repair",
      "Stains far from any obvious source",
      "Leaks that appear only in wind-driven rain",
      "Seepage through walls, beams or column junctions",
    ],
    approach: [
      "Inspect inside and out and map moisture readings across the area.",
      "Water-test drains, parapets, joints and penetrations in isolation.",
      "Report the cause with photographs and a fixed-price repair scope.",
      "Repair, retest and document the result before closing the job.",
    ],
    products: ["rubbercoat", "gripflex-pu", "gripbond-sbr", "flexcoat"],
  },
];

export function serviceBySlug(slug: string | undefined) {
  return SERVICES.find((s) => s.slug === slug);
}
