"use client";

import styles from "./header.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import LogoChico from "./logo-header";
import { useTranslation } from "../../hooks/useTranslation";
import { localizedPath } from "../../i18n/config";
import { FaChevronDown } from "react-icons/fa";

export default function Header() {
  const { t, locale } = useTranslation();
  const pathname = usePathname() || "";

  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projectsBase = localizedPath(locale, "/projects");

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!projectsOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (
        projectsRef.current &&
        !projectsRef.current.contains(event.target as Node)
      ) {
        setProjectsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setProjectsOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [projectsOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setProjectsOpen(false);
  };

  const goToProjectsSection = (sectionId: string) => {
    closeMenu();

    if (!pathname.includes("/projects") || pathname.includes("/projects/")) {
      return;
    }

    window.requestAnimationFrame(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const toggleMobileMenu = () => {
    setIsOpen((open) => {
      if (open) setProjectsOpen(false);
      return !open;
    });
  };

  return (
    <>
      <a href="#main-content" className={styles.skipLink}>
        {t.header.skipToContent}
      </a>
      <header
        className={`${styles.headerModern} ${scroll ? styles.scrolled : ""}`}
      >
        <div className={styles.headerContainer}>
          <LogoChico />

          <nav
            className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}
            aria-label={t.header.mainNav}
          >
            <Link href={localizedPath(locale, "/")} onClick={closeMenu}>
              {t.nav.home}
            </Link>

            <div
              ref={projectsRef}
              className={`${styles.navDropdown} ${
                projectsOpen ? styles.navDropdownOpen : ""
              }`}
            >
              <button
                type="button"
                className={styles.navDropdownTrigger}
                aria-expanded={projectsOpen}
                aria-haspopup="true"
                aria-controls="projects-submenu"
                onClick={() => setProjectsOpen((open) => !open)}
              >
                {t.nav.projects}
                <FaChevronDown
                  className={styles.navDropdownChevron}
                  aria-hidden
                />
              </button>

              <div
                id="projects-submenu"
                className={styles.navDropdownMenu}
                role="menu"
              >
                <Link
                  href={`${projectsBase}#data`}
                  role="menuitem"
                  onClick={() => goToProjectsSection("data")}
                >
                  {t.portfolio.data}
                </Link>
                <Link
                  href={`${projectsBase}#development`}
                  role="menuitem"
                  onClick={() => goToProjectsSection("development")}
                >
                  {t.portfolio.development}
                </Link>
              </div>
            </div>

            <Link href={localizedPath(locale, "/about")} onClick={closeMenu}>
              {t.nav.about}
            </Link>
            <Link href={localizedPath(locale, "/contact")} onClick={closeMenu}>
              {t.nav.contact}
            </Link>
          </nav>

          <div className={styles.headerActions}>
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <button
            type="button"
            className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
            onClick={toggleMobileMenu}
            aria-label={t.header.menuToggle}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
}
