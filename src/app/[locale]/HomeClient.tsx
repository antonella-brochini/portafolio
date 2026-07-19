"use client";

import Link from "next/link";
import "../../styles/landing.css";
import FallingStars from "../components/FallingStars";
import HeroReveal from "../components/HeroReveal";
import Boton3d from "../components/boton3d";
import { useTranslation } from "../../hooks/useTranslation";
import { localizedPath } from "../../i18n/config";

export default function HomeClient() {
  const { t, locale } = useTranslation();
  const projectsHref = localizedPath(locale, "/projects");

  return (
    <main>
      <FallingStars />
      <section className="banner_part home-landing-hero">
        <div className="hero-wrapper">
          <HeroReveal className="hero-center">
            <p className="hero-subtitle">{t.home.subtitle}</p>

            <h1 className="hero-title">
              <span className="pading">{t.home.titleLine1}</span>
              <span className="gradient-text">{t.home.titleLine2}</span>
            </h1>
          </HeroReveal>

          <Link href={projectsHref} className="btn-gaming">
            {t.home.cta}
          </Link>
          <Boton3d
            titulo={t.home.cta}
            url={projectsHref}
            className="manejarVisibilidad"
          />
        </div>
      </section>
    </main>
  );
}
