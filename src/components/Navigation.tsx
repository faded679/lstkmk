"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { List, X, Phone } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Калькулятор", href: "/#calculator", isAnchor: true },
  { label: "О компании", href: "/#about", isAnchor: true },
  { label: "Проекты", href: "/#projects", isAnchor: true },
  { label: "Контакты", href: "/#contacts", isAnchor: true },
  { label: "Статьи", href: "/articles", isAnchor: false },
  { label: "База знаний", href: "/knowledge", isAnchor: false },
  { label: "Вакансии", href: "/vacancies", isAnchor: false },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Обработчик клика по якорной ссылке
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/" && href.startsWith("/#")) {
      // Уже на главной — просто скроллим
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Если не на главной — Link сам перейдёт на главную с хэшем
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b border-slate-300 ${
          scrolled
            ? "bg-white/95 shadow-sm"
            : "bg-white/80"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto flex items-center justify-between h-[68px] px-6 lg:px-10">
          <a href="/" className="flex items-center">
            <img src="/photo_2026-06-01_19-06-27 (2).jpg" alt="МАКСТИЛ" className="h-10 w-auto object-contain" />
          </a>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) =>
              link.isAnchor ? (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="text-sm font-medium text-foreground/80 hover:text-accent-blue transition-colors duration-200 whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-accent-blue transition-colors duration-200 whitespace-nowrap"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+79803211542"
              className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-accent-blue transition-colors"
            >
              <Phone size={18} weight="bold" />
              +7 (980) 321-15-42
            </a>
            <Link
              href="/#calculator"
              onClick={(e) => handleAnchorClick(e, "/#calculator")}
              className="inline-flex h-10 items-center px-5 text-sm font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
            >
              Рассчитать стоимость
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Меню"
          >
            {mobileOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[68px] z-40 bg-white/98 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col gap-1 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    setMobileOpen(false);
                    if (link.isAnchor) {
                      handleAnchorClick(e, link.href);
                    }
                  }}
                  className="py-3 text-lg font-medium text-foreground/80 hover:text-accent-blue border-b border-border/50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+79803211542"
                className="flex items-center gap-2 py-3 text-lg font-medium text-foreground/80"
              >
                <Phone size={20} weight="bold" />
                +7 (980) 321-15-42
              </a>
              <Link
                href="/#calculator"
                onClick={(e) => {
                  setMobileOpen(false);
                  handleAnchorClick(e, "/#calculator");
                }}
                className="mt-4 inline-flex h-12 items-center justify-center px-6 text-base font-medium text-white bg-accent-blue rounded-lg"
              >
                Рассчитать стоимость
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
