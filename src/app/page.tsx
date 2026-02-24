"use client";

import Link from "next/link";
import "../styles/landing.css";
import FallingStars from "./components/FallingStars";
import HeroReveal from "./components/HeroReveal";
import Btn from "./components/boton3d";

export default function Home() {

  return (
    <main>
      <FallingStars />
      <section className="banner_part">
        <div className="hero-wrapper">
          <HeroReveal className="hero-center" >
            <p className="hero-subtitle">Designing digital experiences beyond limits.</p>

            <h1 className="hero-title">
              <span className="pading">Building Today.</span>
              <span className="gradient-text">Leading Tomorrow.</span>
            </h1>
          </HeroReveal>

          <Link href="/portafolio" className="btn-gaming">
            View My Work
          </Link>
<Btn titulo="View My Work" url="/portafolio" />
          
        </div>
      </section>
    </main>
  );
}