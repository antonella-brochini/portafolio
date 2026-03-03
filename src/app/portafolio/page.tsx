"use client"
import { list, itemSlideUp } from "../../helpers/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import FallingStars from '../components/FallingStars';
import { projectsData } from "../data/projects"
import HeroReveal from "../components/HeroReveal";
import styles from './portafolio.module.css';
import Titulo from "../components/Titulo";
import { FaExternalLinkAlt, FaGithub, FaArrowUp } from "react-icons/fa";


export default function PortfolioPage() {
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
                           
                            <Titulo className="pt-5">Selected Projects</Titulo>
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
  {projectsData.map(({ id, title, images, projectUrl, repo }) => (
    <motion.div
      variants={itemSlideUp}
      key={id}
      className={styles.portfolioCard}
    >
      <Link href={`/portafolio/project/${id}`}>
        <Image
          src={images[0]}
          width={500}
          height={300}
          className={styles.portfolioImg}
          alt={title}
        />
      </Link>

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
  ))}
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