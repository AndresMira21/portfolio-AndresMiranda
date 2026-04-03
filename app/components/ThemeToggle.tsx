"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { usePortfolioTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = usePortfolioTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
      title={isDark ? "Activar modo claro" : "Activar modo oscuro"}
    >
      <span className="sr-only">
        {isDark ? "Activar modo claro" : "Activar modo oscuro"}
      </span>
      {isDark ? (
        <SunMedium className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
      ) : (
        <MoonStar className="h-5 w-5 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
