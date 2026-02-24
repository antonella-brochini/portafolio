'use client';

import { ReactNode, useEffect, useState } from "react";
import styles from "./HeroReveal.module.css";

interface HeroRevealProps {
  children: ReactNode;
  className?: string;
}

export default function HeroReveal({ children, className }: HeroRevealProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`${styles.heroReveal} ${className || ""}`.trim()}
      data-visible={visible}
    >
      {children}
    </div>
  );
}
