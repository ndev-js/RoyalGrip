import Contact from "../components/sections/Contact";
import CtaBanner from "../components/sections/CtaBanner";
import Faq from "../components/sections/Faq";
import Hero from "../components/sections/Hero";
import HowItWorks from "../components/sections/HowItWorks";
import Process from "../components/sections/Process";
import Products from "../components/sections/Products";
import QuickQuote from "../components/sections/QuickQuote";
import Projects from "../components/sections/Projects";
import Sectors from "../components/sections/Sectors";
import ServiceAreas from "../components/sections/ServiceAreas";
import Services from "../components/sections/Services";
import Stats from "../components/sections/Stats";
import Testimonials from "../components/sections/Testimonials";
import Ticker from "../components/sections/Ticker";
import WhyUs from "../components/sections/WhyUs";

const Home = () => (
  <>
    <Hero />
    <QuickQuote />
    <Stats />
    <Ticker />
    <Services />
    <HowItWorks />
    <Sectors />
    <WhyUs />
    <Products />
    <Process />
    <Projects limit={3} />
    <Testimonials />
    <CtaBanner />
    <Faq />
    <ServiceAreas />
    <Contact />
  </>
);

export default Home;
