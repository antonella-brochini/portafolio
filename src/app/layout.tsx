import type { Metadata } from "next";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import { Oxanium } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "../context/LanguageContext";
import { SITE_NAME, SITE_URL } from "./seo-constants";

const defaultDescription =
  "Official portfolio of Antonella Brochini — software developer specializing in modern web applications, e-commerce, and cloud solutions.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/favicon.ico",
  },
  title: {
    default: `${SITE_NAME} — Portfolio | Developer`,
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultDescription,
  keywords: [
    SITE_NAME,
    "portfolio",
    "developer",
    "full-stack",
    "Next.js",
    "React",
    "TypeScript",
    "web development",
    "Uruguay",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Portfolio`,
    description: defaultDescription,
    images: [
      {
        url: "/img/hero.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Portfolio`,
    description: defaultDescription,
    images: [`${SITE_URL}/img/hero.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
};

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={oxanium.className} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
