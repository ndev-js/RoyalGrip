import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { canonicalFor } from "../../routes";
import JsonLd from "./JsonLd";

export interface Crumb { label: string; to?: string }

interface Props { crumbs: Crumb[]; title: ReactNode; lead?: ReactNode; image?: string; children?: ReactNode }

/* Banner for inner pages: photo backdrop, breadcrumb trail, h1 and intro */
const PageHero = ({ crumbs, title, lead, image = "/images/concrete.jpg", children }: Props) => {
  const trail: Crumb[] = [{ label: "Home", to: "/" }, ...crumbs];

  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      <img src={image} alt="" width={1600} height={1067}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-navy-950 via-navy-950/90 to-navy-950/40" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1 bg-linear-to-r from-orange-500 via-amber-400 to-orange-500" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-slate-300">
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

        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {lead && <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{lead}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
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
