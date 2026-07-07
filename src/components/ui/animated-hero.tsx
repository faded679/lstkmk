"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Phone } from "@phosphor-icons/react";
import Link from "next/link";
import HeroPhoto from "@/components/HeroPhoto";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["ангары", "склады", "цехи", "коровники", "автомойки", "СТО", "птичники", "свинарники", "конюшни", "овощехранилища", "зернохранилища", "теплицы", "выставочные залы", "спортзалы", "торговые павильоны", "офисы", "бытовки", "гаражи", "депо"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full overflow-x-hidden bg-[#0f1117]">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-orange-400 to-blue-600" />

      <div className="container mx-auto px-4">
        <div className="flex gap-6 pt-24 lg:pt-28 pb-10 items-center justify-center flex-col">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-400 text-xs font-mono uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            Производство · Проектирование · Монтаж
          </motion.div>

          {/* Headline */}
          <div className="flex gap-2 flex-col items-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl max-w-4xl tracking-tighter text-center font-bold text-white leading-none px-2">
              Строим{" "}
              <span className="relative inline-flex justify-center overflow-hidden align-bottom" style={{ minWidth: 260 }}>
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute text-orange-500"
                    initial={{ opacity: 0, y: -60 }}
                    transition={{ type: "spring", stiffness: 60, damping: 14 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -80 : 80, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-xl text-center leading-relaxed mt-2">
              Быстровозводимые здания из металлоконструкций под ключ.
              <span className="text-white/70"> Гарантия 25 лет.</span>
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4 sm:px-0 mt-2">
            <Link href="/#contacts" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40">
                <Phone size={18} weight="bold" /> Заказать звонок
              </button>
            </Link>
            <Link href="/configurator" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/20">
                3D Конфигуратор <ArrowRight size={18} weight="bold" />
              </button>
            </Link>
            <Link href="/catalog" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all">
                Каталог проектов <ArrowRight size={18} />
              </button>
            </Link>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-3xl grid grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden mt-4 border border-white/10"
          >
            {[
              { value: "14 лет", label: "на рынке" },
              { value: "450+",   label: "объектов сдано" },
              { value: "25 лет", label: "гарантия" },
            ].map((s) => (
              <div key={s.label} className="bg-[#161b27] flex flex-col items-center justify-center py-4 px-3">
                <div className="text-2xl font-bold text-orange-400">{s.value}</div>
                <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Photo */}
          <div className="w-full">
            <HeroPhoto />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
