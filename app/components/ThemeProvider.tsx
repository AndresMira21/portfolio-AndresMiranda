"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "dark" | "light";

type ThemeProviderContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeProviderContext = createContext<ThemeProviderContextValue | null>(
  null,
);

type ThemeProviderProps = {
  children: React.ReactNode;
};

const STORAGE_KEY = "portfolio-theme";

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    setTheme(storedTheme === "light" ? "light" : "dark");
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () =>
        setTheme((currentTheme) =>
          currentTheme === "dark" ? "light" : "dark",
        ),
    }),
    [theme],
  );

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function usePortfolioTheme() {
  const context = useContext(ThemeProviderContext);

  if (!context) {
    throw new Error("usePortfolioTheme must be used within ThemeProvider");
  }

  return context;
}
