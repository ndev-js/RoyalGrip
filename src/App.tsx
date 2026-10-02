import { useState } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Contact from "./components/sections/Contact";
import Faq from "./components/sections/Faq";
import Hero from "./components/sections/Hero";
import Marquee from "./components/sections/Marquee";
import Process from "./components/sections/Process";
import Products from "./components/sections/Products";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Stats from "./components/sections/Stats";
import Testimonials from "./components/sections/Testimonials";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import { TOKENS } from "./constants/theme";
import type { Theme } from "./types";

export default function App() {
  const [theme, setTheme] = useState<Theme>("dark");
  const t = TOKENS[theme];

  return (
    <div className={`min-h-screen ${t.page} ${t.body} antialiased transition-colors duration-500 selection:bg-orange-500 selection:text-white`}>
      <Header t={t} theme={theme} toggle={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <main>
        <Hero t={t} theme={theme} />
        <Stats t={t} />
        <Marquee t={t} />
        <Services t={t} />
        <Products t={t} />
        <Process t={t} />
        <Projects t={t} />
        <Testimonials t={t} />
        <Faq t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <WhatsAppButton />
    </div>
  );
}
