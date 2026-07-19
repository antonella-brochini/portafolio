"use client";

import { ReactNode } from "react";
import styles from "./HeroReveal.module.css";

interface HeroRevealProps {
  children: ReactNode;
  className?: string;
}

/**
 * CSS-driven reveal — content stays in the first paint (better LCP / SEO)
 * instead of waiting for a client mount to become visible.
 */
export default function HeroReveal({ children, className }: HeroRevealProps) {
  return (
    <div className={`${styles.heroReveal} ${className || ""}`.trim()}>
      {children}
    </div>
  );
}
