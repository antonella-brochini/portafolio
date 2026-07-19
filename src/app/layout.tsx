import type { Metadata, Viewport } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import { Oxanium } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import {
  OG_IMAGE,
  SITE_ICON,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
  seo,
} from "./seo-constants";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#100a1f" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: `${SITE_NAME} Portfolio`,
  icons: {
    icon: [
      {
        url: SITE_ICON.path,
        type: SITE_ICON.type,
        sizes: `${SITE_ICON.width}x${SITE_ICON.height}`,
      },
    ],
    apple: [
      {
        url: SITE_ICON.path,
        type: SITE_ICON.type,
        sizes: `${SITE_ICON.width}x${SITE_ICON.height}`,
      },
    ],
    shortcut: [SITE_ICON.path],
  },
  title: {
    default: seo.en.titleDefault,
    template: `%s | ${SITE_NAME}`,
  },
  description: seo.en.description,
  keywords: [...SITE_KEYWORDS],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_UY"],
    siteName: SITE_NAME,
    title: seo.en.title,
    description: seo.en.description,
    images: [
      {
        url: OG_IMAGE.path,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        alt: OG_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.en.title,
    description: seo.en.description,
    images: [OG_IMAGE.path],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

/** Root shell — locale HTML `lang` is set by the [locale] layout provider. */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={oxanium.className} suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
