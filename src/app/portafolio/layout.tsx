import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "../seo-constants";

const path = "/portafolio";
const url = `${SITE_URL}${path}`;

export const metadata: Metadata = {
  title: "Projects",
  description: `Selected projects and case studies by ${SITE_NAME} — e-commerce, food ordering apps, DevOps, and full-stack web development.`,
  keywords: [
    SITE_NAME,
    "projects",
    "portfolio work",
    "e-commerce",
    "Next.js projects",
    "case studies",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: `Projects — ${SITE_NAME}`,
    description: `Explore web applications and systems built by ${SITE_NAME}.`,
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
