import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "../seo-constants";

const path = "/aboutt";
const url = `${SITE_URL}${path}`;

export const metadata: Metadata = {
  title: "About",
  description: `${SITE_NAME} — background, tech stack, mindset, and how I work as a software developer.`,
  keywords: [
    SITE_NAME,
    "about",
    "developer bio",
    "tech stack",
    "skills",
    "experience",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: `About — ${SITE_NAME}`,
    description: `Learn more about ${SITE_NAME}: skills, experience, and approach to building software.`,
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
