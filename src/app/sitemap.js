import { projectsMeta } from "./data/projects";
import { SITE_URL } from "./seo-constants";

/** @returns {import('next').MetadataRoute.Sitemap} */
export default function sitemap() {
  const lastModified = new Date();

  const staticPaths = ["", "/portafolio", "/aboutt", "/contact"];

  const staticEntries = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.85,
  }));

  const projectEntries = projectsMeta.map((project) => ({
    url: `${SITE_URL}/portafolio/project/${project.id}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...projectEntries];
}
