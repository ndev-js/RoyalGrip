import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/* Appears once you are a screen or so down the page; sits above the phone action bar and the desktop WhatsApp button */
const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button type="button" aria-label="Back to top" inert={!show}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-[calc(4.5rem+env(safe-area-inset-bottom,0px))] right-4 z-40 grid h-11 w-11 place-items-center rounded-full bg-navy-950 text-white shadow-xl ring-1 ring-white/15 transition-[opacity,translate,background-color] duration-300 ease-out-soft hover:bg-orange-500 sm:bottom-24 sm:right-6 ${
        show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}>
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

export default BackToTop;
