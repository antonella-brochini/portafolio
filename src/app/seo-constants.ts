import type { Metadata } from "next";
import type { Locale } from "../translations/types";
import { defaultLocale, localizedPath } from "../i18n/config";

/** Canonical site URL for metadata, sitemap and robots. */
export const SITE_URL = "https://www.antonellabrochini.com" as const;

export const SITE_NAME = "Antonella Brochini" as const;

/** Brand mark for favicon / PWA: `public/icon.png`. */
export const SITE_ICON = {
  path: "/icon.png",
  url: `${SITE_URL}/icon.png`,
  width: 1254,
  height: 1254,
  type: "image/png",
} as const;

/** Social share image only: `public/og-image.png` (not the favicon). */
export const OG_IMAGE = {
  path: "/og-image.png",
  url: `${SITE_URL}/og-image.png`,
  width: 1200,
  height: 501,
  alt: `${SITE_NAME} — Software Developer & Data Analyst Portfolio`,
} as const;

export const SITE_KEYWORDS = [
  SITE_NAME,
  "Software Developer",
  "Full Stack Developer",
  "Data Analyst",
  "Business Intelligence",
  "Commercial Intelligence",
  "SQL",
  "Python",
  "Power BI",
  "React",
  "Next.js",
  "Artificial Intelligence",
  "TypeScript",
  "Portfolio",
  "Uruguay",
] as const;

export const SITE_KEYWORDS_ES = [
  SITE_NAME,
  "Desarrolladora de Software",
  "Desarrolladora Full Stack",
  "Data Analyst",
  "Business Intelligence",
  "Inteligencia Comercial",
  "SQL",
  "Python",
  "Power BI",
  "React",
  "Next.js",
  "Inteligencia Artificial",
  "TypeScript",
  "Portafolio",
  "Uruguay",
] as const;

/** Shared site-level SEO copy per locale. */
export const seo = {
  en: {
    title: `${SITE_NAME} | Portfolio`,
    titleDefault: `${SITE_NAME} | Software Developer & Data Analyst`,
    description:
      "Software Developer & Data Analyst specialized in Commercial Intelligence, Full Stack apps, SQL, Python, Power BI, React and Next.js.",
    ogAlt: OG_IMAGE.alt,
    ogLocale: "en_US",
  },
  es: {
    title: `${SITE_NAME} | Portafolio`,
    titleDefault: `${SITE_NAME} | Desarrolladora de Software & Data Analyst`,
    description:
      "Desarrolladora de Software y Data Analyst especializada en Inteligencia Comercial, aplicaciones full stack, SQL, Python, Power BI, React y Next.js.",
    ogAlt: `Portfolio de ${SITE_NAME} — Software Developer & Data Analyst`,
    ogLocale: "es_UY",
  },
} as const;

type PageKey = "home" | "about" | "projects" | "contact";

type PageSeoCopy = {
  title: string;
  description: string;
  keywords: string[];
};

