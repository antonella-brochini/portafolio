import type { MetadataRoute } from "next";
import { SITE_ICON, SITE_NAME, SITE_URL } from "./seo-constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Portfolio`,
    short_name: SITE_NAME,
    description:
      "Software Developer & Data Analyst specialized in Commercial Intelligence.",
    start_url: "/",
    display: "standalone",
    background_color: "#100a1f",
    theme_color: "#9841ff",
    lang: "en",
    dir: "ltr",
    categories: ["portfolio", "developer", "business"],
    icons: [
      {
        src: SITE_ICON.path,
        sizes: `${SITE_ICON.width}x${SITE_ICON.height}`,
        type: SITE_ICON.type,
        purpose: "any",
      },
      {
        src: SITE_ICON.path,
        sizes: `${SITE_ICON.width}x${SITE_ICON.height}`,
        type: SITE_ICON.type,
        purpose: "maskable",
      },
    ],
    id: SITE_URL,
  };
}
