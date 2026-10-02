import { PRODUCTS, productBySlug } from "./constants/products";
import { SERVICES, serviceBySlug } from "./constants/services";

export const SITE_URL = "https://royalgrip.com.pk";
export const SITE_NAME = "RoyalGrip Waterproofing";

export const productPath = (slug: string) => `/products/${slug}/`;
export const servicePath = (slug: string) => `/services/${slug}/`;
export const enquiryPath = (subject: string) => `/contact/?product=${encodeURIComponent(subject)}`;

export interface SeoData { title: string; description: string; noindex?: boolean }

const STATIC_SEO: Record<string, SeoData> = {
  "/": {
    title: "RoyalGrip Waterproofing | Roof, Basement & Water Tank Waterproofing in Pakistan",
    description: "RoyalGrip installs and supplies modified bituminous membrane waterproofing for roofs, basements, water tanks and bathrooms across Pakistan. Free site survey in Lahore, Karachi and Islamabad. 10-year written warranty.",
  },
  "/about": {
    title: `About Us | Waterproofing Contractors & Suppliers in Pakistan | ${SITE_NAME}`,
    description: "RoyalGrip is a waterproofing contractor and supplier of bituminous membranes, coatings and construction chemicals. Learn how we survey, specify, install and warrant every system.",
  },
  "/services": {
    title: `Waterproofing Services in Pakistan | Roof, Basement, Tank & Bathroom | ${SITE_NAME}`,
    description: "Roof and terrace waterproofing, basement tanking, water tank lining, bathroom seepage treatment, industrial roofing and leak diagnosis by trained RoyalGrip crews across Pakistan.",
  },
  "/products": {
    title: `Waterproofing Products | Bitumen Membranes, Coatings & Construction Chemicals | ${SITE_NAME}`,
    description: "Torch-applied and self-adhesive bitumen membranes, DPC, liquid coatings, primers, joint sealants, concrete admixtures and tile adhesives. Supplied nationwide with technical support.",
  },
  "/projects": {
    title: `Waterproofing Projects in Lahore, Karachi & Islamabad | ${SITE_NAME}`,
    description: "Residential, commercial and industrial waterproofing projects completed by RoyalGrip across Pakistan, from villa roofs to 140,000 sq.ft factory re-roofing.",
  },
  "/contact": {
    title: `Contact Us | Book a Free Waterproofing Survey | ${SITE_NAME}`,
    description: "Call, WhatsApp or message RoyalGrip to book a free site survey and written quotation for roof, basement, tank or bathroom waterproofing anywhere in Pakistan.",
  },
};

const NOT_FOUND_SEO: SeoData = {
  title: `Page not found | ${SITE_NAME}`,
  description: "The page you are looking for does not exist.",
  noindex: true,
};

function stripTrailingSlash(pathname: string) {
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
}

export function canonicalFor(pathname: string) {
  const path = stripTrailingSlash(pathname);
  return `${SITE_URL}${path === "/" ? "/" : `${path}/`}`;
}

export function seoFor(pathname: string): SeoData {
  const path = stripTrailingSlash(pathname);
  if (STATIC_SEO[path]) return STATIC_SEO[path];

  const [section, slug, rest] = path.split("/").filter(Boolean);
  if (rest) return NOT_FOUND_SEO;

  if (section === "products") {
    const p = productBySlug(slug);
    if (p) return { title: `${p.name} | ${p.category} | ${SITE_NAME}`, description: `${p.tagline} ${p.description}` };
  }
  if (section === "services") {
    const s = serviceBySlug(slug);
    if (s) return { title: `${s.title} in Pakistan | ${SITE_NAME}`, description: `${s.desc} Free site survey and a 10-year written warranty from RoyalGrip.` };
  }
  return NOT_FOUND_SEO;
}

/* Every page that gets prerendered to static HTML and listed in the sitemap */
export const ALL_PATHS = [
  "/", "/about/", "/services/", "/products/", "/projects/", "/contact/",
  ...SERVICES.map((s) => servicePath(s.slug)),
  ...PRODUCTS.map((p) => productPath(p.slug)),
];
