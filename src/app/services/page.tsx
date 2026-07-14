import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Полный спектр услуг по окнам и дверям: замер, демонтаж, монтаж под ключ, установка откосов и подоконников, гарантийный сервис.",
};

const services = [
  {
    title: "Бесплатный выезд замерщика",
    desc: "Замерщик приедет в любой день - в том числе в выходные и праздники. Произведёт точные замеры проёмов, проконсультирует по выбору конструкции и комплектации, рассчитает стоимость прямо на месте.",
    included: true,
    details: ["Любой день, включая выходные", "Консультация по выбору профиля и стеклопакета", "Расчёт стоимости на месте", "Договор можно подписать на объекте"],
  },
  {
    title: "Демонтаж старых окон",
    desc: "Аккуратный демонтаж деревянных, металлопластиковых или любых других оконных блоков. Вывоз строительного мусора в пределах города - бесплатно.",
    included: true,
    details: ["Любой тип старых конструкций", "Без повреждений отделки", "Вывоз мусора включён"],
  },
  {
    title: "Профессиональный монтаж",
    desc: "Монтаж по ГОСТ 30971-2012 (ГОСТ Р 52749). Используем качественную монтажную пену, паро- и гидроизоляционные ленты. Все щели закрываются - мостиков холода не остаётся.",
    included: false,
    details: ["По ГОСТ 30971 / ГОСТ Р 52749", "Паро- и гидроизоляционные ленты", "Регулировка фурнитуры после монтажа", "Акт выполненных работ"],
  },
  {
    title: "Установка откосов",
    desc: "Установка внутренних откосов из сэндвич-панелей или штукатурных откосов. Гладкая, тёплая и долговечная отделка оконного проёма без трещин.",
    included: false,
    details: ["Сэндвич-панели или штукатурка", "Тёплые - без мостиков холода", "Быстрый монтаж - в тот же день"],
  },
  {
    title: "Установка подоконников и отливов",
    desc: "Подоконники из ПВХ или натурального камня. Наружные отливы из оцинкованной стали с полимерным покрытием. Установка входит в стоимость монтажа при заказе от 2 окон.",
    included: false,
    details: ["ПВХ или камень - на выбор", "Отливы из оцинкованной стали", "Герметичная заделка примыканий"],
  },
  {
    title: "Остекление и обшивка балконов",
    desc: "Полный цикл: тёплое (ПВХ) или холодное (алюминий) остекление лоджии / балкона, монтаж крыши, обшивка стен и потолка вагонкой или панелями ПВХ.",
    included: false,
    details: ["Тёплое и холодное остекление", "Замена холодного на тёплое", "Обшивка, утепление, электрика"],
  },
  {
    title: "Гарантийное обслуживание",
    desc: "В течение гарантийного срока (3 года) устраняем любые неисправности бесплатно. Регулировка, замена уплотнителей, подтяжка фурнитуры.",
    included: true,
    details: ["Гарантия 3 года на изделие и монтаж", "Выезд мастера бесплатно", "Регулировка и ремонт включены"],
  },
  {
    title: "Постгарантийный сервис",
    desc: "После истечения гарантии продолжаем обслуживать все установленные нами конструкции. Ремонт стеклопакетов, замена фурнитуры, уплотнителей, покраска профиля на объекте.",
    included: false,
    details: ["Ремонт стеклопакетов", "Замена фурнитуры и уплотнителей", "Покраска профиля на месте"],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-brand-blue text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold max-w-2xl">Услуги</h1>
          <p className="mt-5 text-white/70 text-lg max-w-xl">
            Полный цикл - от замера до сдачи объекта. Один подрядчик, один договор, одна ответственность.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div key={s.title} className="card p-6">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-heading font-semibold text-brand-blue text-lg leading-snug">{s.title}</h3>
                {s.included && (
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full shrink-0">
                    Бесплатно
                  </span>
                )}
              </div>
              <p className="text-brand-gray text-sm leading-relaxed mb-4">{s.desc}</p>
              <ul className="space-y-1.5">
                {s.details.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm text-brand-blue">
                    <svg className="w-4 h-4 text-brand-red shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-brand-blue rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">Нужна консультация?</h2>
          <p className="text-white/70 max-w-lg mx-auto mb-6">
            Позвоните нам или оставьте заявку - ответим на любые вопросы и рассчитаем стоимость под ваш объект.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Оставить заявку</Link>
            <a href="tel:+78125291104" className="btn-white">+7 (812) 529-11-04</a>
          </div>
        </div>
      </div>
    </div>
  );
}
