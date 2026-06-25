"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    ym?: (id: number, method: string, url?: string, options?: object) => void;
  }
}

const COUNTER_IDS = [109614555, 110082764];

export default function YandexMetrikaHit() {
  const pathname = usePathname();
  const prevPathname = useRef<string | null>(null);

  useEffect(() => {
    if (prevPathname.current === null) {
      prevPathname.current = pathname;
      return;
    }
    if (prevPathname.current === pathname) return;
    prevPathname.current = pathname;

    const url = window.location.href;
    const title = document.title;
    const referer = document.referrer;

    const sendHit = () => {
      if (typeof window.ym === "function") {
        COUNTER_IDS.forEach((id) => {
          window.ym!(id, "hit", url, { title, referer });
        });
      }
    };

    const timer = setTimeout(sendHit, 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
