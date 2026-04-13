"use client";

import styles from "./header.module.css"
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

import LogoChico from "./logo-header";
import { useTranslation } from "../../hooks/useTranslation";

export default function Header() {
  const { t } = useTranslation();

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
          <Link href="/" onClick={closeMenu}>{t.nav.home}</Link>
          <Link href="/portafolio" onClick={closeMenu}>{t.nav.projects}</Link>
          <Link href="/aboutt" onClick={closeMenu}>{t.nav.about}</Link>
          <Link href="/contact" onClick={closeMenu}>{t.nav.contact}</Link>
        </nav>
        <div className={styles.headerActions}>
          <LanguageToggle />
          <ThemeToggle />
        </div>
        {/* Hamburger Menu */}
        <button 
          className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={t.header.menuToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
