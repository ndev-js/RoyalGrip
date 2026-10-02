import { MapPin, Ruler } from "lucide-react";
import { PROJECTS } from "../../constants/content";
import type { Project } from "../../types";
import ButtonLink from "../ui/ButtonLink";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { SWIPE_ITEM, SWIPE_ROW } from "../ui/swipeRow";

const GRID = "sm:grid-cols-2 sm:gap-7 lg:grid-cols-3";

const ProjectCard = ({ project: p }: { project: Project }) => (
  <article className="spotlight group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-raised shadow-card transition-all duration-300 ease-out-soft hover:-translate-y-1 hover:shadow-lift">
    <div className="relative h-52 overflow-hidden sm:h-60">
      <img src={p.image} alt="" loading="lazy" decoding="async" width={1000} height={667}
        className="h-full w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105" />
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
);

/* `limit` shows a teaser with a link to the full Projects page */
const Projects = ({ limit }: { limit?: number }) => (
  <section className="bg-surface py-16 sm:py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading label="Recent projects" title="Sites we have kept dry." />
        {limit && (
          <ButtonLink to="/projects/" variant="outline" arrow className="w-fit shrink-0">View all projects</ButtonLink>
        )}
      </div>

      {limit ? (
        /* The teaser swipes on phones, so it reveals as one block */
        <Reveal className="mt-10 sm:mt-12">
          <ul className={`${SWIPE_ROW} ${GRID}`}>
            {PROJECTS.slice(0, limit).map((p) => (
              <li key={p.name} className={SWIPE_ITEM}><ProjectCard project={p} /></li>
            ))}
          </ul>
        </Reveal>
      ) : (
        <div className={`mt-10 grid gap-6 sm:mt-12 ${GRID}`}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 90} className="h-full">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  </section>
);

export default Projects;
