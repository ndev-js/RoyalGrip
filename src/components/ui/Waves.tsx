/* One wave period is 1200 units wide and drawn twice, so sliding the strip by half its width loops seamlessly */
const WAVE = "M0 40C150 0 350 80 600 40S1050 80 1200 40S1550 80 1800 40S2250 80 2400 40V80H0Z";

/* Rolling water along the bottom edge of a section. Takes its colour from `className` (text-*), which should match the section below. */
const Waves = ({ className = "" }: { className?: string }) => (
  <div aria-hidden="true" className={`pointer-events-none absolute inset-x-0 bottom-0 h-10 overflow-hidden sm:h-16 ${className}`}>
    <svg viewBox="0 0 2400 80" preserveAspectRatio="none" className="animate-wave-slow absolute bottom-0 left-0 h-full w-[200%] opacity-40">
      <path d={WAVE} fill="currentColor" transform="translate(0 -14)" />
      <path d="M0 60H2400V80H0Z" fill="currentColor" />
    </svg>
    <svg viewBox="0 0 2400 80" preserveAspectRatio="none" className="animate-wave absolute bottom-0 left-0 h-[70%] w-[200%]">
      <path d={WAVE} fill="currentColor" />
    </svg>
  </div>
);

export default Waves;
