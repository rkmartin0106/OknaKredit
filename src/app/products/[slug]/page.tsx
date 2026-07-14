import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products, categoryLabels } from "@/lib/products";
import JsonLd, { buildProductSchema, buildBreadcrumbSchema } from "@/components/JsonLd";
import ProductHeroDetail, { HeroFeature } from "@/components/ProductHeroDetail";
import {
  ThermometerIcon,
  ShieldCheckIcon,
  RulerIcon,
  LockIcon,
  SlidersIcon,
  SunIcon,
  ShapesIcon,
  PencilRulerIcon,
  CheckCircleIcon,
} from "@/components/icons";

interface Props {
  params: { slug: string };
}

// Slugs that use the photo hero + modal treatment, with their page-specific copy.
// (Not part of the core product data model - this is presentation-only content.)
const heroDetailConfig: Record<
  string,
  { title: string; lede: string; features: HeroFeature[]; heroImage?: string; align?: "left" | "right" }
> = {
  "osteklenie-balkona": {
    title: "Балконы под ключ",
    lede: "Остекление и отделка балконов и лоджий. Тёплое и холодное остекление. Расширение пространства и защита от непогоды и шума.",
    features: [
      { icon: <ThermometerIcon />, text: "Тёплое и холодное остекление" },
      { icon: <ShieldCheckIcon />, text: "Защита от шума, ветра и осадков" },
      { icon: <RulerIcon />, text: "Индивидуальные решения под ваш дом" },
    ],
  },
  "vkhodnaya-gruppa": {
    title: "Двери под ключ",
    lede: "Входные и балконные двери из ПВХ-профилей REHAU и IVAPER с усиленным армированием. Многоточечное запирание ROTO FRANK. Стеклопакет в комплектации по вашему выбору.",
    features: [
      { icon: <LockIcon />, text: "Многоточечный замок ROTO FRANK" },
      { icon: <ShieldCheckIcon />, text: "Усиленное стальное армирование" },
      { icon: <SlidersIcon />, text: "Левое, правое или раздвижное открывание" },
    ],
    heroImage: "/images/products/door-hero.jpg",
  },
  "panoramnoe-osteklenie": {
    title: "Панорамное остекление",
    lede: "Светопрозрачные конструкции для загородных домов и дач. Большие пролёты, минимум профиля, максимум вида.",
    features: [
      { icon: <SunIcon />, text: "Максимум естественного света" },
      { icon: <ThermometerIcon />, text: "Энергоэффективные стеклопакеты" },
      { icon: <RulerIcon />, text: "Расчёт под ваш проект" },
    ],
    heroImage: "/images/products/panorama-hero.jpg",
    align: "right",
  },
  "okna-nestandartnoy-formy": {
    title: "Окна нестандартной формы",
    lede: "Арочные, трапециевидные, треугольные, круглые. Изготавливаем по вашим чертежам - любая геометрия проёма.",
    features: [
      { icon: <ShapesIcon />, text: "Любая геометрия проёма" },
      { icon: <PencilRulerIcon />, text: "Изготовление по чертежам" },
      { icon: <CheckCircleIcon />, text: "Профили REHAU и IVAPER" },
    ],
  },
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Товар не найден" };
  return {
    title: `${product.name} - цена в СПб, купить от производителя`,
    description: `${product.shortDesc} Профили REHAU и IVAPER, фурнитура ROTO FRANK. Цена ${product.price}. Бесплатный замер в СПб. Монтаж под ключ. Гарантия 3 года.`,
    keywords: [
      product.name.toLowerCase(),
      `купить ${product.name.toLowerCase()} спб`,
      `${product.name.toLowerCase()} цена`,
      `${categoryLabels[product.category].toLowerCase()} спб`,
      `${categoryLabels[product.category].toLowerCase()} от производителя`,
    ],
    alternates: { canonical: `https://oknakredit.ru/products/${product.slug}` },
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const heroDetail = heroDetailConfig[product.slug];
  if (heroDetail) {
    const hasHeroImage = fs.existsSync(
      path.join(process.cwd(), "public", heroDetail.heroImage ?? product.image)
    );
    return (
      <>
        <JsonLd data={buildProductSchema(product)} />
        <JsonLd data={buildBreadcrumbSchema([
          { name: "Главная", url: "/" },
          { name: "Каталог", url: "/products" },
          { name: product.name, url: `/products/${product.slug}` },
        ])} />
        <ProductHeroDetail product={product} {...heroDetail} hasHeroImage={hasHeroImage} />
      </>
    );
  }

  return (
    <>
      <JsonLd data={buildProductSchema(product)} />
      <JsonLd data={buildBreadcrumbSchema([
        { name: "Главная", url: "/" },
        { name: "Каталог", url: "/products" },
        { name: product.name, url: `/products/${product.slug}` },
      ])} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Breadcrumb */}
        <nav className="text-sm text-brand-gray mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-brand-blue transition-colors">Главная</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-brand-blue transition-colors">Каталог</Link>
          <span>/</span>
          <span className="text-brand-blue font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Image */}
          <div className="relative bg-brand-blue/5 rounded-2xl h-96 lg:h-full min-h-80 flex items-center justify-center overflow-hidden">
            {fs.existsSync(path.join(process.cwd(), "public", product.image)) ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            ) : (
              <svg className="w-32 h-32 text-brand-blue/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1} />
                <line x1="3" y1="9" x2="21" y2="9" strokeWidth={1} />
                <line x1="12" y1="9" x2="12" y2="21" strokeWidth={1} />
              </svg>
            )}
          </div>

          {/* Details */}
          <div>
            <p className="text-xs font-semibold text-brand-red uppercase tracking-wider mb-2">
              {categoryLabels[product.category]}
            </p>
            {product.badge && (
              <span className="inline-block bg-brand-red/15 text-brand-red text-xs font-bold px-3 py-1 rounded-full mb-3">
                {product.badge}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-brand-blue leading-snug">{product.name}</h1>
            <p className="mt-4 text-brand-gray leading-relaxed">{product.description}</p>

            {/* Stats */}
            <div className="mt-8">
              <div className="bg-brand-cream rounded-xl p-4 inline-block">
                <p className="text-xs text-brand-gray font-medium uppercase tracking-wide">Стоимость</p>
                <p className="text-xl font-bold text-brand-blue mt-1">{product.price}</p>
              </div>
            </div>

            {/* Features */}
            <div className="mt-8">
              <h2 className="font-semibold text-brand-blue mb-3">Характеристики</h2>
              <ul className="space-y-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-brand-gray text-sm">
                    <svg className="w-5 h-5 text-brand-red shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["Гарантия 3 года", "Монтаж под ключ", "Бесплатный замер", "ГОСТ 30971"].map((b) => (
                <span key={b} className="text-xs bg-brand-blue/8 text-brand-blue font-medium px-3 py-1.5 rounded-full">
                  {b}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Рассчитать стоимость
              </Link>
              <Link href="/products" className="btn-outline">
                Назад в каталог
              </Link>
            </div>
            <p className="mt-4 text-xs text-brand-gray">
              Точная цена зависит от размеров проёма, комплектации и объёма заказа. Замер и расчёт - бесплатно в любой день.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
