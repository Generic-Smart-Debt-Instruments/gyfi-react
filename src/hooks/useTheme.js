import { useEffect, useState } from "react";

export default function useTheme() {
  const [themeState, setThemeState] = useState(false);

  useEffect(() => {
    const getTheme = localStorage.getItem("Theme");
    if (getTheme === "dark") {
      setThemeState(true);
    }
  }, []);

  useEffect(() => {
    if (themeState) {
      localStorage.setItem("Theme", "dark");
      document.body.parentElement.classList.remove("theme--light");
      document.body.parentElement.classList.add("theme--dark");
    } else {
      localStorage.setItem("Theme", "light");
      document.body.parentElement.classList.remove("theme--dark");
      document.body.parentElement.classList.add("theme--light");
    }
  }, [themeState]);

  return [themeState, () => setThemeState(!themeState)];
}
