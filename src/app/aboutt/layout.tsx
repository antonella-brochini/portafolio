import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "../seo-constants";

const path = "/aboutt";
const url = `${SITE_URL}${path}`;

export const metadata: Metadata = {
  title: "Sobre mí — Antonella Brochini",
  description:
    "Antonella Brochini — desarrolladora full-stack de Uruguay. Técnica en Análisis de Sistemas, creadora de OrderFlow. Stack: Next.js, React, TypeScript, Prisma, PostgreSQL.",
  keywords: [
    SITE_NAME,
    "desarrolladora Uruguay",
    "técnica análisis de sistemas Uruguay",
    "full-stack developer",
    "Next.js TypeScript Prisma",
    "OrderFlow creadora",
    "experiencia desarrolladora web",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: `About — ${SITE_NAME}`,
    description:
      "Desarrolladora full-stack de Uruguay. Creadora de OrderFlow. Stack: Next.js, React, TypeScript, Prisma y PostgreSQL.",
    url,
    images: [
      {
        url: "/img/hero.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — about`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About — ${SITE_NAME}`,
    description: `Background and tech stack of ${SITE_NAME}.`,
    images: [`${SITE_URL}/img/hero.png`],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
