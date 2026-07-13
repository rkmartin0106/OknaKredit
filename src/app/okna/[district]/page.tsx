import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDistrictBySlug, districts } from "@/lib/districts";
import JsonLd, { buildFaqSchema, buildBreadcrumbSchema, localBusinessSchema } from "@/components/JsonLd";

interface Props {
  params: { district: string };
}

export function generateStaticParams() {
  return districts.map((d) => ({ district: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const d = getDistrictBySlug(params.district);
  if (!d) return { title: "Страница не найдена" };

  const title = `Пластиковые окна ${d.nameIn} — цены от производителя | Окна-Кредит`;
  const description = `Металлопластиковые окна ${d.nameIn} (${d.district}). Профили REHAU и IVAPER, установка под ключ. Бесплатный замер — выезжаем ${d.nameIn}. Цены от 4 900 ₽/м². Гарантия 3 года.`;

  return {
    title,
    description,
    keywords: [
      `пластиковые окна ${d.name.toLowerCase()}`,
      `окна пвх ${d.name.toLowerCase()}`,
      `металлопластиковые окна ${d.name.toLowerCase()}`,
      `установка окон ${d.name.toLowerCase()}`,
      `замена окон ${d.name.toLowerCase()}`,
      `замер окон ${d.name.toLowerCase()}`,
      ...d.keywords,
    ],
    alternates: { canonical: `https://oknakredit.ru/okna/${d.slug}` },
    openGraph: { title, description, locale: "ru_RU" },
  };
}

const districtFaqs = (dName: string, dNameIn: string) => [
  {
    q: `Выезжаете ли вы ${dNameIn} для замера окон?`,
    a: `Да, выезжаем ${dNameIn} бесплатно. Замерщик приедет в удобное для вас время — в том числе в выходные и праздничные дни. Позвоните по номеру +7 (812) 529-11-04 или оставьте заявку на сайте.`,
  },
  {
    q: `Сколько стоят пластиковые окна ${dNameIn}?`,
    a: `Стоимость металлопластиковых окон ${dNameIn} — от 4 900 ₽/м² для окна «Стандарт» с однокамерным стеклопакетом. Двухкамерный вариант «Комфорт» — от 7 200 ₽/м². Точный расчёт делается после бесплатного замера.`,
  },
  {
    q: `Как быстро установят окна ${dNameIn}?`,
    a: `Производство занимает 3–7 рабочих дней. Монтаж квартиры (4–6 окон) выполняется за один день. В стоимость входит демонтаж старых окон, установка, откосы, подоконники и вывоз мусора.`,
  },
];

export default function DistrictPage({ params }: Props) {
  const d = getDistrictBySlug(params.district);
  if (!d) notFound();

  const faqs = districtFaqs(d.name, d.nameIn);

  // Localised schema copy
  const localSchema = {
    ...localBusinessSchema,
    description: `Производство и установка металлопластиковых окон ${d.nameIn}. Профили REHAU и IVAPER, фурнитура ROTO FRANK. Бесплатный замер. Монтаж под ключ.`,
    areaServed: [
      { "@type": "City", name: "Санкт-Петербург" },
      { "@type": "Place", name: d.name },
    ],
  };

  return (
    <>
      <JsonLd data={localSchema} />
      <JsonLd data={buildFaqSchema(faqs)} />
      <JsonLd data={buildBreadcrumbSchema([
        { name: "Главная", url: "/" },
        { name: "Окна по районам", url: "/okna" },
        { name: d.name, url: `/okna/${d.slug}` },
      ])} />

      {/* Hero */}
      <section className="bg-brand-blue text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-white/50 mb-4 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <Link href="/okna" className="hover:text-white transition-colors">По районам</Link>
            <span>/</span>
            <span className="text-white/80">{d.name}</span>
          </nav>
          <p className="text-brand-red text-sm font-semibold uppercase tracking-wider mb-3">{d.district}</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight max-w-2xl">
            Пластиковые окна {d.nameIn}
          </h1>
          <p className="mt-5 text-white/70 text-lg max-w-xl">
            Производим и устанавливаем металлопластиковые окна и двери {d.nameIn}. Бесплатный замер — выезжаем {d.nameIn} в любой день.
          </p>
          {d.metro && (
            <p className="mt-3 text-white/50 text-sm">
              Ближайшее метро: {d.metro.join(", ")}
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Бесплатный замер {d.nameIn}</Link>
            <a href="tel:+78125291104" className="btn-white">+7 (812) 529-11-04</a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="section-heading mb-10">
          Почему нас выбирают {d.nameIn}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Бесплатный замер", desc: `Замерщик приезжает ${d.nameIn} в любой день, включая выходные. Расчёт на месте.` },
            { title: "Монтаж за 1 день", desc: "Демонтаж старых окон, монтаж, откосы, подоконники — всё за один визит." },
            { title: "Профили REHAU и IVAPER", desc: "Немецкий ПВХ-профиль с гарантированным сроком службы 50 условных лет. Сертификат Госстрой." },
            { title: "Фурнитура ROTO FRANK", desc: "Периметральное запирание, двухплоскостное прижатие. Антивзломный класс RC2." },
            { title: "Цены без посредников", desc: "Поставляем напрямую с завода — экономия до 30% по сравнению с дилерами." },
            { title: "Гарантия 3 года", desc: "На изделия и монтажные работы. Гарантийный сервис — бесплатно." },
          ].map((f) => (
            <div key={f.title} className="card p-6">
              <h3 className="font-semibold text-brand-blue mb-2">{f.title}</h3>
              <p className="text-brand-gray text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prices */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-8">
            Цены на окна {d.nameIn}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-blue text-white">
                  <th className="text-left px-4 py-3 rounded-tl-lg">Тип окна</th>
                  <th className="text-left px-4 py-3">Стеклопакет</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg">Цена от</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["«Стандарт» ПВХ REHAU и IVAPER",       "Однокамерный 4-16-4",        "4 900 ₽/м²"],
                  ["«Комфорт» ПВХ REHAU и IVAPER",        "Двухкамерный 4-10-4-10-4",   "7 200 ₽/м²"],
                  ["Энергосберегающее REHAU и IVAPER",    "Двухкамерный с i-coating",   "9 800 ₽/м²"],
                  ["Алюминиевое Slim Line (терморазрыв)", "Двухкамерный",               "12 500 ₽/м²"],
                ].map(([name, glass, price], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-brand-cream" : "bg-white"}>
                    <td className="px-4 py-3 font-medium text-brand-blue">{name}</td>
                    <td className="px-4 py-3 text-brand-gray">{glass}</td>
                    <td className="px-4 py-3 font-semibold text-brand-blue">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-brand-gray mt-3">* Цены указаны на изделие без монтажа. Точный расчёт после бесплатного замера.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="section-heading mb-8">Часто задают вопросы про окна {d.nameIn}</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white rounded-xl shadow-card border border-gray-100">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 list-none">
                <span className="font-semibold text-brand-blue text-sm md:text-base pr-4">{faq.q}</span>
                <svg className="w-5 h-5 text-brand-red shrink-0 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-brand-gray text-sm leading-relaxed border-t border-gray-100 pt-3">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-red py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-white">
            Нужны окна {d.nameIn}?
          </h2>
          <p className="mt-3 text-white/70 text-lg max-w-lg mx-auto">
            Оставьте заявку — замерщик приедет {d.nameIn} бесплатно и рассчитает стоимость прямо на месте.
          </p>
          <div className="mt-7 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-brand-red">
              Заказать замер {d.nameIn}
            </Link>
            <a href="tel:+78125291104" className="inline-flex items-center gap-2 bg-brand-blueDark text-white font-semibold px-8 py-3 rounded-md hover:bg-brand-blue transition-colors">
              +7 (812) 529-11-04
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
