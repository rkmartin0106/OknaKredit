import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "О компании",
  description:
    "Окна-Кредит — производитель металлопластиковых окон с 2009 года. Профиль GEALAN, фурнитура ROTO FRANK. Более 2000 выполненных объектов.",
};

const milestones = [
  { year: "2009", event: "Основание компании. Запуск собственного производства металлопластиковых окон." },
  { year: "2012", event: "Расширение линейки: алюминиевые конструкции и остекление балконов." },
  { year: "2015", event: "500 монтажей в год. Открытие собственного сервисного центра." },
  { year: "2018", event: "Запуск онлайн-расчёта и онлайн-заявок. Выход в Ленинградскую область." },
  { year: "2023", event: "Более 2 000 выполненных объектов. Официальный партнёр GEALAN и ROTO FRANK." },
];

const certifications = [
  "Профиль GEALAN — сертификат соответствия Госстрой",
  "Фурнитура ROTO FRANK — антивзломный класс RC2",
  "Стеклопакеты — ГОСТ 24866-2014",
  "Монтаж — ГОСТ 30971-2012 (ГОСТ Р 52749)",
  "Противопожарные конструкции — ТУ, сертификат пожарной безопасности",
];

const team = [
  { name: "Александр В.", role: "Директор", desc: "15 лет в оконном бизнесе. Лично контролирует качество каждой партии." },
  { name: "Геннадий К.", role: "Старший замерщик", desc: "Выезжает в любой день, включая выходные. Более 3 000 выполненных замеров." },
  { name: "Виктор М.", role: "Главный монтажник", desc: "Сертифицированный монтажник по ГОСТ 30971. Ведёт самые сложные объекты." },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-blue text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold max-w-2xl leading-tight">
            Производим окна с 2009 года
          </h1>
          <p className="mt-5 text-white/70 text-lg max-w-2xl leading-relaxed">
            Окна-Кредит — прямой производитель металлопластиковых окон и дверей. Работаем без посредников, поэтому вы платите только за изделие и работу — без дилерской наценки.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
            {[
              ["2 000+", "объектов"],
              ["15+", "лет опыта"],
              ["60+", "сотрудников"],
              ["3 года", "гарантия"],
            ].map(([val, label]) => (
              <div key={label}>
                <p className="text-3xl font-bold text-brand-red">{val}</p>
                <p className="text-white/60 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-heading">Наша история</h2>
            <div className="space-y-4 mt-6 text-brand-gray leading-relaxed">
              <p>
                Окна-Кредит появился из простой идеи: зачем переплачивать дилерам, если можно купить окно напрямую у того, кто его делает? В 2009 году мы запустили собственное производство на немецком оборудовании с профилем GEALAN и фурнитурой ROTO FRANK.
              </p>
              <p>
                С тех пор мы выполнили более 2 000 объектов — от замены одного окна в квартире до полного остекления многоквартирных домов и коммерческих помещений. Каждый заказ ведёт персональный менеджер от замера до подписания акта сдачи-приёмки.
              </p>
              <p>
                Сегодня в команде более 60 человек: инженеры-проектировщики, производственники, замерщики, монтажники и сервисная служба. Мы работаем в Санкт-Петербурге и Ленинградской области, выполняем замеры в любой день.
              </p>
            </div>
          </div>
          <div className="bg-brand-blue/5 rounded-2xl h-80 flex items-center justify-center">
            <svg className="w-24 h-24 text-brand-blue/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">История развития</h2>
          <div className="max-w-2xl mx-auto">
            <div className="relative border-l-2 border-brand-red/30 pl-8 space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="relative">
                  <div className="absolute -left-10 top-0.5 w-4 h-4 rounded-full bg-brand-red" />
                  <p className="text-brand-red font-bold text-sm mb-1">{m.year}</p>
                  <p className="text-brand-blue font-medium">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container-section">
        <div className="text-center mb-10">
          <h2 className="section-heading">Наша команда</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((t) => (
            <div key={t.name} className="card p-6 text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-blue/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-brand-blue text-lg">{t.name}</h3>
              <p className="text-brand-red text-xs font-semibold uppercase tracking-wider mt-1">{t.role}</p>
              <p className="text-brand-gray text-sm mt-3 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Сертификаты и стандарты</h2>
            <p className="section-subheading mx-auto">Соответствие ГОСТ, немецким стандартам и требованиям Госстроя.</p>
          </div>
          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((c) => (
              <div key={c} className="flex items-start gap-3 bg-brand-cream rounded-xl p-4">
                <svg className="w-5 h-5 text-brand-red shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-brand-blue text-sm font-medium">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold">Готовы работать с нами?</h2>
          <p className="mt-3 text-white/70 max-w-lg mx-auto">Вызовите замерщика бесплатно — в любой день, включая выходные.</p>
          <Link href="/contact" className="mt-7 inline-flex btn-primary">
            Заказать замер
          </Link>
        </div>
      </section>
    </div>
  );
}
