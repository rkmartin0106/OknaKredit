"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const navLinks = [
  { href: "/",          label: "Главная" },
  { href: "/products",  label: "Продукция" },
  { href: "/services",  label: "Услуги" },
  { href: "/okna",      label: "По районам" },
  { href: "/gallery",   label: "Галерея" },
  { href: "/faq",       label: "Вопросы" },
  { href: "/about",     label: "О компании" },
  { href: "/contact",   label: "Контакты" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Info (email, tabs, phones) rest in red and "activate" to near-black on hover.
  const linkIdle = "text-brand-red hover:text-brand-blueDark";
  const linkActive = "text-brand-blueDark";

  return (
    <header className="sticky top-0 z-50 bg-brand-cream shadow-md">
      {/* Top bar - a shade darker than the main bar */}
      <div className="text-brand-red text-xs py-1.5 hidden md:block bg-[#E5D6BB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="mailto:info@oknakredit.spb.ru" className={clsx("transition-colors", linkIdle)}>
            info@oknakredit.spb.ru
          </a>
          <div className="flex items-center gap-4">
            <span>Отвечаем на звонки: Пн-Сб 9:00-20:00</span>
            <span className="invisible btn-primary text-sm py-2 px-4" aria-hidden="true">Бесплатный замер</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <span className="relative block h-10 md:h-12" style={{ aspectRatio: "1203 / 372" }}>
              <Image
                src="/images/logo-black.png"
                alt="Окна-Кредит"
                fill
                priority
                className="object-contain"
              />
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "font-medium text-sm transition-colors",
                  pathname === link.href ? linkActive : linkIdle
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex flex-col leading-tight tabular-nums">
              <a
                href="tel:+78129650040"
                className={clsx("font-semibold text-sm transition-colors", linkIdle)}
              >
                +7 (812) 965-00-40
              </a>
              <a
                href="tel:+78125291104"
                className={clsx("font-semibold text-sm transition-colors", linkIdle)}
              >
                +7 (812) 529-11-04
              </a>
            </div>
            <Link href="/contact" className="btn-primary text-sm py-2 px-4">
              Бесплатный замер
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-brand-red focus:outline-none"
            onClick={() => setOpen((v) => !v)}
            aria-label="Открыть меню"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={clsx(
          "md:hidden bg-[#1C0F0F] transition-all duration-300 overflow-hidden",
          open ? "max-h-screen py-3" : "max-h-0"
        )}
      >
        <nav className="flex flex-col px-4 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-brand-red py-2 font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <p className="text-white/50 text-xs pt-2">Отвечаем на звонки: Пн-Сб 9:00-20:00</p>
          <a href="tel:+78129650040" className="text-brand-red font-semibold py-1 text-sm">
            +7 (812) 965-00-40
          </a>
          <a href="tel:+78125291104" className="text-brand-red font-semibold py-1 text-sm">
            +7 (812) 529-11-04
          </a>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 text-sm py-2 text-center"
          >
            Бесплатный замер
          </Link>
        </nav>
      </div>
    </header>
  );
}
