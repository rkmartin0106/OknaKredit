import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/articles";
import JsonLd, { buildBreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Блог об окнах - советы, гайды и сравнения | Окна-Кредит СПб",
  description:
    "Полезные статьи о выборе окон, стеклопакетов, монтаже и уходе. Как выбрать окна для квартиры, что такое энергосберегающий стеклопакет, как избежать ошибок при замене окон.",
  keywords: [
    "блог об окнах",
    "как выбрать окна спб",
    "какие окна лучше",
    "советы по выбору окон",
    "стеклопакет однокамерный или двухкамерный",
  ],
  alternates: { canonical: "https://oknakredit.ru/blog" },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([
        { name: "Главная", url: "/" },
        { name: "Блог", url: "/blog" },
      ])} />

      <section className="bg-brand-blue text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold">Блог об окнах</h1>
          <p className="mt-3 text-white/70 text-lg max-w-xl">
            Полезные советы, сравнения и гайды от специалистов Окна-Кредит.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((a) => (
            <Link key={a.slug} href={`/blog/${a.slug}`} className="card group flex flex-col">
              {/* Image placeholder */}
              <div className="bg-brand-blue/8 h-44 flex items-center justify-center group-hover:bg-brand-blue/12 transition-colors">
                <svg className="w-14 h-14 text-brand-blue/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs bg-brand-red/15 text-brand-blueDark font-semibold px-2.5 py-1 rounded-full">
                    {a.category}
                  </span>
                  <span className="text-xs text-brand-gray">{a.readTime}</span>
                </div>
                <h2 className="font-heading font-semibold text-brand-blue text-base leading-snug group-hover:text-brand-blueLight transition-colors flex-1">
                  {a.title}
                </h2>
                <p className="text-brand-gray text-sm mt-2 leading-relaxed line-clamp-3">{a.excerpt}</p>
                <p className="text-xs text-brand-gray mt-4">
                  {new Date(a.date).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
