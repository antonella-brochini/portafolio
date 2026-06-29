import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { SITE_NAME, SITE_URL } from "./seo-constants";

export const metadata: Metadata = {
  title: "Antonella Brochini — Desarrolladora Full-Stack Uruguay",
  description:
    "Portfolio de Antonella Brochini, desarrolladora full-stack de Uruguay. Creadora de OrderFlow, SaaS para restaurantes. Especializada en Next.js, React y TypeScript.",
  keywords: [
    SITE_NAME,
    "desarrolladora full-stack Uruguay",
    "full-stack developer Uruguay",
    "Next.js developer Uruguay",
    "React developer",
    "OrderFlow",
    "SaaS Uruguay",
    "portfolio desarrolladora",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${SITE_NAME} — Portfolio`,
    description:
      "Desarrolladora full-stack de Uruguay. Creadora de OrderFlow, SaaS para restaurantes. Especializada en Next.js, React y TypeScript.",
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
