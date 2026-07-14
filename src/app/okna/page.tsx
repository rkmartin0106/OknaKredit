import type { Metadata } from "next";
import Link from "next/link";
import { districts } from "@/lib/districts";
import JsonLd, { buildBreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Пластиковые окна по районам Санкт-Петербурга | Окна-Кредит",
  description:
    "Выберите свой район СПб - узнайте цены на металлопластиковые окна и закажите бесплатный замер. Работаем во всех районах Петербурга и Ленобласти.",
  keywords: [
    "пластиковые окна по районам спб",
    "окна спб район",
    "металлопластиковые окна все районы спб",
    "установка окон спб районы",
  ],
  alternates: { canonical: "https://oknakredit.ru/okna" },
};

export default function DistrictsIndexPage() {
  const city = districts.filter((d) => d.district !== "Ленинградская область");
  const oblast = districts.filter((d) => d.district === "Ленинградская область");

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([
        { name: "Главная", url: "/" },
        { name: "По районам", url: "/okna" },
      ])} />

      <section className="bg-brand-blue text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold">
            Окна по районам Санкт-Петербурга
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-xl">
            Выбирайте свой район - покажем цены и условия. Замер бесплатный, выезжаем в любой день.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="section-heading mb-6">Районы Санкт-Петербурга</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {city.map((d) => (
            <Link
              key={d.slug}
              href={`/okna/${d.slug}`}
              className="card p-5 flex items-center justify-between group hover:shadow-cardHover transition-shadow"
            >
              <div>
                <p className="font-semibold text-brand-blue group-hover:text-brand-blueLight transition-colors">
                  {d.name}
                </p>
                {d.metro && (
                  <p className="text-xs text-brand-gray mt-0.5">м. {d.metro[0]}</p>
                )}
              </div>
              <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

        <h2 className="section-heading mb-6">Ленинградская область</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {oblast.map((d) => (
            <Link
              key={d.slug}
              href={`/okna/${d.slug}`}
              className="card p-5 flex items-center justify-between group hover:shadow-cardHover transition-shadow"
            >
              <div>
                <p className="font-semibold text-brand-blue group-hover:text-brand-blueLight transition-colors">{d.name}</p>
                <p className="text-xs text-brand-gray mt-0.5">{d.district}</p>
              </div>
              <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
