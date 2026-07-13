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
              Производство и установка металлопластиковых окон и дверей. Профили RIHAU и IVAPER, фурнитура ROTO FRANK. Работаем без посредников.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" aria-label="ВКонтакте" className="text-white/50 hover:text-brand-red transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.72-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.408 4 6.986c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.253-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.762-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.745-.576.745z"/>
                </svg>
              </a>
              <a href="#" aria-label="Telegram" className="text-white/50 hover:text-brand-red transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
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
                <a href="mailto:info@oknakredit.ru" className="hover:text-brand-red transition-colors">info@oknakredit.ru</a>
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Пн–Пт: 10:00–18:00<br />Отвечаем Пн-Сб 9:00-20:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Internal links — районы СПб */}
        <div className="border-t border-white/10 mt-10 pt-8">
          <p className="text-xs text-white/40 mb-3 uppercase tracking-widest font-semibold">Окна по районам СПб</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/40">
            {[
              ["Купчино", "/okna/kupchino"],
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
