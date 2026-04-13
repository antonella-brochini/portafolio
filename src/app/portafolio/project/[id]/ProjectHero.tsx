'use client';

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import styles from "./ProjectDetail.module.css";
import Titulo from "../../../components/Titulo";

interface ProjectHeroProps {
  title: string;
  technologies?: string;
  repo?: string;
  projectUrl?: string;
  githubLabel?: string;
  viewProjectLabel?: string;
}

export default function ProjectHero({
  title,
  technologies,
  repo,
  projectUrl,
  githubLabel = "GitHub",
  viewProjectLabel = "View Project",
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
                <Titulo className={styles.heroTitle}>{title}</Titulo>
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
                      {githubLabel}
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
                      {viewProjectLabel}
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
