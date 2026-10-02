import type { Theme, Tokens } from "../types";

/* Design tokens — palette taken from the logo */
export const TOKENS: Record<Theme, Tokens> = {
  dark: {
    page: "bg-zinc-950", surface: "bg-zinc-900", raised: "bg-zinc-900/60",
    border: "border-zinc-800", heading: "text-white", body: "text-zinc-300",
    muted: "text-zinc-500", inputBg: "bg-zinc-900",
  },
  light: {
    page: "bg-white", surface: "bg-zinc-50", raised: "bg-white",
    border: "border-zinc-200", heading: "text-zinc-900", body: "text-zinc-600",
    muted: "text-zinc-500", inputBg: "bg-white",
  },
};
