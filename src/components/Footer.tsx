import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-blueDark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-2xl font-heading font-bold">
              Окна-<span className="text-brand-red">Кредит</span>
            </span>
            <p className="mt-3 text-white/60 text-sm leading-relaxed">
              Производство и установка металлопластиковых окон и дверей. Профили REHAU и IVAPER, фурнитура ROTO FRANK. Работаем без посредников.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://wa.me/79219640040" aria-label="WhatsApp" className="text-white/50 hover:text-brand-red transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 0C5.44 0 .07 5.37.07 12c0 2.11.55 4.17 1.6 6L0 24l6.15-1.62a11.9 11.9 0 0 0 5.89 1.55h.01c6.6 0 11.97-5.37 11.97-12S18.64 0 12.04 0zm0 21.94a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.65.96.97-3.56-.24-.37a9.93 9.93 0 0 1-1.52-5.31c0-5.5 4.48-9.98 9.99-9.98 2.67 0 5.18 1.04 7.06 2.93a9.93 9.93 0 0 1 2.92 7.06c0 5.51-4.48 9.98-9.99 9.98zm5.47-7.48c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.47 0 1.45 1.06 2.86 1.21 3.06.15.2 2.09 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35z"/>
                </svg>
              </a>
              <a href="#" aria-label="MAX" className="text-white/50 hover:text-brand-red transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 16.5h-2v-5.19l-3 3.75-3-3.75v5.19h-2v-9h2l3 3.75 3-3.75h2v9z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4">Продукция</h3>
            <ul className="space-y-2 text-sm text-white/60">
              {[
                ["ПВХ-окна", "/products?cat=pvh"],
                ["Алюминиевые окна", "/products?cat=alyuminiy"],
                ["Остекление балконов", "/products?cat=balkony"],
                ["Металлопластиковые двери", "/products?cat=dveri"],
                ["Офисные перегородки", "/products"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="hover:text-brand-red transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-white/60">
              {[
                ["Бесплатный замер", "/contact"],
                ["Монтаж под ключ", "/services"],
                ["Установка откосов", "/services"],
                ["Демонтаж старых окон", "/services"],
                ["Гарантийный сервис", "/services"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="hover:text-brand-red transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>г. Санкт-Петербург,<br />шоссе Революции, д. 88</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="flex flex-col gap-0.5">
                  <a href="tel:+78129650040" className="hover:text-brand-red transition-colors">+7 (812) 965-00-40</a>
                  <a href="tel:+78125291104" className="hover:text-brand-red transition-colors">+7 (812) 529-11-04</a>
                  <a href="tel:+78125291656" className="hover:text-brand-red transition-colors">+7 (812) 529-16-56</a>
                </div>
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@oknakredit.spb.ru" className="hover:text-brand-red transition-colors">info@oknakredit.spb.ru</a>
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Офис: Пн–Пт 10:00–18:00<br />Отвечаем на звонки:<br />Пн-Сб 9:00–20:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Internal links - районы СПб */}
        <div className="border-t border-white/10 mt-10 pt-8">
          <p className="text-xs text-white/40 mb-3 uppercase tracking-widest font-semibold">Окна по районам СПб</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/40">
            {[
              ["Купчино", "/okna/kupchino"],
              ["Кировский район", "/okna/kirovskiy"],
              ["Невский район", "/okna/nevskiy"],
              ["Московский район", "/okna/moskovskiy"],
              ["Выборгский район", "/okna/vyborgskiy"],
              ["Приморский район", "/okna/primorskiy"],
              ["Калининский район", "/okna/kalininkiy"],
              ["Красногвардейский", "/okna/krasnogvardeyskiy"],
              ["Фрунзенский район", "/okna/frunzenskiy"],
              ["Василеостровский", "/okna/vasileostrovskiy"],
              ["Петроградский", "/okna/petrogradskiy"],
              ["Мурино", "/okna/murino"],
              ["Всеволожск", "/okna/vsevolozhsk"],
            ].map(([label, href]) => (
              <Link key={label} href={href} className="hover:text-white transition-colors">{label}</Link>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Окна-Кредит. Все права защищены.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
