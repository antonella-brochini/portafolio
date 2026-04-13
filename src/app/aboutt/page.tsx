"use client";

import {  FaArrowUp } from "react-icons/fa";
import FallingStars from "../components/FallingStars";
import HeroReveal from "../components/HeroReveal";
import styles from "./about.module.css";
import Boton3d from "../components/boton3d";
import Titulo from "../components/Titulo";
import {
  slideToLeft,

} from "../../helpers/animation";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";

export default function Aboutt() {
  const { t } = useTranslation();



  const [mounted, setMounted] = useState(false);
  type Particle = { id: number; cx: string; cy: string; r: number; dur: number; delay: string };

const [particles, setParticles] = useState<Particle[]>([]);
  useEffect(() => setMounted(true), []);

   const [showButton, setShowButton] = useState(false);
 useEffect(() => {
  setParticles(
    Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      cx: `${Math.floor(Math.random() * 100)}%`,
      cy: `${Math.floor(Math.random() * 100)}%`,
      r: 2 + Math.floor(Math.random() * 2),
      dur: 6 + Math.floor(Math.random() * 5),
      delay: `${(Math.random() * 2).toFixed(2)}s`,
    }))
  );
}, []);

useEffect(() => {
  const onScroll = () => setShowButton(window.pageYOffset > 300);
  window.addEventListener("scroll", onScroll);
  onScroll();
  return () => window.removeEventListener("scroll", onScroll);
}, []);
   // This function will scroll the window to the top 
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
      });
    };
  
  

  return (
  <div>
    <FallingStars />
    <section className={`banner_part mi-container ${styles.aboutHeroSection}`}>
      <div className="row align-items-center">
        <div className="banner_text">
          <HeroReveal className="banner_text_iner">
<div className={styles.contenedorTituloTexto}>
  {/* COLUMNA IZQUIERDA — TITULO */}
  <div>
    <motion.h1
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Titulo>{t.about.titleAbout}</Titulo>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className={styles.aboutLineShort}
          />

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "7rem" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={styles.aboutLineLong}
          />
        </div>

        <Titulo>{t.about.titleMe}</Titulo>
      </div>
    </motion.h1>
  </div>

 <div className="mi-container">

  {t.about.heroParagraphs.map((text, i) => (
  <motion.p
    key={i}
    initial="hidden"
    animate="visible"
    variants={slideToLeft}
    custom={0.2 + i * 0.2}
    style={{ textAlign: "justify" }}
    className={styles.aboutHeroText}
  >
    {text}
  </motion.p>
  ))}

</div>
</div>
          
            <a
              href="https://www.linkedin.com/in/antonella-brochini/"
              className={styles.btnGaming}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.about.linkedIn}
            </a>
          </HeroReveal>
        </div>

        <Boton3d titulo={t.about.linkedIn} url="https://www.linkedin.com/in/antonella-brochini/" className={styles.manejarVisibilidadAbout} />
      </div>
    </section>

 <section className={styles.aboutRoot}>
      {/* Background blobs */}
      <div className={styles.aboutBg} aria-hidden="true">
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />

   {/* particles */}
{mounted && (
  <svg className={styles.particles} viewBox="0 0 100 100"  preserveAspectRatio="xMidYMid meet">
    {particles.map((p) => (
      <circle
  key={p.id}
  className={styles.particle}
  cx={p.cx}
  cy={p.cy}
  r={p.r}
  style={
    {
      ["--dur" as any]: `${p.dur}s`,
      ["--delay" as any]: p.delay, // ya viene con "s"
    } as React.CSSProperties
  }
/>
    ))}
  </svg>
)}
      </div>

      <div className={styles.aboutContainer}>
        {/* Header */}
        <div className={styles.aboutHeader}>
          <div className={`${styles.mono} ${styles.tag}`}>{t.about.skillsOpen}</div>

          <h2 className={`${styles.aboutTitle} ${mounted ? styles.slideIn : ""}`}>
            <span className={styles.gradientText}>{t.about.stackTitle}</span>
          </h2>

          <p className={`${styles.aboutSubtitle} ${mounted ? styles.slideIn : ""}`} style={{ animationDelay: "0.08s" }}>
           {t.about.stackSubtitle}
          </p>

          <div className={`${styles.mono} ${styles.tag}`}>{t.about.skillsClose}</div>
        </div>

        {/* Main grid */}
        <div className={styles.aboutGrid}>
          {/* Left: profile card */}
          <div className={`${styles.glass} ${styles.card} ${styles.profile} ${mounted ? styles.scaleIn : ""}`} style={{ animationDelay: "0.08s" }}>
            <div className={styles.profileTop}>
              <div className={`${styles.hexagon} ${styles.glowEffect}`}>
                <div className={styles.hexInner}>
                  <span className={styles.emoji}>👩‍💻</span>
                </div>
              </div>

              <div className={styles.profileMeta}>
                <p className={`${styles.mono} ${styles.small}`}>{t.about.profileName}</p>
                <h3 className={styles.profileRole}>{t.about.profileRole}</h3>
                <p className={styles.profileNote}>
                 {t.about.profileNote}
                </p>
              </div>
            </div>

            <div className={styles.pillRow}>
              {t.about.pills.map((p, i) => (
                <span key={i} className={styles.pill} style={{ animationDelay: `${i * 0.15}s` }}>
                  <span className={styles.pillIcon}>{p.icon}</span>
                  <span>{p.text}</span>
                </span>
              ))}
            </div>
          </div>

        
          <div className={styles.rightCol}>
            <div className={styles.statsGrid}>
              {t.about.stats.map((s, i) => (
                <div
                  key={i}
                  className={`${styles.glass} ${styles.stat} ${mounted ? styles.scaleIn : ""}`}
                  style={{ animationDelay: `${0.12 + i * 0.06}s` }}
                >
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className={`${styles.glass} ${styles.card} ${styles.timeline} ${mounted ? styles.slideIn : ""}`} style={{ animationDelay: "0.18s" }}>
              <div className={styles.timelineHead}>
                <span className={`${styles.mono} ${styles.small}`}>{t.about.mindsetLabel}</span>
                <h4 className={styles.timelineTitle}>{t.about.howIWork}</h4>
              </div>

              <div className={styles.timelineList}>
                {t.about.timeline.map((item, i) => (
                  <div key={i} className={styles.timelineItem}>
                    <div className={styles.dot} />
                    <div >
                      <p className={styles.timelineItemTitle}>{item.title}</p>
                      <p className={styles.timelineItemDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`${styles.mono} ${styles.footerNote}`}>
                <span className={styles.gradientText}>{/* siempre aprendiendo */}</span>
              </div>
            </div>
          </div>
        </div>

        {/* little footer */}
        <footer className={`${styles.aboutFooter} ${styles.mono}`}>
    {showButton && (
                <button
                  onClick={scrollToTop}
                  className={styles.backToTop}
    
                >
                  <FaArrowUp
                   size={24}
                     
                  />
                </button>
              )}
        </footer>
      </div>
    </section>
 

  

  </div>
);
}