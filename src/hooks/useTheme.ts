import { useEffect, useMemo, useState } from "react";

type ThemeMode = "light" | "dark";

const STORAGE_KEY = "temple:theme";

export function useTheme() {
  const initial = useMemo<ThemeMode>(() => {
    // Visual direction is light-only for the temple site.
    // Keep theme state for future use without applying dark styles.
    return "light";
  }, []);

  const [theme, setTheme] = useState<ThemeMode>(initial);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return {
    theme,
    setTheme,
    toggle: () => setTheme("light")
  };
}


