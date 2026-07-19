import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale } from "./i18n/config";
import { negotiateLocale } from "./i18n/routing";

/** Legacy numeric project id → SEO slug. */
const LEGACY_PROJECT_SLUGS: Record<string, string> = {
  "1": "orderflow-app",
  "2": "retail-data-analysis",
  "3": "wine-ecommerce",
  "4": "order-food-app",
  "5": "digital-wallet",
  "6": "aws-app-deployment",
  "7": "terraform-aws-iac",
  "8": "ecommerce-keycloak",
  "9": "one-page-nice-design",
  "10": "reservation-gx",
  "11": "news-website",
  "12": "product-catalog",
  "13": "new-portfolio",
  "14": "portfolio-v1",
  "15": "intelligence-app",
  "16": "superstore-sales-analytics",
  "17": "retail-data-analysis",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const preferred = negotiateLocale(request.headers.get("accept-language"));

  // `/` → preferred locale (default en)
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${preferred}`, request.url));
  }

  // Legacy URL → localized equivalents (301)
  if (pathname === "/aboutt" || pathname.startsWith("/aboutt/")) {
    return NextResponse.redirect(new URL(`/${preferred}/about`, request.url), 301);
  }

  if (pathname === "/contact") {
    return NextResponse.redirect(new URL(`/${preferred}/contact`, request.url), 301);
  }

  if (pathname === "/portafolio" || pathname === "/portafolio/") {
    return NextResponse.redirect(new URL(`/${preferred}/projects`, request.url), 301);
  }

  const legacyProject = pathname.match(/^\/portafolio\/project\/([^/]+)\/?$/);
  if (legacyProject) {
    const idOrSlug = legacyProject[1];
    const slug = LEGACY_PROJECT_SLUGS[idOrSlug] || idOrSlug;
    return NextResponse.redirect(
      new URL(`/${preferred}/projects/${slug}`, request.url),
      301,
    );
  }

  const maybeLocale = pathname.split("/").filter(Boolean)[0];

  // Already localized
  if (isLocale(maybeLocale)) {
    return NextResponse.next();
  }

  // Unknown top-level path without locale → prefix preferred locale
  return NextResponse.redirect(
    new URL(`/${preferred || defaultLocale}${pathname}`, request.url),
  );
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
