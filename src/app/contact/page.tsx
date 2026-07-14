import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Свяжитесь с Окна-Кредит: заказать замер, получить расчёт или задать вопрос. Работаем Пн–Пт 10–18. Замер - в любой день бесплатно.",
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
    content: <span>г. Санкт-Петербург,<br />шоссе Революции, д. 88</span>,
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
        <a href="tel:+78129650040" className="text-brand-blue font-medium hover:text-brand-blueLight transition-colors">+7 (812) 965-00-40</a>
        <a href="tel:+78125291104" className="text-brand-blue font-medium hover:text-brand-blueLight transition-colors">+7 (812) 529-11-04</a>
        <a href="tel:+78125291656" className="text-brand-blue font-medium hover:text-brand-blueLight transition-colors">+7 (812) 529-16-56</a>
        <span className="text-xs text-brand-gray">Замерщик: <a href="tel:+79219640040" className="hover:text-brand-blue transition-colors">+7 (921) 964-00-40</a> (ежедневно)</span>
        <div className="flex gap-3 mt-2">
          <a href="https://wa.me/79219640040" aria-label="WhatsApp" className="text-brand-gray hover:text-brand-blue transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.04 0C5.44 0 .07 5.37.07 12c0 2.11.55 4.17 1.6 6L0 24l6.15-1.62a11.9 11.9 0 0 0 5.89 1.55h.01c6.6 0 11.97-5.37 11.97-12S18.64 0 12.04 0zm0 21.94a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.65.96.97-3.56-.24-.37a9.93 9.93 0 0 1-1.52-5.31c0-5.5 4.48-9.98 9.99-9.98 2.67 0 5.18 1.04 7.06 2.93a9.93 9.93 0 0 1 2.92 7.06c0 5.51-4.48 9.98-9.99 9.98zm5.47-7.48c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.47 0 1.45 1.06 2.86 1.21 3.06.15.2 2.09 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35z"/>
            </svg>
          </a>
          <a href="#" aria-label="MAX" className="text-brand-gray hover:text-brand-blue transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 16.5h-2v-5.19l-3 3.75-3-3.75v5.19h-2v-9h2l3 3.75 3-3.75h2v9z"/>
            </svg>
          </a>
        </div>
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
    content: <a href="mailto:info@oknakredit.spb.ru" className="text-brand-blue font-medium hover:text-brand-blueLight transition-colors">info@oknakredit.spb.ru</a>,
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
        <p className="text-brand-blue font-medium">Офис: Пн–Пт: 10:00–18:00</p>
        <p className="text-brand-blue font-medium">Отвечаем на звонки: Пн-Сб 9:00-20:00</p>
        <p className="text-brand-gray text-xs mt-1">Замер - в любой день, включая праздники</p>
      </div>
    ),
    link: null,
  },
];

export default function ContactPage() {
  return (
    <div>
      {/* Page header */}
      <section className="bg-brand-blue text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold">Связаться с нами</h1>
          <p className="mt-3 text-white/70 text-lg max-w-xl">
            Оставьте заявку - перезвоним в течение 30 минут. Или звоните напрямую прямо сейчас.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-semibold text-brand-blue">Контактная информация</h2>
              <p className="text-brand-gray text-sm mt-2">Отвечаем на заявки в течение 30 минут в рабочее время.</p>
            </div>

            <div className="space-y-5">
              {contactDetails.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-blue/5 rounded-lg flex items-center justify-center text-brand-red shrink-0">
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
            <div className="bg-brand-red/15 border border-brand-red/30 rounded-xl p-4">
              <p className="text-brand-blueDark font-semibold text-sm">
                🎁 Скидка 23% при заказе через сайт
              </p>
              <p className="text-brand-gray text-xs mt-1">
                Упомяните при звонке или укажите в форме - скидка применяется автоматически.
              </p>
            </div>

            {/* Yandex Map */}
            <div className="rounded-2xl overflow-hidden h-48">
              <iframe
                src="https://yandex.ru/map-widget/v1/?text=Санкт-Петербург%2C%20шоссе%20Революции%2C%2088&z=16"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Окна-Кредит на карте — шоссе Революции, д. 88"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-card p-8">
            <h2 className="text-2xl font-heading font-semibold text-brand-blue mb-2">Оставить заявку</h2>
            <p className="text-brand-gray text-sm mb-6">Замерщик перезвонит вам и согласует удобное время.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
