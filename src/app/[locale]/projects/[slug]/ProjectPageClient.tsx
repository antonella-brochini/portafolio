"use client";

import FallingStars from "../../../components/FallingStars";
import { getProjectMeta } from "../../../data/projects";
import ImageCarousel from "../../../components/ImageCarousel";
import ProjectHero from "./ProjectHero";
import styles from "./ProjectDetail.module.css";
import { useTranslation } from "../../../../hooks/useTranslation";

type Props = {
  projectId: string;
};

export default function ProjectPageClient({ projectId }: Props) {
  const { t } = useTranslation();
  const meta = getProjectMeta(projectId);
  const copy = t.projects[projectId as keyof typeof t.projects];

  if (!meta || !copy) {
    return (
      <div className="mi-container py-5">
        <p>{t.projectDetail.notFound}</p>
      </div>
    );
  }

  return (
    <div>
      <FallingStars />
      <ProjectHero
        title={copy.title}
        technologies={meta.technologies}
        repo={meta.repo}
        projectUrl={meta.projectUrl}
        githubLabel={t.projectDetail.github}
        viewProjectLabel={t.projectDetail.viewProject}
      />
      <section className="portfolio_part section_padding">
        <div className="mi-container">
          <div className={styles.imageContainer}>
            <ImageCarousel
              images={meta.images ?? []}
              altBase={`${copy.title} — ${t.projectDetail.imageAlt}`}
              labels={{
                prev: t.projectDetail.galleryPrev,
                next: t.projectDetail.galleryNext,
                zoom: t.projectDetail.galleryZoom,
                close: t.projectDetail.galleryClose,
              }}
            />
          </div>
           
          {copy.data && copy.data.length > 0 && (
  <div className={styles.descriptionCard}>
    <h2 className={styles.sectionTitle}>Analytics</h2>
    <div className={styles.descriptionContent}>
      {copy.data.map((item, index) => (
        <p key={index} className={styles.projectDescription} style={{ whiteSpace: "pre-line" }}>
          {item}
        </p>
      ))}
    </div>
  </div>
)}
          <div className={styles.descriptionCard}>
            <h2 className={styles.sectionTitle}>{t.projectDetail.description}</h2>
          
    
            <div className={styles.descriptionContent}>
              {copy.description.map((paragraph, index) => (
                <p key={index} className={styles.projectDescription}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
