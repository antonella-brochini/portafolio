'use client';

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import styles from "./ProjectDetail.module.css";

interface ProjectHeroProps {
  title: string;
  technologies?: string;
  repo?: string;
  projectUrl?: string;
}

export default function ProjectHero({
  title,
  technologies,
  repo,
  projectUrl,
}: ProjectHeroProps) {
  const githubUrl = repo || projectUrl;
  const liveUrl = projectUrl || repo;

  return (
    <section className="banner_part">
      <div className="mi-container">
        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto">
            <div className={`banner_text ${styles.heroBanner}`}>
              <div className={`banner_text_iner ${styles.heroContent}`}>
                <h1 className={styles.heroTitle}>
                  <span className="gradient-text">{title}</span>
                </h1>
                {technologies ? (
                  <h3 className={`${styles.heroTech} ${styles.heroTechAnim}`}>
                    {technologies}
                  </h3>
                ) : null}
                <div className={`${styles.links} ${styles.heroLinksAnim}`}>
                  {githubUrl ? (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      <FaGithub className={styles.linkIcon} />
                      GitHub
                    </a>
                  ) : null}
                  {liveUrl ? (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      <FaExternalLinkAlt className={styles.linkIcon} />
                      View Project
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
