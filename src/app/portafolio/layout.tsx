import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "../seo-constants";

const path = "/portafolio";
const url = `${SITE_URL}${path}`;

export const metadata: Metadata = {
  title: "Proyectos — Antonella Brochini",
  description:
    "Proyectos y casos de estudio de Antonella Brochini — OrderFlow (SaaS para restaurantes), e-commerce, apps web y desarrollo full-stack con Next.js y React.",
  keywords: [
    SITE_NAME,
    "proyectos desarrolladora Uruguay",
    "OrderFlow SaaS restaurantes",
    "e-commerce Uruguay",
    "Next.js proyectos",
    "casos de estudio desarrollo web",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: `Projects — ${SITE_NAME}`,
    description:
      "Proyectos de Antonella Brochini — OrderFlow, e-commerce y apps web full-stack.",
    url,
    images: [
      {
        url: "/img/hero.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — projects`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects — ${SITE_NAME}`,
    description: `Selected projects and case studies by ${SITE_NAME}.`,
    images: [`${SITE_URL}/img/hero.png`],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
