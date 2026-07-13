import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "OknaKredit — Металлопластиковые окна от производителя в СПб",
  description:
    "Производство и установка металлопластиковых окон, алюминиевых конструкций и остекления балконов. Профили REHAU и IVAPER. Бесплатный замер. Монтаж под ключ. Гарантия 3 года.",
};

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Немецкое качество",
    desc: "Профили REHAU и IVAPER со сроком службы 50 условных лет. Фурнитура ROTO FRANK с запором по периметру. Микропроветривание включено.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Прямо от производителя",
    desc: "Никаких посредников. Поставляем окна напрямую с завода, доставляем и устанавливаем — экономия до 30% по сравнению с рыночными ценами.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Замер бесплатно",
    desc: "Выезд замерщика — бесплатно в любой день, включая выходные и праздники. Замер и консультация прямо у вас дома.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: "Монтаж под ключ",
    desc: "Полный цикл: демонтаж старых окон, монтаж, установка откосов, подоконников и отливов. Вывоз мусора.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Гарантия 3 года",
    desc: "Официальная гарантия на изделия и монтаж. Бесплатное гарантийное и постгарантийное обслуживание.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Рассрочка и кредит",
    desc: "Окна в рассрочку без переплаты или в кредит от 6 до 36 месяцев.",
  },
];

const testimonials = [
  {
    name: "Анна К.",
    location: "Санкт-Петербург",
    text: "Заменили 8 окон в квартире. Замерщик приехал на следующий день после звонка, договор подписали прямо дома. Монтажники работали аккуратно, убрали всё за собой. Очень довольна!",
    stars: 5,
  },
  {
    name: "Игорь С.",
    location: "Ленинградская область",
    text: "Заказывали остекление лоджии с утеплением. Сделали за один день — демонтаж, монтаж ПВХ-конструкции и откосы. Качество профиля REHAU заметно даже на ощупь.",
    stars: 5,
  },
  {
    name: "Марина Т.",
    location: "Санкт-Петербург",
    text: "Брали окна в кредит, оформили прямо на месте без беготни по банкам. Энергосберегающие стеклопакеты — счета за отопление реально снизились. Рекомендую!",
    stars: 5,
  },
];

const process = [
  { step: "01", title: "Заявка и замер", desc: "Оставьте заявку — замерщик приедет в удобное время бесплатно и рассчитает стоимость." },
  { step: "02", title: "Договор и производство", desc: "Подписываем договор, запускаем изготовление. Срок производства — от 5 рабочих дней." },
  { step: "03", title: "Монтаж под ключ", desc: "Демонтаж, монтаж окон, установка откосов, подоконников, отливов. Уборка мусора." },
  { step: "04", title: "Сдача и гарантия", desc: "Принимаете работу, получаете гарантийный талон. Сервис доступен в любое время." },
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-red text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              Производитель · Бесплатный замер · Гарантия 3 года
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
              Металлопластиковые окна от производителя
            </h1>
            <p className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl">
              Профили REHAU и IVAPER, фурнитура ROTO FRANK, стеклопакеты на все случаи жизни. Монтаж под ключ без посредников — вы экономите до 30%.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-base py-3.5 px-8">
                Вызвать замерщика бесплатно
              </Link>
              <Link href="/products" className="btn-white text-base py-3.5 px-8">
                Смотреть продукцию
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-white/60 text-sm">
              {[
                ["2500+", "выполненных объектов"],
                ["20+", "лет на рынке"],
                ["3 года", "гарантия"],
                ["3%", "скидка с сайта"],
              ].map(([val, label]) => (
                <div key={label}>
                  <span className="text-2xl font-bold text-white">{val}</span>
                  <p>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-section">
        <div className="text-center mb-12">
          <h2 className="section-heading">Почему выбирают Окна-Кредит?</h2>
          <p className="section-subheading mx-auto">
            Работаем напрямую с заказчиком — без дилеров, без накруток. Только немецкое качество по честной цене.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="flex gap-4">
              <div className="text-brand-red shrink-0 mt-1">{b.icon}</div>
              <div>
                <h3 className="font-semibold text-brand-blue text-lg">{b.title}</h3>
                <p className="text-brand-gray text-sm mt-1 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <h2 className="section-heading">Популярная продукция</h2>
              <p className="text-brand-gray mt-2">Самые востребованные решения для дома и офиса.</p>
            </div>
            <Link href="/products" className="btn-outline text-sm py-2 px-5">
              Весь каталог
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-brand-blue py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Как мы работаем</h2>
            <p className="mt-3 text-white/60 max-w-xl mx-auto">Весь процесс — от звонка до готового результата — без лишних хлопот для вас.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-14 h-14 rounded-full border-2 border-brand-red text-brand-red font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {p.step}
                </div>
                <h3 className="text-white font-semibold mb-2">{p.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-blueDark">
            Хотите узнать точную стоимость?
          </h2>
          <p className="mt-3 text-brand-blueDark/70 text-lg max-w-xl mx-auto">
            Вызовите замерщика бесплатно — приедем в удобное время, измерим проёмы и рассчитаем стоимость.
          </p>
          <div className="mt-7 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-outline border-brand-blueDark text-brand-blueDark hover:bg-brand-blueDark hover:text-white text-base py-3.5 px-10">
              Заказать замер
            </Link>
            <a href="tel:+78129650040" className="inline-flex items-center gap-2 bg-brand-blueDark text-white font-semibold px-8 py-3.5 rounded-md hover:bg-brand-blue transition-colors text-base">
              +7 (812) 965-00-40
            </a>
            <a href="tel:+78125291104" className="inline-flex items-center gap-2 bg-brand-blueDark text-white font-semibold px-8 py-3.5 rounded-md hover:bg-brand-blue transition-colors text-base">
              +7 (812) 529-11-04
            </a>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="container-section">
        <div className="text-center mb-10">
          <h2 className="section-heading">Используемые материалы</h2>
          <p className="section-subheading mx-auto">Только проверенные немецкие компоненты с подтверждёнными сертификатами.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Профили REHAU и IVAPER",
              desc: "Многокамерная конструкция, оцинкованное стальное армирование, срок службы 50 условных лет. Сертификат соответствия Госстрой.",
            },
            {
              name: "Фурнитура ROTO FRANK",
              desc: "С запором по периметру. Микропроветривание включено. Двухплоскостное прижатие одной ручкой. Антивзломная защита. Плавная регулировка прижима и положения створки.",
            },
            {
              name: "Стеклопакеты",
              desc: "Однокамерные, двухкамерные, энергосберегающие (селективное i-покрытие), мультифункциональные, шумоподавляющие, триплекс, закалённое стекло. Заполнение камер аргоном.",
            },
          ].map((b) => (
            <div key={b.name} className="bg-white rounded-xl shadow-card p-6">
              <div className="mb-3">
                <h3 className="font-heading font-semibold text-brand-blue text-lg">{b.name}</h3>
              </div>
              <p className="text-brand-gray text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Отзывы клиентов</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="card p-6">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-brand-gray text-sm leading-relaxed">&laquo;{t.text}&raquo;</p>
                <div className="mt-4 font-semibold text-brand-blue text-sm">
                  {t.name} <span className="font-normal text-brand-gray">— {t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
