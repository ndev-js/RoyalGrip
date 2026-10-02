const CX = 190;
const HALF_W = 150;
const HALF_H = 75;
const LABEL_X = 372;

/* Bottom-up: this is both the drawing order (upper layers overlap lower ones) and the order they arrive in */
const LAYERS = [
  { y: 268, depth: 26, top: "#a1a1aa", left: "#71717a", right: "#52525b", name: "Concrete slab", note: "Cleaned, repaired, sloped" },
  { y: 212, depth: 8, top: "#3f3f46", left: "#27272a", right: "#18181b", name: "Bitumen primer", note: "Bonds membrane to slab" },
  { y: 160, depth: 14, top: "#f97316", left: "#c2410c", right: "#9a3412", name: "Torch-on membrane", note: "The waterproof layer" },
  { y: 104, depth: 10, top: "#e4e4e7", left: "#a1a1aa", right: "#71717a", name: "Protective finish", note: "Slate, aluminium or screed" },
];

const FIRST_LAYER_MS = 500;
const LAYER_GAP_MS = 550;
const TOP = LAYERS[LAYERS.length - 1];

/*
 * The banner's signature animation: the roof waterproofing system assembles itself layer by layer,
 * then a water drop lands on the finished surface and runs off instead of soaking in.
 * The motion lives in index.css (.roof-layer, .roof-label, .roof-drop, .roof-ripple).
 */
const RoofBuild = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 560 400" className={className} role="img"
    aria-label="How a dry roof is built: concrete slab, bitumen primer, torch-on membrane and protective finish, with water running off the top">
    {LAYERS.map((l, i) => {
      const delay = FIRST_LAYER_MS + i * LAYER_GAP_MS;
      return (
        <g key={l.name}>
          <g className="roof-layer" style={{ animationDelay: `${delay}ms` }}>
            <polygon fill={l.left}
              points={`${CX - HALF_W},${l.y} ${CX},${l.y + HALF_H} ${CX},${l.y + HALF_H + l.depth} ${CX - HALF_W},${l.y + l.depth}`} />
            <polygon fill={l.right}
              points={`${CX + HALF_W},${l.y} ${CX},${l.y + HALF_H} ${CX},${l.y + HALF_H + l.depth} ${CX + HALF_W},${l.y + l.depth}`} />
            <polygon fill={l.top}
              points={`${CX},${l.y - HALF_H} ${CX + HALF_W},${l.y} ${CX},${l.y + HALF_H} ${CX - HALF_W},${l.y}`} />
          </g>

          {/* The label follows its layer in, joined to the layer's right corner by a short leader line */}
          <g className="roof-label" style={{ animationDelay: `${delay + 350}ms` }}>
            <line x1={CX + HALF_W + 6} y1={l.y + l.depth / 2} x2={LABEL_X - 10} y2={l.y + l.depth / 2}
              stroke="#fb923c" strokeWidth="1.5" strokeDasharray="3 4" />
            <circle cx={CX + HALF_W + 6} cy={l.y + l.depth / 2} r="3" fill="#fb923c" />
            <text x={LABEL_X} y={l.y + l.depth / 2 - 2} fill="#fff" fontSize="15" fontWeight="800">{l.name}</text>
            <text x={LABEL_X} y={l.y + l.depth / 2 + 15} fill="#cbd5e1" fontSize="11.5" fontWeight="500">{l.note}</text>
          </g>
        </g>
      );
    })}

    {/* Ripple where the drop lands, flattened to lie on the sloping top face */}
    <ellipse className="roof-ripple" cx={CX} cy={TOP.y} rx="46" ry="23" fill="none" stroke="#7dd3fc" strokeWidth="2" />

    {/* Drawn around the origin; the keyframes carry it from above the roof, across the top face and off the edge */}
    <g className="roof-drop">
      <path d="M0-13C0-13 8-3 8 3A8 8 0 0 1-8 3C-8-3 0-13 0-13Z" fill="#7dd3fc" />
      <ellipse cx="-3" cy="2" rx="2" ry="3.2" fill="#fff" opacity="0.7" />
    </g>
  </svg>
);

export default RoofBuild;
