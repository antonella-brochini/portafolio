"use client";

import { useEffect, useState } from "react";
import "../../styles/falling-stars.css";

interface Star {
  id: number;
  right: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

export default function FallingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generar estrellas iniciales
    const initialStars = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      right: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 4, // 3-7 segundos
      size: 1 + Math.random() * 2.5, // 1-3.5px
      opacity: 0.4 + Math.random() * 0.6, // 0.4-1
    }));

    setStars(initialStars);

    // Agregar nuevas estrellas periódicamente
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
        // Mantener max 50 estrellas en pantalla
        return prevStars.length > 50
          ? [...prevStars.slice(1), newStar]
          : [...prevStars, newStar];
      });
    }, 600); // Nueva estrella cada 600ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="falling-stars-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="falling-star"
          style={{
            right: `${star.right}%`,
            "--delay": `${star.delay}s`,
            "--duration": `${star.duration}s`,
            "--size": `${star.size}px`,
            "--opacity": star.opacity,
          } as React.CSSProperties & Record<string, string | number>}
        />
      ))}
    </div>
  );
}
