import {
  projectsMeta,
  getProjectSlug,
} from "./data/projects";
import { SITE_URL, absoluteUrl, localizedPath } from "./seo-constants";
import { locales } from "../i18n/config";

/** @returns {import('next').MetadataRoute.Sitemap} */
export default function sitemap() {
  const lastModified = new Date();

  const staticPaths = ["/", "/about", "/projects", "/contact"];

  /** @type {import('next').MetadataRoute.Sitemap} */
  const entries = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      const localized = localizedPath(locale, path);
      const url = absoluteUrl(localized);
      entries.push({
        url,
        lastModified,
        changeFrequency: path === "/" ? "weekly" : "monthly",
        priority: path === "/" ? 1 : path === "/projects" ? 0.9 : 0.8,
        alternates: {
          languages: {
            en: absoluteUrl(localizedPath("en", path)),
            es: absoluteUrl(localizedPath("es", path)),
            "x-default": absoluteUrl(localizedPath("en", path)),
          },
        },
      });
    }

    for (const project of projectsMeta) {
      const path = `/projects/${getProjectSlug(project)}`;
      entries.push({
        url: absoluteUrl(localizedPath(locale, path)),
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: {
            en: absoluteUrl(localizedPath("en", path)),
            es: absoluteUrl(localizedPath("es", path)),
            "x-default": absoluteUrl(localizedPath("en", path)),
          },
        },
      });
    }
  }

  // Also list bare site root for crawlers that hit the domain
  entries.unshift({
    url: SITE_URL,
    lastModified,
    changeFrequency: "weekly",
    priority: 1,
    alternates: {
      languages: {
        en: absoluteUrl(localizedPath("en", "/")),
        es: absoluteUrl(localizedPath("es", "/")),
        "x-default": absoluteUrl(localizedPath("en", "/")),
      },
    },
  });

  return entries;
}
