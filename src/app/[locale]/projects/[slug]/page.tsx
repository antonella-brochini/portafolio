import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  projectsMeta,
  getProjectMeta,
  getProjectSlug,
} from "../../../data/projects";
import ProjectPageClient from "./ProjectPageClient";
import JsonLd from "../../../components/JsonLd";
import { getTranslation } from "../../../../translations";
import {
  OG_IMAGE,
  SITE_KEYWORDS,
  SITE_KEYWORDS_ES,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  languageAlternates,
  localizedPath,
  seo,
} from "../../../seo-constants";
import { breadcrumbJsonLd, projectJsonLd } from "../../../seo-jsonld";
import { locales } from "../../../../i18n/config";
import { resolveLocale } from "../../../../i18n/routing";
import type { Locale } from "../../../../translations/types";

type PageParams = Promise<{ locale: string; slug: string }>;

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    projectsMeta.map((project) => ({
      locale,
      slug: getProjectSlug(project),
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = await resolveLocale(params);
  const meta = getProjectMeta(slug);
  const t = getTranslation(locale);
  const copy = t.projects[meta?.id as keyof typeof t.projects];

  if (!meta || !copy) {
    return {
      title: "Project not found",
      description: `Project not found — ${SITE_NAME}`,
      robots: { index: false, follow: false },
    };
  }

  const title = copy.title;
  const summary =
    "summary" in copy && typeof copy.summary === "string" && copy.summary
      ? copy.summary
      : null;
  const description = (
    summary ??
    (typeof copy.description?.[0] === "string" ? copy.description[0] : "")
  )
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);

  const projectPath = `/projects/${getProjectSlug(meta)}`;
  const url = absoluteUrl(localizedPath(locale, projectPath));
  const imagePath = meta.images?.[0] || OG_IMAGE.path;
  const imageAbsolute = imagePath.startsWith("http")
    ? imagePath
    : `${SITE_URL}${imagePath}`;

  const pageTitle = `${title} — ${locale === "es" ? "Caso de estudio" : "Case Study"}`;
  const keywords =
    locale === "es"
      ? [title, SITE_NAME, ...SITE_KEYWORDS_ES]
      : [title, SITE_NAME, ...SITE_KEYWORDS];
  const site = seo[locale];
  const alternateOg = locale === "en" ? "es_UY" : "en_US";

  return {
    title: { absolute: `${pageTitle} | ${SITE_NAME}` },
    description:
      description ||
      `${title} — ${SITE_NAME}, Software Developer & Data Analyst.`,
    keywords: [
      ...keywords,
      ...(meta.technologies
        ? meta.technologies.split(/,\s*/).map((tech: string) => tech.trim())
        : []),
    ],
    alternates: languageAlternates(locale, projectPath),
    openGraph: {
      type: "article",
      locale: site.ogLocale,
      alternateLocale: [alternateOg],
      url,
      siteName: SITE_NAME,
      title: `${title} | ${SITE_NAME}`,
      description:
        description || `${title} — portfolio project by ${SITE_NAME}.`,
      images: [
        {
          url: imagePath,
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt: `${title} — project screenshot`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description:
        description || `${title} — portfolio project by ${SITE_NAME}.`,
      images: [imageAbsolute],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: PageParams;
}) {
  const { slug } = await params;
  const locale = (await resolveLocale(params)) as Locale;
  const meta = getProjectMeta(slug);
  const t = getTranslation(locale);
  const copy = meta
    ? t.projects[meta.id as keyof typeof t.projects]
    : undefined;

  if (!meta || !copy) notFound();

  const projectSlug = getProjectSlug(meta);
  const projectPath = `/projects/${projectSlug}`;
  const url = absoluteUrl(localizedPath(locale, projectPath));
  const description =
    ("summary" in copy && copy.summary) ||
    copy.description?.[0] ||
    `${copy.title} — portfolio project by ${SITE_NAME}.`;
  const image = meta.images?.[0]
    ? `${SITE_URL}${meta.images[0]}`
    : OG_IMAGE.url;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: t.nav.home, path: localizedPath(locale, "/") },
            { name: t.nav.projects, path: localizedPath(locale, "/projects") },
            { name: copy.title, path: localizedPath(locale, projectPath) },
          ]),
          projectJsonLd({
            id: meta.id,
            title: copy.title,
            description: String(description).slice(0, 300),
            technologies: meta.technologies,
            image,
            url,
            locale,
          }),
        ]}
      />
      <ProjectPageClient projectId={meta.id} />
    </>
  );
}
