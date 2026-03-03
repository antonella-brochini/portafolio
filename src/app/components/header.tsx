"use client";

import styles from "./header.module.css"
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

import LogoChico from "./logo-header";

export default function Header() {

  const [scroll, setScroll] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`${styles.headerModern} ${scroll ? styles.scrolled : ""}`}>

      <div className={styles.headerContainer}>
  <LogoChico />

        {/* Navigation */}
        <nav className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/portafolio" onClick={closeMenu}>Projects</Link>
          <Link href="/aboutt" onClick={closeMenu}>About me</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Hamburger Menu */}
        <button 
          className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
