"use client"
import { list, itemSlideUp } from "../../helpers/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import FallingStars from '../components/FallingStars';
import { projectsMeta } from "../data/projects"
import { useTranslation } from "../../hooks/useTranslation";
import HeroReveal from "../components/HeroReveal";
import styles from './portafolio.module.css';
import Titulo from "../components/Titulo";
import { FaExternalLinkAlt, FaGithub, FaArrowUp } from "react-icons/fa";

const PREVIEW_MAX_LEN = 100;

function truncateProjectPreview(text: string, max = PREVIEW_MAX_LEN): string {
  const t = text?.trim() ?? "";
  if (t.length <= max) return t;
  return `${t.slice(0, max)}...`;
}

export default function PortfolioPage() {
  const { t } = useTranslation();
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
      <section className="banner_part">
        <div className="mi-container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="banner_text">
                          <HeroReveal className="banner_text_iner">
                           
                            <Titulo as="h1" className="pt-5">
                              {t.portfolio.selectedProjects}
                            </Titulo>
                          </HeroReveal>
                        </div>
                    </div>
                </div>
           
      <div className="mi-container">
             <div className="row">
<motion.div
  initial="hidden"
  animate="visible"
  variants={list}
  className={styles.portfolioGrid}
>
  {projectsMeta.map(({ id, images, projectUrl, repo }) => {
    const title = t.projects[id as keyof typeof t.projects]?.title ?? id;
    const firstParagraph =
      t.projects[id as keyof typeof t.projects]?.description?.[0] ?? "";
    const previewText = truncateProjectPreview(firstParagraph, PREVIEW_MAX_LEN);
    return (
    <motion.div
      variants={itemSlideUp}
      key={id}
      className={styles.portfolioCard}
    >
      <Link
        href={`/portafolio/project/${id}`}
        className={styles.portfolioCardMedia}
      >
        <span className={styles.portfolioCardImageWrap}>
          <Image
            src={images[0]}
            width={500}
            height={300}
            className={styles.portfolioImg}
            alt={title}
          />
          <div className="project-card-overlay">
            <span className={styles.overlayProjectTitle}>{title}</span>
            <p className="project-card-description">{previewText}</p>
          </div>
        </span>
      </Link>
      <p
        className={`project-card-description ${styles.descriptionBelowImage}`}
      >
        {previewText}
      </p>

      <div className={styles.portfolioCardFooter}>
        <div className={styles.portfolioHeader}>
          <h4 className={styles.portfolioTitle}>
            {title}
          </h4>

          <div className={styles.portfolioIcons}>
            {projectUrl && (
              <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
              </a>
            )}
            {repo && (
              <a href={repo} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
  })}
</motion.div>
        </div>
      </div>
    
            </div>
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

    </section>
    </div>

  )
}