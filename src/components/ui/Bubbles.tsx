import type { CSSProperties } from "react";

/* Fixed positions (not random) so the prerendered HTML matches what the browser renders.
   A negative delay starts each bubble part-way through its rise, so none begin at the bottom together. */
const BUBBLES = [
  { left: "5%", size: 14, dur: 15, delay: 2, sway: 18 },
  { left: "14%", size: 34, dur: 22, delay: 11, sway: -24 },
  { left: "26%", size: 10, dur: 13, delay: 6, sway: 14 },
  { left: "38%", size: 22, dur: 19, delay: 15, sway: -16 },
  { left: "52%", size: 12, dur: 14, delay: 4, sway: 22 },
  { left: "63%", size: 40, dur: 25, delay: 9, sway: -30 },
  { left: "74%", size: 16, dur: 17, delay: 13, sway: 20 },
  { left: "86%", size: 26, dur: 21, delay: 1, sway: -18 },
  { left: "94%", size: 11, dur: 12, delay: 7, sway: 12 },
];

/* Soft rising droplets: ambient motion that fits the waterproofing theme. Sits behind the content of a relative parent. */
const Bubbles = ({ className = "" }: { className?: string }) => (
  <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
    {BUBBLES.map((b) => (
      <span key={b.left}
        className="animate-rise absolute -bottom-12 rounded-full bg-linear-to-br from-white/25 to-white/5 ring-1 ring-white/20"
        style={{
          left: b.left, width: b.size, height: b.size,
          animationDuration: `${b.dur}s`, animationDelay: `-${b.delay}s`,
          "--sway": `${b.sway}px`,
        } as CSSProperties} />
    ))}
  </div>
);

export default Bubbles;
