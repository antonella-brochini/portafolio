"use client";

import { list, itemSlideUp } from "../../../helpers/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import FallingStars from "../../components/FallingStars";
import {
  developmentProjectsMeta,
  dataProjectsMeta,
  getProjectSlug,
} from "../../data/projects";
import { useTranslation } from "../../../hooks/useTranslation";
import HeroReveal from "../../components/HeroReveal";
import styles from "./portafolio.module.css";
import Titulo from "../../components/Titulo";
import { FaExternalLinkAlt, FaGithub, FaArrowUp } from "react-icons/fa";
import { localizedPath } from "../../../i18n/config";

const PREVIEW_MAX_LEN = 100;

function truncateProjectPreview(text: string, max = PREVIEW_MAX_LEN): string {
  const t = text?.trim() ?? "";
  if (t.length <= max) return t;
  return `${t.slice(0, max)}...`;
}

type ProjectMeta = {
  id: string;
  slug?: string;
  images: string[];
  projectUrl: string;
  repo: string;
  technologies: string;
};

type ProjectCopy = {
  title?: string;
  description?: string[];
  summary?: string;
};

function ProjectCard({
  project,
  projectCopy,
  openProjectLabel,
  openRepoLabel,
  href,
}: {
  project: ProjectMeta;
  projectCopy: ProjectCopy | undefined;
  openProjectLabel: string;
  openRepoLabel: string;
  href: string;
}) {
  const { images, projectUrl, repo, technologies } = project;
  const title = projectCopy?.title ?? String(project.id);
  const firstParagraph = projectCopy?.description?.[0] ?? "";
  const summary = projectCopy?.summary
    ? projectCopy.summary
    : truncateProjectPreview(firstParagraph, PREVIEW_MAX_LEN);
  const coverImage = images[0];

  return (
    <motion.div variants={itemSlideUp} className={styles.portfolioCard}>
      <div className={styles.flipScene}>
        <div className={styles.flipCardInner}>
          <Link href={href} className={`${styles.flipFace} ${styles.flipFront}`}>
            <span className={styles.portfolioCardImageWrap}>
              {coverImage ? (
                <Image
                  src={coverImage}
                  width={500}
                  height={300}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.portfolioImg}
                  alt={title}
                />
              ) : (
                <span className={styles.portfolioImg} aria-hidden />
              )}
            </span>
          </Link>
          <Link
            href={href}
            className={`${styles.flipFace} ${styles.flipBack}`}
            tabIndex={-1}
            aria-hidden="true"
          >
            <p className={styles.flipBackSummary}>{summary}</p>
            <p className={styles.flipBackTechnologies}>{technologies}</p>
          </Link>
        </div>
      </div>

      <div className={styles.portfolioCardFooter}>
        <div className={styles.portfolioHeader}>
          <h4 className={styles.portfolioTitle}>{title}</h4>
          <div className={styles.portfolioIcons}>
            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${openProjectLabel}: ${title}`}
              >
                <FaExternalLinkAlt aria-hidden />
              </a>
            )}
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${openRepoLabel}: ${title}`}
              >
                <FaGithub aria-hidden />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectSection({
  id,
  title,
  projects,
  getCopy,
  openProjectLabel,
  openRepoLabel,
  locale,
}: {
  id: string;
  title: string;
  projects: ProjectMeta[];
  getCopy: (id: string) => ProjectCopy | undefined;
  openProjectLabel: string;
  openRepoLabel: string;
  locale: "en" | "es";
}) {
  return (
    <section
      id={id}
      className={styles.projectSection}
      aria-labelledby={`${id}-heading`}
    >
      <div className="row align-items-center">
        <div className="col-lg-8">
          <div className="banner_text">
            <HeroReveal className="banner_text_iner">
              <Titulo as="h2" id={`${id}-heading`} size="sm" className="pt-5">
                {title}
              </Titulo>
            </HeroReveal>
          </div>
        </div>
      </div>

      <div className="row">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={list}
          className={styles.portfolioGrid}
        >
          {projects.map((project) => {
            const slug = getProjectSlug(project);
            return (
              <ProjectCard
                key={project.id}
                project={project}
                projectCopy={getCopy(project.id)}
                openProjectLabel={openProjectLabel}
                openRepoLabel={openRepoLabel}
                href={localizedPath(locale, `/projects/${slug}`)}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  const { t, locale } = useTranslation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowButton(window.pageYOffset > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const timer = window.setTimeout(scrollToHash, 100);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getCopy = (id: string) =>
    t.projects[id as keyof typeof t.projects] as ProjectCopy | undefined;

  return (
    <main>
      <FallingStars />
      <section className="banner_part">
        <div className="mi-container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="banner_text">
                <HeroReveal className="banner_text_iner">
                  <Titulo as="h1" className="pt-5">
                    {t.portfolio.pageTitle}
                  </Titulo>
                </HeroReveal>
              </div>
            </div>
          </div>

          <ProjectSection
            id="data"
            title={t.portfolio.data}
            projects={dataProjectsMeta}
            getCopy={getCopy}
            openProjectLabel={t.header.openProject}
            openRepoLabel={t.header.openRepo}
            locale={locale}
          />
          <ProjectSection
            id="development"
            title={t.portfolio.development}
            projects={developmentProjectsMeta}
            getCopy={getCopy}
            openProjectLabel={t.header.openProject}
            openRepoLabel={t.header.openRepo}
            locale={locale}
          />
        </div>

        {showButton && (
          <button
            type="button"
            onClick={scrollToTop}
            className={styles.backToTop}
            aria-label={t.header.backToTop}
          >
            <FaArrowUp size={24} />
          </button>
        )}
      </section>
    </main>
  );
}