/** Per-page SEO copy. Paths are locale-agnostic (`/about`, `/projects`…). */
export const pagesSeo: Record<Locale, Record<PageKey, PageSeoCopy>> = {
  en: {
    home: {
      title: seo.en.titleDefault,
      description: seo.en.description,
      keywords: [...SITE_KEYWORDS],
    },
    about: {
      title: `About — ${SITE_NAME}`,
      description: `${SITE_NAME} is a Software Developer and Data Analyst from Uruguay. Full Stack with React & Next.js, plus Business Intelligence with SQL, Python and Power BI.`,
      keywords: [
        ...SITE_KEYWORDS,
        "About",
        "Full Stack Developer Uruguay",
        "Data Analyst Uruguay",
      ],
    },
    projects: {
      title: `Projects — ${SITE_NAME}`,
      description: `Explore projects by ${SITE_NAME}: Full Stack Development and Data Analytics — React, Next.js, Python, SQL, Power BI and Commercial Intelligence case studies.`,
      keywords: [
        ...SITE_KEYWORDS,
        "Portfolio Projects",
        "Case Studies",
        "Data Analytics Projects",
      ],
    },
    contact: {
      title: `Contact — ${SITE_NAME}`,
      description: `Contact ${SITE_NAME} for Software Development, Data Analytics or Business Intelligence collaborations, freelance work and opportunities.`,
      keywords: [
        ...SITE_KEYWORDS,
        "Hire Developer",
        "Contact",
        "Freelance Uruguay",
      ],
    },
  },
  es: {
    home: {
      title: seo.es.titleDefault,
      description: seo.es.description,
      keywords: [...SITE_KEYWORDS_ES],
    },
    about: {
      title: `Sobre mí — ${SITE_NAME}`,
      description: `${SITE_NAME} es Desarrolladora de Software y Data Analyst de Uruguay. Full Stack con React y Next.js, e Inteligencia de Negocios con SQL, Python y Power BI.`,
      keywords: [
        ...SITE_KEYWORDS_ES,
        "Sobre mí",
        "Desarrolladora Full Stack Uruguay",
        "Data Analyst Uruguay",
      ],
    },
    projects: {
      title: `Proyectos — ${SITE_NAME}`,
      description: `Explorá proyectos de ${SITE_NAME}: Desarrollo Full Stack y Analítica de Datos — React, Next.js, Python, SQL, Power BI e Inteligencia Comercial.`,
      keywords: [
        ...SITE_KEYWORDS_ES,
        "Proyectos de portafolio",
        "Casos de estudio",
        "Proyectos de Data Analytics",
      ],
    },
    contact: {
      title: `Contacto — ${SITE_NAME}`,
      description: `Contactá a ${SITE_NAME} para desarrollo de software, analítica de datos o colaboraciones de Business Intelligence, freelance y oportunidades.`,
      keywords: [
        ...SITE_KEYWORDS_ES,
        "Contratar desarrolladora",
        "Contacto",
        "Freelance Uruguay",
      ],
    },
  },
};

export const pagePaths: Record<PageKey, string> = {
  home: "/",
  about: "/about",
  projects: "/projects",
  contact: "/contact",
};

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return SITE_URL;
  return `${SITE_URL}${normalized}`;
}

/** Hreflang + canonical for a locale-agnostic path like `/about` or `/projects/slug`. */
export function languageAlternates(
  locale: Locale,
  pathWithoutLocale = "/",
): Metadata["alternates"] {
  const enPath = localizedPath("en", pathWithoutLocale);
  const esPath = localizedPath("es", pathWithoutLocale);
  const canonicalPath = localizedPath(locale, pathWithoutLocale);

  return {
    canonical: absoluteUrl(canonicalPath),
    languages: {
      en: absoluteUrl(enPath),
      es: absoluteUrl(esPath),
      "x-default": absoluteUrl(enPath),
    },
  };
}

export function buildOgImage(
  imagePathOrUrl: string = OG_IMAGE.path,
  alt: string = OG_IMAGE.alt,
): NonNullable<Metadata["openGraph"]>["images"] {
  return [
    {
      url: imagePathOrUrl,
      width: OG_IMAGE.width,
      height: OG_IMAGE.height,
      alt,
    },
  ];
}

export function buildPageMetadata(
  locale: Locale,
  page: PageKey,
): Metadata {
  const copy = pagesSeo[locale][page];
  const path = pagePaths[page];
  const url = absoluteUrl(localizedPath(locale, path));
  const site = seo[locale];
  const alternateOg = locale === "en" ? "es_UY" : "en_US";

  return {
    title: { absolute: copy.title },
    description: copy.description,
    keywords: copy.keywords,
    alternates: languageAlternates(locale, path),
    openGraph: {
      type: "website",
      locale: site.ogLocale,
      alternateLocale: [alternateOg],
      url,
      siteName: SITE_NAME,
      title: copy.title,
      description: copy.description,
      images: buildOgImage(OG_IMAGE.path, site.ogAlt),
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [OG_IMAGE.path],
    },
  };
}

export { defaultLocale, localizedPath };
