"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, categoryLabels } from "@/lib/products";
import { PlaceholderPhotoIcon } from "@/components/icons";

export interface HeroFeature {
  icon: ReactNode;
  text: string;
}

interface Props {
  product: Product;
  /** Hero H1 - a shorter, punchier headline than product.name (used verbatim in the modal H2). */
  title: string;
  lede: string;
  features: HeroFeature[];
  /** Background photo for the hero. Defaults to product.image. */
  heroImage?: string;
  /** Whether heroImage actually exists on disk (checked server-side). Defaults to true. */
  hasHeroImage?: boolean;
}

const CREAM = "246,242,233";

const trustChips = ["Гарантия 3 года", "Монтаж под ключ", "Бесплатный замер", "ГОСТ 30971"];

export default function ProductHeroDetail({ product, title, lede, features, heroImage, hasHeroImage = true }: Props) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout>>();
  const image = heroImage ?? product.image;
  const eyebrow = categoryLabels[product.category];

  function openModal(e: React.MouseEvent<HTMLElement>) {
    triggerRef.current = e.currentTarget;
    setOpen(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  }

  function closeModal() {
    setVisible(false);
    closeTimeout.current = setTimeout(() => {
      setOpen(false);
      triggerRef.current?.focus();
    }, 180);
  }

  useEffect(() => () => clearTimeout(closeTimeout.current), []);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;

    const getFocusable = () =>
      Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
      );

    getFocusable()[0]?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeModal();
        return;
      }
      if (e.key !== "Tab") return;
      const items = getFocusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      {/* Hero */}
      <section className="relative lg:min-h-[680px] overflow-hidden bg-brand-cream">
        {/* Mobile media block */}
        <div className="relative aspect-[4/3] sm:aspect-video lg:hidden bg-brand-blue/5">
          {hasHeroImage ? (
            <Image
              src={image}
              alt={product.name}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <PlaceholderPhotoIcon />
            </div>
          )}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(${CREAM},0.00) 0%, rgba(${CREAM},0.45) 54%, rgba(${CREAM},0.90) 74%, rgba(${CREAM},0.98) 100%)`,
            }}
          />
        </div>

        {/* Desktop full-bleed media */}
        <div className="hidden lg:block absolute inset-0 bg-brand-blue/5">
          {hasHeroImage ? (
            <Image
              src={image}
              alt={product.name}
              fill
              priority
              sizes="100vw"
              className="object-cover object-right"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <PlaceholderPhotoIcon />
            </div>
          )}
        </div>
        <div
          className="hidden lg:block absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(${CREAM},0.99) 0%, rgba(${CREAM},0.93) 26%, rgba(${CREAM},0.45) 46%, rgba(${CREAM},0.00) 62%)`,
          }}
        />

        {/* Content */}
        <div className="relative lg:absolute lg:inset-0 flex lg:items-center">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 lg:py-0">
            <div className="max-w-[34rem]">
              <nav className="text-xs text-brand-gray mb-4 flex items-center gap-2 flex-wrap">
                <Link href="/" className="hover:text-brand-blue transition-colors">Главная</Link>
                <span>/</span>
                <Link href="/products" className="hover:text-brand-blue transition-colors">Каталог</Link>
                <span>/</span>
                <span className="text-brand-blue font-medium">{product.name}</span>
              </nav>

              <p className="text-brand-red text-sm font-semibold uppercase tracking-wider mb-3">
                {eyebrow}
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-blue leading-[1.05]">
                {title}
              </h1>
              <p className="mt-5 text-brand-gray text-lg leading-relaxed">{lede}</p>

              <div className="mt-8 space-y-4">
                {features.map((f) => (
                  <div key={f.text} className="flex items-center gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-brand-blue text-white flex items-center justify-center">
                      {f.icon}
                    </div>
                    <p className="text-brand-blue font-medium leading-snug">{f.text}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-brand-blue font-semibold text-lg">{product.price}</p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Рассчитать стоимость
                </Link>
                <button type="button" onClick={openModal} className="btn-outline">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center transition-colors"
          style={{
            backgroundColor: visible ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0)",
            transitionDuration: visible ? "200ms" : "180ms",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-heading"
            className={`relative w-full sm:max-w-[42rem] max-h-[92dvh] sm:max-h-[90vh] overflow-y-auto bg-brand-cream rounded-t-2xl sm:rounded-2xl p-6 sm:p-10 shadow-xl transition-all ease-out ${
              visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 sm:translate-y-0"
            }`}
            style={{ transitionDuration: "260ms" }}
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Закрыть"
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full text-brand-gray hover:bg-brand-blue/10 hover:text-brand-blue transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <p className="text-brand-red text-sm font-semibold uppercase tracking-wider mb-2">
              {eyebrow}
            </p>
            {product.badge && (
              <span className="inline-block bg-brand-red/15 text-brand-red text-xs font-bold px-3 py-1 rounded-full mb-3">
                {product.badge}
              </span>
            )}
            <h2 id="product-modal-heading" className="text-2xl md:text-3xl font-heading font-bold text-brand-blue leading-snug">
              {product.name}
            </h2>
            <p className="mt-4 text-brand-gray leading-relaxed">{product.description}</p>

            <div className="mt-6">
              <div className="bg-white rounded-xl p-4 inline-block">
                <p className="text-xs text-brand-gray font-medium uppercase tracking-wide">Стоимость</p>
                <p className="text-xl font-bold text-brand-blue mt-1">{product.price}</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-heading font-semibold text-brand-blue mb-3 text-lg">Характеристики</h3>
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

            <div className="mt-8 flex flex-wrap gap-3">
              {trustChips.map((b) => (
                <span key={b} className="text-xs bg-brand-blue/8 text-brand-blue font-medium px-3 py-1.5 rounded-full">
                  {b}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
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
      )}
    </>
  );
}
