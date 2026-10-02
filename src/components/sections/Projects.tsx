import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../../constants/content";
import type { Tokens } from "../../types";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";

const Projects = ({ t }: { t: Tokens }) => (
  <section id="projects" className={`py-20 lg:py-28 ${t.page}`}>
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <Reveal>
        <div className="max-w-2xl">
          <SectionLabel>Recent work</SectionLabel>
          <h2 className={`mt-4 text-3xl font-black tracking-tight sm:text-4xl ${t.heading}`}>
            Sites we have kept dry.
          </h2>
        </div>
      </Reveal>

      <div className={`mt-12 overflow-hidden rounded-2xl border ${t.border}`}>
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={i * 60}>
            <a href="#contact"
              className={`group grid grid-cols-2 items-center gap-4 px-6 py-6 md:grid-cols-4 ${i !== 0 ? `border-t ${t.border}` : ""} ${t.surface} transition-colors duration-300 hover:bg-orange-500`}>
              <span className={`text-base font-bold transition-colors ${t.heading} group-hover:text-white`}>{p.name}</span>
              <span className={`text-sm transition-colors ${t.body} group-hover:text-orange-50`}>{p.sector}</span>
              <span className={`hidden text-sm transition-colors md:inline ${t.muted} group-hover:text-orange-50`}>{p.city}</span>
              <span className="hidden items-center justify-end gap-2 text-sm font-semibold text-orange-500 transition-colors group-hover:text-white md:flex">
                {p.area} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
