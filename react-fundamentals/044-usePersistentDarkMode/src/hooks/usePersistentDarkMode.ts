import { useEffect, useState } from "react";

const IS_DARK_MODE_KEY = "IS_DARK_MODE";

export function usePersistentDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const isDarkMode = localStorage.getItem(IS_DARK_MODE_KEY);

    return isDarkMode === "true";
  });

  useEffect(() => {
    localStorage.setItem(IS_DARK_MODE_KEY, JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return { isDarkMode, setIsDarkMode };
}
