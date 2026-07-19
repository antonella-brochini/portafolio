import { notFound } from "next/navigation";
import Header from "../components/header";
import JsonLd from "../components/JsonLd";
import { LanguageProvider } from "../../context/LanguageContext";
import { isLocale, locales } from "../../i18n/config";
import type { Locale } from "../../translations/types";
import { personJsonLd, websiteJsonLd } from "../seo-jsonld";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;

  return (
    <LanguageProvider locale={locale}>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(locale)};`,
        }}
      />
      <JsonLd data={[personJsonLd(locale), websiteJsonLd(locale)]} />
      <Header />
      <div id="main-content">{children}</div>
    </LanguageProvider>
  );
}
