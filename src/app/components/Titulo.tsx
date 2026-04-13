"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import styles from "./Titulo.module.css";

type TituloProps = {
  children: React.ReactNode;
  className?: string;
  /** Etiqueta semántica (p. ej. h1 en heroes para SEO). Por defecto div. */
  as?: React.ElementType;
};

export default function AnimatedTitle({
  children,
  className = "",
  as: Component = "div",
}: TituloProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Evita hydration mismatch y el flash en claro
  if (!mounted) return null; // o un placeholder

  const isDark = resolvedTheme === "dark";

  return (
    <Component
      className={`${styles.title} ${isDark ? styles.darkTitle : styles.lightTitle} ${className}`}
    >
      {isDark ? <span className={styles.gradientText}>{children}</span> : <span>{children}</span>}
    </Component>
  );
}