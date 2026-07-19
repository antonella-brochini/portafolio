"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import styles from "./Titulo.module.css";

type TituloProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Semantic tag (e.g. h1 for SEO). Defaults to div. */
  as?: React.ElementType;
  /** Visual size; keep tag via `as` for SEO hierarchy. */
  size?: "default" | "sm";
};

/**
 * Theme-aware title. Always renders on the server (important for H1 SEO)
 * and upgrades styling after mount to avoid hydration flicker.
 */
export default function AnimatedTitle({
  children,
  className = "",
  id,
  as: Component = "div",
  size = "default",
}: TituloProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <Component
      id={id}
      className={`${styles.title} ${size === "sm" ? styles.titleSm : ""} ${isDark ? styles.darkTitle : styles.lightTitle} ${className}`}
    >
      {isDark ? (
        <span className={styles.gradientText}>{children}</span>
      ) : (
        <span>{children}</span>
      )}
    </Component>
  );
}
