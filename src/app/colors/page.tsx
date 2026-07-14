import type { Metadata } from "next";
import ColorSwatchGrid from "@/components/ColorSwatchGrid";
import ColorFamilyList from "@/components/ColorFamilyList";
import { popularColors, colorFamilies } from "@/lib/colors";

export const metadata: Metadata = {
  title: "Цветные окна - каталог цветов ламинации",
  description:
    "56 цветов ламинации профиля IVAPER: дуб, серые, белые, коричневые, платина и золото. Окраска в любой цвет по шкале RAL.",
};

export default function ColorsPage() {
  return (
    <div>
      <section className="bg-brand-cream py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-heading">Цветные окна</h1>
          <p className="text-brand-gray mt-2 max-w-2xl">
            Обширная программа цветов ламинации профиля. Окраска в любой цвет по шкале RAL.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-brand-blue font-heading font-bold text-xl mb-6">Популярные цвета</h2>
          <ColorSwatchGrid colors={popularColors} />
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-brand-blue font-heading font-bold text-xl mb-6">Все 56 цветов</h2>
          <ColorFamilyList families={colorFamilies} popularColors={popularColors} />

          <div className="mt-12 pt-8 border-t border-brand-blue/10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <a
              href="/lamination.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm py-2.5 px-5 inline-flex items-center gap-2 w-fit"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
              </svg>
              Скачать PDF со всеми вариантами цветов
            </a>
            <p className="text-brand-gray text-xs max-w-xl">
              Оттенок на экране монитора может отличаться от реального декора. Рекомендуем уточнять цвет
              непосредственно у менеджера перед оформлением заказа.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
