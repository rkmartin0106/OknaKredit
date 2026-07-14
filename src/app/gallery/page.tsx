import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Галерея работ",
  description:
    "Галерея выполненных объектов Окна-Кредит - металлопластиковые окна, остекление балконов, алюминиевые конструкции в Санкт-Петербурге.",
};

const galleryItems = [
  { id: 1, title: "Квартира в новостройке - Московский р-н", type: "ПВХ-окна «Комфорт»", year: "2024" },
  { id: 2, title: "Частный дом - Всеволожск", type: "Энергосберегающие окна", year: "2024" },
  { id: 3, title: "Остекление лоджии - Невский р-н", type: "Тёплое ПВХ + откосы", year: "2024" },
  { id: 4, title: "Офис - Петроградская сторона", type: "Алюминиевые перегородки", year: "2023" },
  { id: 5, title: "Хрущёвка - Купчино", type: "ПВХ-окна «Стандарт» × 5 шт.", year: "2023" },
  { id: 6, title: "Коттедж - Сестрорецк", type: "ПВХ-окна + входная группа", year: "2023" },
  { id: 7, title: "Остекление балкона - Красносельский р-н", type: "Холодное алюминиевое", year: "2023" },
  { id: 8, title: "Апартаменты - Центральный р-н", type: "Алюминий Slim Line панорамный", year: "2024" },
  { id: 9, title: "Таунхаус - Мурино", type: "ПВХ + металлопластиковые двери", year: "2023" },
];

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-12">
        <h1 className="section-heading">Галерея работ</h1>
        <p className="section-subheading mt-3">
          Выборка выполненных объектов в Санкт-Петербурге и Ленинградской области. Каждый объект - индивидуальный подход.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div key={item.id} className="card group cursor-pointer">
            {/* Image placeholder */}
            <div className="bg-brand-blue/8 h-56 flex items-center justify-center relative overflow-hidden group-hover:bg-brand-blue/12 transition-colors">
              <svg className="w-16 h-16 text-brand-blue/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} />
                <line x1="3" y1="9" x2="21" y2="9" strokeWidth={1.5} />
                <line x1="12" y1="9" x2="12" y2="21" strokeWidth={1.5} />
              </svg>
              <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/40 transition-colors flex items-center justify-center">
                <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                  Смотреть
                </span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs text-brand-red font-semibold uppercase tracking-wider">{item.type} · {item.year}</p>
              <h3 className="text-brand-blue font-semibold mt-1">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-brand-blue/5 rounded-2xl p-8 text-center">
        <p className="text-brand-gray text-sm">
          Хотите обсудить ваш проект?
        </p>
        <Link href="/contact" className="btn-primary mt-4 inline-flex text-sm py-2.5 px-6">
          Обсудить проект
        </Link>
      </div>
    </div>
  );
}
