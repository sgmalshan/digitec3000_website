"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const isLocalStorageAvailable =
  typeof window !== "undefined" && window.localStorage;
const defaultTheme = "dark";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const storedTheme = isLocalStorageAvailable
      ? localStorage.getItem("theme")
      : defaultTheme;
    return (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <Button
      variant="link"
      size="icon"
      onClick={() => setDarkMode((prev) => !prev)}
      className="hover:cursor-pointer"
      aria-label="Toggle theme"
    >
      {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}
