import type { Locale } from "../translations/types";
import { localizedPath } from "../i18n/config";
import { OG_IMAGE, SITE_NAME, SITE_URL, seo } from "./seo-constants";

export function personJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: SITE_NAME,
    url: SITE_URL,
    image: OG_IMAGE.url,
    jobTitle: ["Software Developer", "Full Stack Developer", "Data Analyst"],
    description: seo[locale].description,
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "UY",
      addressRegion: "Montevideo",
    },
    sameAs: [
      "https://github.com/antonella-brochini",
      "https://www.linkedin.com/in/antonella-brochini/",
    ],
    knowsAbout: [
      "Software Development",
      "Full Stack Development",
      "Data Analysis",
      "Business Intelligence",
      "Commercial Intelligence",
      "SQL",
      "Python",
      "Power BI",
      "React",
      "Next.js",
      "Artificial Intelligence",
      "TypeScript",
    ],
  };
}

export function websiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: `${SITE_NAME} Portfolio`,
    url: absoluteLocalizedHome(locale),
    description: seo[locale].description,
    inLanguage: locale,
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
  };
}

function absoluteLocalizedHome(locale: Locale) {
  return `${SITE_URL}${localizedPath(locale, "/")}`;
}

export type BreadcrumbItem = {
  name: string;
  /** Locale-prefixed path, e.g. `/en/about`. */
  path: string;
};

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http")
        ? item.path
        : `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function projectJsonLd({
  id,
  title,
  description,
  technologies,
  image,
  url,
  locale,
}: {
  id: string;
  title: string;
  description: string;
  technologies?: string;
  image?: string;
  url: string;
  locale: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#project`,
    name: title,
    description,
    url,
    image: image ?? OG_IMAGE.url,
    author: {
      "@id": `${SITE_URL}/#person`,
    },
    creator: {
      "@id": `${SITE_URL}/#person`,
    },
    inLanguage: locale,
    keywords: technologies,
    identifier: id,
  };
}
