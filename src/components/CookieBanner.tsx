"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, X } from "@phosphor-icons/react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie_accepted");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie_accepted", "1");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie_accepted", "0");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[9999] bg-white border border-border rounded-xl shadow-xl p-5"
        >
          <button
            onClick={decline}
            className="absolute top-3 right-3 text-muted hover:text-foreground transition-colors"
            aria-label="Закрыть"
          >
            <X size={16} />
          </button>

          <div className="flex gap-3 items-start mb-4">
            <Cookie size={24} className="text-accent-orange flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">
                Мы используем файлы cookie
              </p>
              <p className="text-xs text-muted leading-relaxed">
                Сайт использует cookie для улучшения работы и аналитики. Продолжая использование, вы соглашаетесь с{" "}
                <a href="/privacy" className="text-accent-blue hover:underline">
                  политикой конфиденциальности
                </a>
                .
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={accept}
              className="flex-1 h-9 text-xs font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
            >
              Принять
            </button>
            <button
              onClick={decline}
              className="flex-1 h-9 text-xs font-medium text-muted border border-border rounded-lg hover:border-foreground/30 transition-colors"
            >
              Отклонить
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
