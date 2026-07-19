import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import {
  buildPageMetadata,
  localizedPath,
} from "../../seo-constants";
import { breadcrumbJsonLd } from "../../seo-jsonld";
import { resolveLocale, type LocaleParams } from "../../../i18n/routing";
import { getTranslation } from "../../../translations";

export async function generateMetadata({
  params,
}: {
  params: LocaleParams;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return buildPageMetadata(locale, "about");
}

export default async function AboutLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: LocaleParams;
}) {
  const locale = await resolveLocale(params);
  const t = getTranslation(locale);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: t.nav.home, path: localizedPath(locale, "/") },
          { name: t.nav.about, path: localizedPath(locale, "/about") },
        ])}
      />
      {children}
    </>
  );
}
