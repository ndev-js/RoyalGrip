import CtaBanner from "../components/sections/CtaBanner";
import ProjectsGrid from "../components/sections/Projects";
import Stats from "../components/sections/Stats";
import Testimonials from "../components/sections/Testimonials";
import PageHero from "../components/ui/PageHero";

const Projects = () => (
  <>
    <PageHero crumbs={[{ label: "Projects" }]}
      title="Waterproofing projects across Pakistan."
      lead="Homes, towers, hospitals and factories in Lahore, Karachi, Islamabad and beyond, each handed over with a flood test record and a written warranty." />
    <Stats />
    <ProjectsGrid />
    <Testimonials />
    <CtaBanner title={<>Your site could be next. Start with a free survey.</>} />
  </>
);

export default Projects;
