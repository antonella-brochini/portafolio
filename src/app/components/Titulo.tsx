"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import styles from "./Titulo.module.css";

export default function AnimatedTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Evita hydration mismatch y el flash en claro
  if (!mounted) return null; // o un placeholder

  const isDark = resolvedTheme === "dark";

  return (
    <div className={`${styles.title} ${isDark ? styles.darkTitle : styles.lightTitle} ${className}`}>
      {isDark ? <span className={styles.gradientText}>{children}</span> : <span>{children}</span>}
    </div>
  );
}