import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/articles";
import JsonLd, { buildBreadcrumbSchema } from "@/components/JsonLd";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return { title: "Статья не найдена" };
  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.keywords,
    alternates: { canonical: `https://oknakredit.ru/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: ["Окна-Кредит"],
      locale: "ru_RU",
    },
  };
}

// Full content for first article — others are placeholder
function ArticleContent({ slug }: { slug: string }) {
  if (slug === "kak-vybrat-okna-dlya-kvartiry") {
    return (
      <>
        <p>Замена окон — серьёзное вложение, которое прослужит 20–30 лет. Правильный выбор означает тепло, тишину и экономию на отоплении; неправильный — сквозняки, конденсат и регулярные ремонты. В этой статье разбираем всё, что нужно знать перед заказом окон для квартиры в Санкт-Петербурге.</p>

        <h2>1. Профильная система: какую выбрать?</h2>
        <p>Профиль — это рама и створки окна. Для петербургского климата важна многокамерная конструкция: она создаёт воздушные буферы, снижающие теплопотери.</p>
        <ul>
          <li><strong>5-камерный профиль REHAU и IVAPER</strong> — базовый профиль, хорош для дач, кладовых, нежилых помещений.</li>
          <li><strong>6-камерный профиль REHAU и IVAPER</strong> — рекомендован для жилых квартир. Усиленное стальное армирование, лучшая теплоизоляция.</li>
        </ul>

        <h2>2. Стеклопакет: сколько камер нужно?</h2>
        <p>Стеклопакет — главный «теплоизолятор» окна. Для Санкт-Петербурга действует требование: сопротивление теплопередаче — не менее 0,54 м²·°C/Вт по ГОСТ.</p>
        <ul>
          <li><strong>Однокамерный (4-16-4)</strong> — минимальный вариант, подходит для неотапливаемых балконов и дач.</li>
          <li><strong>Двухкамерный (4-10-4-10-4)</strong> — оптимум для квартиры. Хорошая тепло- и звукоизоляция.</li>
          <li><strong>Двухкамерный с i-coating</strong> — добавляет селективное покрытие, снижающее теплопотери до 40%. Рекомендуется для угловых квартир, первых и последних этажей.</li>
        </ul>

        <h2>3. Фурнитура: на чём не стоит экономить</h2>
        <p>Фурнитура определяет удобство эксплуатации и безопасность. ROTO FRANK — мировой стандарт. Периметральное запирание по всему периметру створки исключает деформацию и повышает защиту от взлома до класса RC2.</p>

        <h2>4. Цвет и покрытие профиля</h2>
        <p>Классический белый профиль — самый практичный. Ламинированный профиль (под дерево, антрацит, любой RAL) выглядит эффектно, но стоит на 20–40% дороже.</p>

        <h2>Итого: что заказать для квартиры в СПб</h2>
        <p>Оптимальный выбор: 6-камерный профиль REHAU и IVAPER + двухкамерный стеклопакет с i-coating + фурнитура ROTO FRANK. Стоимость — от 7 500–9 500 ₽/м², срок службы — 25+ лет.</p>
      </>
    );
  }

  return (
    <p className="text-brand-gray italic">
      Полный текст статьи будет опубликован в ближайшее время. Следите за обновлениями.
    </p>
  );
}

export default function BlogArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Organization", name: "Окна-Кредит", url: "https://oknakredit.ru" },
    publisher: {
      "@type": "Organization",
      name: "Окна-Кредит",
      logo: { "@type": "ImageObject", url: "https://oknakredit.ru/images/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://oknakredit.ru/blog/${article.slug}` },
    keywords: article.keywords.join(", "),
    inLanguage: "ru-RU",
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={buildBreadcrumbSchema([
        { name: "Главная", url: "/" },
        { name: "Блог", url: "/blog" },
        { name: article.title, url: `/blog/${article.slug}` },
      ])} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <nav className="text-xs text-brand-gray mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-brand-blue transition-colors">Главная</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-brand-blue transition-colors">Блог</Link>
          <span>/</span>
          <span className="text-brand-blue">{article.category}</span>
        </nav>

        <span className="inline-block bg-brand-red/15 text-brand-blueDark text-xs font-bold px-3 py-1 rounded-full mb-4">
          {article.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-brand-blue leading-snug">
          {article.title}
        </h1>
        <div className="flex items-center gap-4 mt-4 text-xs text-brand-gray flex-wrap">
          <span>Окна-Кредит</span>
          <span>·</span>
          <span>{new Date(article.date).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}</span>
          <span>·</span>
          <span>{article.readTime} чтения</span>
        </div>

        <div className="mt-10 space-y-4 text-brand-gray leading-relaxed
          [&_h2]:text-brand-blue [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:mt-8 [&_h2]:mb-3
          [&_p]:text-brand-gray [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_strong]:text-brand-blue">
          <ArticleContent slug={params.slug} />
        </div>

        <div className="mt-12 bg-brand-blue rounded-2xl p-8 text-center text-white">
          <h2 className="text-xl font-heading font-bold mb-2">Остались вопросы?</h2>
          <p className="text-white/70 text-sm mb-5">Вызовите замерщика бесплатно — он ответит на все вопросы на месте.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-primary text-sm py-2.5 px-6">Заказать замер</Link>
            <Link href="/faq" className="btn-white text-sm py-2.5 px-6">Все вопросы</Link>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="font-heading font-bold text-brand-blue text-xl mb-6">Читайте также</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {articles
              .filter((a) => a.slug !== params.slug)
              .slice(0, 4)
              .map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}`} className="card p-4 group">
                  <span className="text-xs text-brand-red font-semibold">{a.category}</span>
                  <p className="text-brand-blue text-sm font-semibold mt-1 leading-snug group-hover:text-brand-blueLight transition-colors">
                    {a.title}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
