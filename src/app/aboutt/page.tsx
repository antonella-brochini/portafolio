"use client";

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact ,FaJava, FaDatabase, FaAws , FaCloud ,FaDocker, FaGithub, FaBootstrap, FaToolbox, FaCode } from "react-icons/fa";
import { SiNextdotjs, SiSpringboot , SiDotnet ,SiTerraform, SiTailwindcss  } from "react-icons/si";
import {  FaArrowUp } from "react-icons/fa";
import FallingStars from "../components/FallingStars";
import HeroReveal from "../components/HeroReveal";
import '../../styles/about.css'
import Btn from "../components/boton3d";
import Titulo from "../components/Titulo";
import {
  item,
  list,
  slideDown,
  slideToLeft,
  slideUp,
} from "../../helpers/animation";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function Aboutt() {

  


  type Stat = { label: string; value: string };
type Pill = { icon: string; text: string };
type TimelineItem = { title: string; desc: string };


  const stats: Stat[] = [
    { value: "Full Stack", label: "Profile" },
    { value: "Next.js", label: "Frontend" },
    { value: "Spring Boot", label: "Backend" },
    { value: "PostgreSQL", label: "DB" },
  ];

  const pills: Pill[] = [
    { icon: "⚛️", text: "React / Next.js" },
    { icon: "🍃", text: "Spring Boot" },
    { icon: "🗄️", text: "SQL / PostgreSQL" },
    { icon: "🐳", text: "Docker / Git" },
    { icon: "☁️", text: "AWS / Cloud" },
    { icon: "☁️", text: "Salesforce",},
    { icon: "🎨", text: "Tailwind / Bootstrap" },
    {icon:"🌍", text: "English"},
    { icon: "🇪🇸", text: "Spanish (Native)" },
  ];

  const timeline: TimelineItem[] = [
    { title: "I think in systems, not features", desc: "Before writing code, I analyze the problem, the business context, and the long-term impact. I build solutions that align technology with strategy." },
    { title: "I build with intention", desc: "I design modern, accessible, high-performance experiences that are built to scale — not just to ship." },
    { title: "I engineer for excellence", desc: "Clean architecture, reusable components, testing, and best practices are not optional — they are the foundation for sustainable growth." },
  ];

  // Partículas (random) solo 1 vez
  const particles = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      cx: `${Math.floor(Math.random() * 100)}%`,
      cy: `${Math.floor(Math.random() * 100)}%`,
      r: 2 + Math.floor(Math.random() * 2),
      dur: 6 + Math.floor(Math.random() * 5),
      delay: (Math.random() * 2).toFixed(2),
    }));
  }, []);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

   const [showButton, setShowButton] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
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

    <section className="banner_part mi-container">
      <div className="row align-items-center">
        <div className="banner_text">
          <HeroReveal className="banner_text_iner">
<div className="contenedorTituloTexto">

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
      <Titulo>About</Titulo>

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
            className="about-line-short"
          />

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "7rem" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="about-line-long"
          />
        </div>

        <Titulo>Me</Titulo>
      </div>
    </motion.h1>
  </div>

 <div className="mi-contenedor">

  <motion.p
    initial="hidden"
    animate="visible"
    variants={slideToLeft}
    custom={0.2}
    style={{ textAlign: "justify" }}
    className="about_hero_text"
  >
    I’m a Software Developer with hands-on experience building scalable web applications using Next.js, Spring Boot, and relational databases.
  </motion.p>

  <motion.p
    initial="hidden"
    animate="visible"
    variants={slideToLeft}
    custom={0.4}
    style={{ textAlign: "justify" }}
    className="about_hero_text"
  >
    I work across both frontend and backend, with a strong focus on writing clean, maintainable code and designing efficient system architectures.
  </motion.p>

  <motion.p
    initial="hidden"
    animate="visible"
    variants={slideToLeft}
    custom={0.6}
    style={{ textAlign: "justify" }}
    className="about_hero_text"
  >
    I enjoy understanding how systems work end-to-end and continuously improving my technical foundations while building solutions that are functional, efficient, and scalable.
  </motion.p>

</div>
</div>
          
            <a
              href="https://www.linkedin.com/in/antonella-brochini/"
              className="btn-gaming"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </HeroReveal>
        </div>

        <Btn titulo="LinkedIn" url="https://www.linkedin.com/in/antonella-brochini/" />
      </div>
    </section>

 <section className="about-root">
      {/* Background blobs */}
      <div className="about-bg" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />

        {/* particles */}
        <svg className="particles" viewBox="0 0 100 100" preserveAspectRatio="none">
          {particles.map((p) => (
            <circle
              key={p.id}
              className="particle"
              cx={p.cx}
              cy={p.cy}
              r={p.r}
              style={{ animation: `float ${p.dur}s ease-in-out infinite ${p.delay}s` }}
            />
          ))}
        </svg>
      </div>

      <div className="about-container">
        {/* Header */}
        <header className="about-header">
          <div className="mono tag">&lt;skills&gt;</div>

          <h2 className={`about-title ${mounted ? "slide-in" : ""}`}>
            <span className="gradient-text">My stack</span>
          </h2>

          <p className={`about-subtitle ${mounted ? "slide-in" : ""}`} style={{ animationDelay: "0.08s" }}>
           Fullstack Developer focused on building products with design, performance, and clarity.
          </p>

          <div className="mono tag">&lt;/skills&gt;</div>
        </header>

        {/* Main grid */}
        <div className="about-grid">
          {/* Left: profile card */}
          <div className={`glass card profile ${mounted ? "scale-in" : ""}`} style={{ animationDelay: "0.08s" }}>
            <div className="profile-top">
              <div className="hexagon glow-effect">
                <div className="hex-inner">
                  <span className="emoji">👩‍💻</span>
                </div>
              </div>

              <div className="profile-meta">
                <p className="mono small">Antonella Brochini</p>
                <h3 className="profile-role">Full Stack Developer</h3>
                <p className="profile-note">
                 I aim to specialize in developing scalable digital systems that combine strong engineering principles with data-driven decision making.
                </p>
              </div>
            </div>

            <div className="pill-row">
              {pills.map((p, i) => (
                <span key={i} className="pill float-item" style={{ animationDelay: `${i * 0.15}s` }}>
                  <span className="pill-ic">{p.icon}</span>
                  <span>{p.text}</span>
                </span>
              ))}
            </div>
          </div>

        
          <div className="right-col">
            <div className="stats-grid">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`glass stat ${mounted ? "scale-in" : ""}`}
                  style={{ animationDelay: `${0.12 + i * 0.06}s` }}
                >
                  <div className="stat-value gradient-text">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className={`glass card timeline ${mounted ? "slide-in" : ""}`} style={{ animationDelay: "0.18s" }}>
              <div className="timeline-head">
                <span className="mono small">&lt;Mindset /&gt;</span>
                <h4 className="timeline-title">How I Work</h4>
              </div>

              <div className="timeline-list">
                {timeline.map((t, i) => (
                  <div key={i} className="timeline-item">
                    <div className="dot" />
                    <div >
                      <p className="timeline-item-title">{t.title}</p>
                      <p className="timeline-item-desc">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mono footer-note">
                <span className="gradient-text">{/* siempre aprendiendo */}</span>
              </div>
            </div>
          </div>
        </div>

        {/* little footer */}
        <footer className="about-footer mono">
    {showButton && (
                <button
                  onClick={scrollToTop}
                  className="back-to-top"
    
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