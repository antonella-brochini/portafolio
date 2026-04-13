"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./ThemeToggle.module.css";
import { useTranslation } from "../../hooks/useTranslation";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className={styles.themeToggle} aria-label={t.theme.toggleAria}>
        <FaMoon />
      </button>
    );
  }

  return (
    <button
      className={styles.themeToggle}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={t.theme.toggleAria}
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}
