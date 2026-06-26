"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Phone } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["ангары", "склады", "цехи", "коровники", "автомойки", "СТО"],
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
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Link href="/catalog">
              <Button size="sm" className="gap-4 bg-orange-500 hover:bg-orange-600 text-white">
                Каталог проектов <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-blue-600">Здания из металлоконструкций</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-600 max-w-2xl text-center">
              Строительство ангаров, складов, производственных цехов и сельскохозяйственных 
              зданий под ключ. ЛСТК и металлоконструкции с гарантией качества и оптимальными 
              сроками монтажа.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <a href="tel:+79606322061">
              <Button size="lg" className="gap-4" variant="outline">
                Заказать звонок <Phone size={20} />
              </Button>
            </a>
            <Link href="/#calculator">
              <Button size="lg" className="gap-4">
                Рассчитать стоимость <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
