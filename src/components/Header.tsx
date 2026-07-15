"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const header = document.querySelector("header");
    const sections = document.querySelectorAll<HTMLElement>("[data-header-theme]");
    let ticking = false;

    const updateTheme = () => {
      ticking = false;
      const probeY = (header?.clientHeight ?? 0) / 2;
      for (const section of Array.from(sections)) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          setTheme(section.getAttribute("data-header-theme") as "light" | "dark");
          break;
        }
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateTheme);
    };

    updateTheme();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  const showBlackLogo = isHome && theme === "light";

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-colors",
        isHome ? "bg-gradient-to-b from-black/55 via-black/25 to-transparent" : "bg-[#2A1414] shadow-md"
      )}
    >
      {/* Top bar */}
      <div className={clsx("text-white/60 text-xs py-1.5 hidden md:block", !isHome && "bg-[#1C0F0F]")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="mailto:info@oknakredit.spb.ru" className="hover:text-white transition-colors">
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
            <span className="relative block h-10 md:h-12" style={{ aspectRatio: "1096 / 363" }}>
              <Image
                src="/images/logo-white.png"
                alt="Окна-Кредит"
                fill
                priority
                className={clsx(
                  "object-contain transition-opacity duration-300",
                  showBlackLogo ? "opacity-0" : "opacity-100"
                )}
              />
              <Image
                src="/images/logo-black.png"
                alt=""
                aria-hidden
                fill
                className={clsx(
                  "object-contain transition-opacity duration-300",
                  showBlackLogo ? "opacity-100" : "opacity-0"
                )}
              />
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
