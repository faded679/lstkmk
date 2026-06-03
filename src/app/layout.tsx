import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "МАКСТИЛ — Быстровозводимые металлоконструкции | Ангары, склады, цеха",
  description:
    "Проектирование, производство и монтаж быстровозводимых зданий из металлоконструкций ЛСТК. Ангары, склады, производственные цеха, СТО, сельхозздания под ключ. 14 лет опыта. Гарантия 5 лет.",
  keywords: [
    "быстровозводимые здания",
    "металлоконструкции",
    "ЛСТК",
    "ангары",
    "склады",
    "производственные цеха",
    "СТО",
    "коровники",
    "быстровозводимые ангары",
    "металлические конструкции",
    "строительство под ключ",
    "Белгород",
    "Москва",
  ],
  authors: [{ name: "МАКСТИЛ" }],
  creator: "МАКСТИЛ",
  publisher: "МАКСТИЛ",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://lstkmk.ru",
    siteName: "МАКСТИЛ",
    title: "МАКСТИЛ — Быстровозводимые металлоконструкции под ключ",
    description:
      "Проектирование, производство и монтаж быстровозводимых зданий из металлоконструкций. 14 лет опыта. Гарантия 5 лет.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "МАКСТИЛ — Быстровозводимые металлоконструкции",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "МАКСТИЛ — Быстровозводимые металлоконструкции",
    description:
      "Проектирование, производство и монтаж быстровозводимых зданий из металлоконструкций. 14 лет опыта.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://lstkmk.ru",
  },
  verification: {
    yandex: "7d858012742fb48c",
    google: "R_PZevWrG8VfFdqs6vcD_Jd9e1F-afIlLZLOL0ukDgs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        {children}
        {/* Яндекс.Метрика */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=109614135', 'ym');
            ym(109614135, 'init', {
              ssr:true,
              webvisor:true,
              clickmap:true,
              ecommerce:"dataLayer",
              accurateTrackBounce:true,
              trackLinks:true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/109614135" style={{position:'absolute', left:'-9999px'}} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  );
}
