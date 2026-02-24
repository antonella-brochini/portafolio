"use client";

import "../styles/header.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./components/ThemeToggle";


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
    <header className={`header-modern ${scroll ? "scrolled" : ""}`}>
      <div className="header-container">

  {/* Logo */}
<Link href="/" className="logo">
  <Image
    src="/img/logo-dark.png"
    alt="logo"
    width={350}
    height={70}
    priority
    className="logo-dark"
  />
  <Image
    src="/img/logo.png"
    alt="logo"
    width={350}
    height={70}
    priority
    className="logo-light"
  />
</Link>
        {/* Navigation */}
        <nav className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/portafolio" onClick={closeMenu}>Projects</Link>
          <Link href="/aboutt" onClick={closeMenu}>About me</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </nav>

        {/* Theme Toggle */}
        <ThemeToggle />

      
        {/* Hamburger Menu */}
        <button 
          className={`hamburger ${isOpen ? "active" : ""}`}
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
