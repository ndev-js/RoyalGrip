import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { canonicalFor } from "../../routes";
import JsonLd from "./JsonLd";
import Waves from "./Waves";

export interface Crumb { label: string; to?: string }

interface Props {
  crumbs: Crumb[]; title: ReactNode; lead?: ReactNode; image?: string; children?: ReactNode;
  /* Text colour class matching the background of whatever section follows the banner */
  wave?: string;
}

/* Banner for inner pages: photo backdrop, breadcrumb trail, h1 and intro */
const PageHero = ({ crumbs, title, lead, image = "/images/concrete.jpg", children, wave = "text-page" }: Props) => {
  const trail: Crumb[] = [{ label: "Home", to: "/" }, ...crumbs];

  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      <img src={image} alt="" width={1600} height={1067} decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-navy-950 via-navy-950/90 to-navy-950/40" />
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <Waves className={`-z-10 ${wave}`} />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-16 lg:pb-36 lg:pt-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs font-semibold text-slate-300">
            {trail.map((c, i) => (
              <li key={c.label} className="inline-flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
                {c.to
                  ? <Link to={c.to} className="transition-colors hover:text-orange-400">{c.label}</Link>
                  : <span className="text-orange-400" aria-current="page">{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="animate-fade mt-5 max-w-3xl text-display font-extrabold tracking-tight text-white">
          {title}
        </h1>
        {lead && <p className="animate-fade mt-5 max-w-2xl text-base leading-relaxed text-slate-300 [animation-delay:100ms] sm:text-lg">{lead}</p>}
        {children && <div className="animate-fade mt-8 flex flex-col gap-3 [animation-delay:200ms] sm:flex-row sm:flex-wrap">{children}</div>}
      </div>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: trail.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.label,
          ...(c.to ? { item: canonicalFor(c.to) } : {}),
        })),
      }} />
    </section>
  );
};

export default PageHero;
