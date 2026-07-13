import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd, { localBusinessSchema, organizationSchema, websiteSchema } from "@/components/JsonLd";

const BASE_URL = "https://oknakredit.ru";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Пластиковые окна в СПб от производителя | ОкнаКредит",
    template: "%s | ОкнаКредит — окна в СПб",
  },
  description:
    "Металлопластиковые окна в Санкт-Петербурге от производителя. Профиль GEALAN, фурнитура ROTO FRANK. Бесплатный замер в любой день. Монтаж под ключ. Гарантия 5 лет. Цены от 4 900 ₽/м².",
  keywords: [
    "пластиковые окна спб",
    "металлопластиковые окна санкт-петербург",
    "окна пвх цена спб",
    "окна от производителя спб",
    "установка окон спб",
    "замена окон санкт-петербург",
    "бесплатный замер окон спб",
    "окна с установкой спб цены",
    "GEALAN окна спб",
    "остекление балкона спб",
    "окна под ключ спб",
  ],
  authors: [{ name: "ООО «ОкнаКредит»", url: BASE_URL }],
  creator: "ООО «ОкнаКредит»",
  publisher: "ООО «ОкнаКредит»",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: BASE_URL,
    siteName: "ОкнаКредит",
    title: "Пластиковые окна в СПб от производителя | ОкнаКредит",
    description:
      "Металлопластиковые окна в Санкт-Петербурге. Профиль GEALAN, фурнитура ROTO FRANK. Бесплатный замер. Монтаж под ключ. Гарантия 5 лет.",
  },
  alternates: { canonical: BASE_URL },
  other: {
    // Yandex geo-targeting
    "geo.region":    "RU-SPE",
    "geo.placename": "Санкт-Петербург",
    "geo.position":  "59.9311;30.3609",
    "ICBM":          "59.9311, 30.3609",
    // Yandex verification — replace with real token from Яндекс.Вебмастер
    "yandex-verification": "YANDEX_VERIFICATION_TOKEN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
