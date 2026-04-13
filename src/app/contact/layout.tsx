import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "../seo-constants";

const path = "/contact";
const url = `${SITE_URL}${path}`;

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE_NAME} — send a message for collaborations, opportunities, or questions about my work.`,
  keywords: [
    SITE_NAME,
    "contact",
    "hire developer",
    "collaboration",
    "get in touch",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: `Contact — ${SITE_NAME}`,
    description: `Reach out to ${SITE_NAME} via the contact form.`,
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
