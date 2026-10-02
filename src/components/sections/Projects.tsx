import { MapPin, Ruler } from "lucide-react";
import { PROJECTS } from "../../constants/content";
import ButtonLink from "../ui/ButtonLink";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

/* `limit` shows a teaser with a link to the full Projects page */
const Projects = ({ limit }: { limit?: number }) => {
  const list = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading label="Recent projects" title="Sites we have kept dry." />
          {limit && (
            <ButtonLink to="/projects/" variant="outline" arrow className="w-fit shrink-0">View all projects</ButtonLink>
          )}
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 90} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-raised shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy-950/10">
                <div className="relative h-60 overflow-hidden">
                  <img src={p.image} alt="" loading="lazy" width={1000} height={667}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-950/80 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-orange-500 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-lg">
                    {p.sector}
                  </span>
                  <div className="absolute inset-x-5 bottom-4 flex items-center justify-between text-xs font-bold text-white">
                    <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-orange-400" /> {p.city}</span>
                    <span className="inline-flex items-center gap-1.5"><Ruler className="h-4 w-4 text-orange-400" /> {p.area}</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-heading">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{p.scope}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
