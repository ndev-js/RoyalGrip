import { useState } from "react";
import type { Theme } from "../types";

/* Must match the inline script in index.html that applies the class before first paint */
const THEME_KEY = "royalgrip-theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof document !== "undefined" && document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* storage unavailable — theme just won't persist */
    }
    setTheme(next);
  };

  return { theme, toggle };
}
