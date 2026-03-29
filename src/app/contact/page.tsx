import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Свяжитесь с ОкнаКредит: заказать замер, получить расчёт или задать вопрос. Работаем Пн–Пт 9–19, Сб 10–17. Замер — в любой день бесплатно.",
};

const contactDetails = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Адрес",
    content: <span>ул. Примерная, д. 12<br />Санкт-Петербург, 195279</span>,
    link: null,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Телефоны",
    content: (
      <div className="flex flex-col gap-1">
        <a href="tel:+78125291104" className="text-brand-navy font-medium hover:text-brand-navyLight transition-colors">+7 (812) 529-11-04</a>
        <a href="tel:+78125291656" className="text-brand-navy font-medium hover:text-brand-navyLight transition-colors">+7 (812) 529-16-56</a>
        <span className="text-xs text-brand-gray">Замерщик: <a href="tel:+79650040000" className="hover:text-brand-navy transition-colors">+7 (965) 004-00-00</a> (ежедневно)</span>
      </div>
    ),
    link: null,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    content: <a href="mailto:info@oknakredit.ru" className="text-brand-navy font-medium hover:text-brand-navyLight transition-colors">info@oknakredit.ru</a>,
    link: null,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Режим работы",
    content: (
      <div>
        <p className="text-brand-navy font-medium">Пн–Пт: 9:00–19:00</p>
        <p className="text-brand-navy font-medium">Сб: 10:00–17:00</p>
        <p className="text-brand-gray text-xs mt-1">Замер — в любой день, включая праздники</p>
      </div>
    ),
    link: null,
  },
];

export default function ContactPage() {
  return (
    <div>
      {/* Page header */}
      <section className="bg-brand-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold">Связаться с нами</h1>
          <p className="mt-3 text-white/70 text-lg max-w-xl">
            Оставьте заявку — перезвоним в течение 30 минут. Или звоните напрямую прямо сейчас.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-semibold text-brand-navy">Контактная информация</h2>
              <p className="text-brand-gray text-sm mt-2">Отвечаем на заявки в течение 30 минут в рабочее время.</p>
            </div>

            <div className="space-y-5">
              {contactDetails.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-navy/5 rounded-lg flex items-center justify-center text-brand-gold shrink-0">
                    {d.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-brand-gray uppercase tracking-wide mb-1">{d.label}</p>
                    {d.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Discount badge */}
            <div className="bg-brand-gold/15 border border-brand-gold/30 rounded-xl p-4">
              <p className="text-brand-navyDark font-semibold text-sm">
                🎁 Скидка 3% при заказе через сайт
              </p>
              <p className="text-brand-gray text-xs mt-1">
                Упомяните при звонке или укажите в форме — скидка применяется автоматически.
              </p>
            </div>

            {/* Map placeholder */}
            <div className="bg-brand-navy/5 rounded-2xl h-48 flex items-center justify-center">
              <div className="text-center text-brand-gray">
                <svg className="w-10 h-10 mx-auto text-brand-navy/20 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-xs">Здесь будет карта</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-card p-8">
            <h2 className="text-2xl font-heading font-semibold text-brand-navy mb-2">Оставить заявку</h2>
            <p className="text-brand-gray text-sm mb-6">Замерщик перезвонит вам и согласует удобное время.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
