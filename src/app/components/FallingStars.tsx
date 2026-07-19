"use client";

import { useEffect, useState } from "react";
import styles from "./FallingStars.module.css";

interface Star {
  id: number;
  right: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function FallingStars() {
  const [stars, setStars] = useState<Star[]>([]);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const initialStars = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      right: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 4,
      size: 1 + Math.random() * 2.5,
      opacity: 0.4 + Math.random() * 0.6,
    }));
    setStars(initialStars);

    const interval = setInterval(() => {
      setStars((prevStars) => {
        const newStar: Star = {
          id: Math.random(),
          right: Math.random() * 100,
          delay: 0,
          duration: 3 + Math.random() * 4,
          size: 1 + Math.random() * 2.5,
          opacity: 0.4 + Math.random() * 0.6,
        };
        return prevStars.length > 35
          ? [...prevStars.slice(1), newStar]
          : [...prevStars, newStar];
      });
    }, 900);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => {
      if (mq.matches) {
        clearInterval(interval);
        setEnabled(false);
        setStars([]);
      }
    };
    mq.addEventListener("change", onChange);

    return () => {
      clearInterval(interval);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className={styles.fallingStarsContainer} aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className={styles.fallingStar}
          style={
            {
              right: `${star.right}%`,
              "--delay": `${star.delay}s`,
              "--duration": `${star.duration}s`,
              "--size": `${star.size}px`,
              "--opacity": star.opacity,
            } as React.CSSProperties & Record<string, string | number>
          }
        />
      ))}
    </div>
  );
}
