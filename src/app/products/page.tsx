import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products, categoryLabels, type ProductCategory } from "@/lib/products";

export const metadata: Metadata = {
  title: "Каталог продукции",
  description:
    "Металлопластиковые окна, алюминиевые конструкции, остекление балконов и двери. Профили REHAU и IVAPER. Цены от производителя.",
};

const categories: { key: ProductCategory | "all"; label: string }[] = [
  { key: "all",        label: "Вся продукция" },
  { key: "pvh",        label: "ПВХ-окна" },
  { key: "alyuminiy",  label: "Алюминиевые окна" },
  { key: "balkony",    label: "Балконы и лоджии" },
  { key: "dveri",      label: "Двери" },
  { key: "zagorodny",  label: "Загородный дом" },
  { key: "nestandart", label: "Нестандартные формы" },
];

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { cat?: string };
}) {
  const activeCat = searchParams.cat as ProductCategory | undefined;
  const filtered = activeCat
    ? products.filter((p) => p.category === activeCat)
    : products;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Header */}
      <div className="mb-10">
        <h1 className="section-heading">Каталог продукции</h1>
        <p className="section-subheading mt-3">
          Все изделия изготавливаются под заказ в любых размерах. Профили REHAU и IVAPER, фурнитура ROTO FRANK, стеклопакеты на все случаи жизни.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex sm:flex-wrap gap-2 mb-10 overflow-x-auto sm:overflow-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {categories.map(({ key, label }) => (
          <a
            key={key}
            href={key === "all" ? "/products" : `/products?cat=${key}`}
            className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              (key === "all" && !activeCat) || key === activeCat
                ? "bg-brand-blue text-white border-brand-blue"
                : "border-gray-200 text-brand-gray hover:border-brand-blue hover:text-brand-blue"
            }`}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-brand-gray py-20">В данной категории пока нет товаров.</p>
      )}

      {/* CTA */}
      <div className="mt-16 bg-brand-blue rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="text-2xl font-heading font-bold mb-3">Не нашли нужное?</h2>
        <p className="text-white/70 max-w-lg mx-auto mb-6">
          Мы изготавливаем конструкции любой сложности, нестандартных форм и размеров. Свяжитесь с нами - рассчитаем индивидуально.
        </p>
        <a href="/contact" className="btn-primary">Получить расчёт</a>
      </div>
    </div>
  );
}
