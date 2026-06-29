import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "../seo-constants";

const path = "/contact";
const url = `${SITE_URL}${path}`;

export const metadata: Metadata = {
  title: "Contacto — Antonella Brochini",
  description:
    "Contactá a Antonella Brochini — desarrolladora full-stack de Uruguay disponible para proyectos freelance, colaboraciones y oportunidades laborales.",
  keywords: [
    SITE_NAME,
    "contratar desarrolladora Uruguay",
    "freelance full-stack Uruguay",
    "contacto desarrolladora web",
    "colaboración proyectos web",
    "hire developer Uruguay",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: `Contact — ${SITE_NAME}`,
    description:
      "Contactá a Antonella Brochini para proyectos freelance, colaboraciones u oportunidades laborales.",
    url,
    images: [
      {
        url: "/img/hero.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — contact`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact — ${SITE_NAME}`,
    description: `Contact ${SITE_NAME} for project inquiries and collaborations.`,
    images: [`${SITE_URL}/img/hero.png`],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
