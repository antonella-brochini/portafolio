import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { SITE_NAME, SITE_URL } from "./seo-constants";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Portfolio of Antonella Brochini — full-stack developer building modern web apps with Next.js, React, and cloud technologies.",
  keywords: [
    SITE_NAME,
    "developer portfolio",
    "full-stack developer",
    "Next.js",
    "React",
    "web development",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${SITE_NAME} — Portfolio`,
    description:
      "Designing digital experiences beyond limits. Building today, leading tomorrow.",
    url: SITE_URL,
    images: [
      {
        url: "/img/hero.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} portfolio hero`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Portfolio`,
    description:
      "Designing digital experiences beyond limits. Full-stack developer portfolio.",
    images: [`${SITE_URL}/img/hero.png`],
  },
};

export default function Home() {
  return <HomeClient />;
}
