import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_URL } from "./seo-constants";

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
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    id: SITE_URL,
  };
}
