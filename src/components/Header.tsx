"use client";

import Link from "next/link";
import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 bg-brand-blue shadow-md">
      {/* Top bar */}
      <div className="bg-brand-blueDark text-white/60 text-xs py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <span>Отвечаем Пн-Сб 9:00-20:00</span>
          <a href="mailto:info@oknakredit.spb.ru" className="hover:text-white transition-colors">
            info@oknakredit.spb.ru
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-heading font-bold text-white">
              Окна-<span className="text-brand-red">Кредит</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-brand-red font-medium text-sm transition-colors"
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
                className="text-white font-semibold text-sm hover:text-brand-red transition-colors"
              >
                +7 (812) 965-00-40
              </a>
              <a
                href="tel:+78125291104"
                className="text-white font-semibold text-sm hover:text-brand-red transition-colors"
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
            className="md:hidden text-white focus:outline-none"
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
          "md:hidden bg-brand-blueDark transition-all duration-300 overflow-hidden",
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
          <p className="text-white/50 text-xs pt-2">Отвечаем Пн-Сб 9:00-20:00</p>
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
