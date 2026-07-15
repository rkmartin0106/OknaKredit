import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "О компании",
  description:
    "Окна-Кредит - производитель металлопластиковых окон с 2009 года. Профили REHAU и IVAPER, фурнитура ROTO FRANK. Более 2500 выполненных объектов.",
};

const certifications = [
  "Профили REHAU и IVAPER - сертификат соответствия Госстрой",
  "Фурнитура ROTO FRANK - антивзломный класс RC2",
  "Стеклопакеты - ГОСТ 24866-2014",
  "Монтаж - ГОСТ 30971-2012",
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
      <section data-header-theme="dark" className="relative overflow-hidden text-white min-h-[420px] md:min-h-[480px] lg:min-h-[560px] flex items-center py-16 md:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.png"
            alt="Производство металлопластиковых окон - завод Окна-Кредит"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(33,7,6,0.94) 0%, rgba(33,7,6,0.85) 32%, rgba(33,7,6,0.4) 58%, rgba(33,7,6,0.15) 80%), linear-gradient(to top, rgba(33,7,6,0.6) 0%, rgba(33,7,6,0) 40%)",
          }}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold max-w-2xl leading-tight">
            Поставляем окна с 2006 года
          </h1>
          <p className="mt-5 text-white/70 text-lg max-w-2xl leading-relaxed">
            Мы поставляем металлопластиковые окна и двери напрямую от завода. Работаем без посредников, поэтому вы платите только за изделие и работу - без дилерской наценки.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 max-w-2xl">
            {[
              ["2500+", "объектов"],
              ["20+", "лет опыта"],
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
                Окна-Кредит появился из простой идеи: зачем переплачивать дилерам, если можно купить окно напрямую у того, кто его делает? С 2006 года мы поставляем металлопластиковые окна и двери ПВХ напрямую с завода - по ценам производителя, без дилерской наценки. Работаем с профилями REHAU и IVAPER и фурнитурой ROTO FRANK.
              </p>
              <p>
                Мы выполнили более 2500 объектов в Санкт-Петербурге и Ленинградской области - от замены одного окна в квартире до полного остекления домов и коммерческих помещений. Каждый заказ ведёт персональный менеджер от замера до подписания акта сдачи-приёмки.
              </p>
              <p>
                Работаем по всему Санкт-Петербургу и Ленинградской области, выполняем замер в любой день, включая выходные.
              </p>
            </div>
          </div>
          <div className="bg-brand-blue/5 rounded-2xl h-80 flex items-center justify-center p-8">
            <Image
              src="/images/logo.png"
              alt="Окна-Кредит"
              width={1187}
              height={603}
              className="max-w-full max-h-full object-contain"
            />
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
          <p className="mt-3 text-white/70 max-w-lg mx-auto">Вызовите замерщика бесплатно - в любой день, включая выходные.</p>
          <Link href="/contact" className="mt-7 inline-flex btn-primary">
            Заказать замер
          </Link>
        </div>
      </section>
    </div>
  );
}
