"use client";

import { useTheme } from "next-themes";
import "./Titulo.css";

export default function AnimatedTitle({ children, className = "", }: { children: React.ReactNode, className?: string }) {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <div className={`title ${isDark ? "dark-title" : "light-title"} ${className}`}>
      {isDark ? (
        <span className="gradient-text">{children}</span>
      ) : (
        <span>{children}</span>
      )}
    </div>
  );
}