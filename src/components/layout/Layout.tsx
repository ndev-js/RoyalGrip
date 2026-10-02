import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { canonicalFor, seoFor } from "../../routes";
import BackToTop from "../ui/BackToTop";
import WhatsAppButton from "../ui/WhatsAppButton";
import Footer from "./Footer";
import Header from "./Header";
import MobileActionBar from "./MobileActionBar";
import TopBar from "./TopBar";

function setAttr(selector: string, attr: string, value: string) {
  document.head.querySelector(selector)?.setAttribute(attr, value);
}

const Layout = () => {
  const { pathname, hash } = useLocation();

  /* Keep the <head> in step with client-side navigation; the prerender script writes the same tags into each static page */
  useEffect(() => {
    const { title, description, noindex } = seoFor(pathname);
    const url = canonicalFor(pathname);
    document.title = title;
    setAttr('meta[name="description"]', "content", description);
    setAttr('meta[name="robots"]', "content", noindex ? "noindex" : "index, follow");
    setAttr('link[rel="canonical"]', "href", url);
    setAttr('meta[property="og:title"]', "content", title);
    setAttr('meta[property="og:description"]', "content", description);
    setAttr('meta[property="og:url"]', "content", url);
    setAttr('meta[name="twitter:title"]', "content", title);
    setAttr('meta[name="twitter:description"]', "content", description);
  }, [pathname]);

  /* Feeds the pointer position to `.spotlight` cards; one delegated listener covers every card, and touch screens skip it */
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest<HTMLElement>(".spotlight");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  return (
    <div className="min-h-dvh bg-page pb-[calc(3.5rem+env(safe-area-inset-bottom,0px))] text-body antialiased sm:pb-0">
      <a href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-orange-500 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white">
        Skip to content
      </a>
      <TopBar />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <MobileActionBar />
    </div>
  );
};

export default Layout;
