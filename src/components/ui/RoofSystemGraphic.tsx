const CX = 200;
const HALF_W = 150;
const HALF_H = 75;

/* Drawn bottom-up so upper layers overlap lower ones */
const LAYERS = [
  { y: 300, depth: 26, top: "#a1a1aa", left: "#71717a", right: "#52525b" },
  { y: 235, depth: 8, top: "#3f3f46", left: "#27272a", right: "#18181b" },
  { y: 170, depth: 14, top: "#f97316", left: "#c2410c", right: "#9a3412" },
  { y: 105, depth: 10, top: "#e4e4e7", left: "#a1a1aa", right: "#71717a" },
];

const RoofSystemGraphic = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 400 410" className={className} role="img"
    aria-label="Exploded diagram of a torch-on roof waterproofing system: concrete slab, bitumen primer, bituminous membrane and protective finish">
    {LAYERS.map((l, i) => (
      <g key={l.y} className="animate-float" style={{ animationDelay: `${i * 0.35}s` }}>
        <polygon fill={l.left}
          points={`${CX - HALF_W},${l.y} ${CX},${l.y + HALF_H} ${CX},${l.y + HALF_H + l.depth} ${CX - HALF_W},${l.y + l.depth}`} />
        <polygon fill={l.right}
          points={`${CX + HALF_W},${l.y} ${CX},${l.y + HALF_H} ${CX},${l.y + HALF_H + l.depth} ${CX + HALF_W},${l.y + l.depth}`} />
        <polygon fill={l.top}
          points={`${CX},${l.y - HALF_H} ${CX + HALF_W},${l.y} ${CX},${l.y + HALF_H} ${CX - HALF_W},${l.y}`} />
      </g>
    ))}
  </svg>
);

export default RoofSystemGraphic;
