import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Breadcrumb from "@/components/Breadcrumb";
import AiAssistant from "@/components/AiAssistant";
import Footer from "@/components/Footer";
import OrganizationSchema from "@/components/OrganizationSchema";
import WebSiteSchema from "@/components/WebSiteSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

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
  icons: {
    icon: {
      url: "https://lstkmk.ru/favicon.jpg",
      type: "image/jpeg",
    },
    shortcut: "https://lstkmk.ru/favicon.jpg",
    apple: "https://lstkmk.ru/favicon.jpg",
  },
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
        url: "https://lstkmk.ru/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "МАКСТИЛ — Быстровозводимые металлоконструкции под ключ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "МАКСТИЛ — Быстровозводимые металлоконструкции",
    description:
      "Проектирование, производство и монтаж быстровозводимых зданий из металлоконструкций. 14 лет опыта.",
    images: ["https://lstkmk.ru/og-image.jpg"],
  },
  alternates: {
    canonical: "https://lstkmk.ru",
  },
  verification: {
    yandex: "7d858012742fb48c",
    google: "4Nldt9OJYvBS3EJ53FzDtSWxJNNx-nuzBovQri-fVak",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        {/* Preload изображения HeroVideo */}
        <link rel="preload" href="/frames2/frame_0151.webp" as="image" type="image/webp" fetchPriority="high" />
        {/* Preload критических шрифтов */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <OrganizationSchema />
        <WebSiteSchema />
        <BreadcrumbSchema />
        <Breadcrumb />
        {children}
        <Footer />
        <AiAssistant />
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-KR3X1J843D" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KR3X1J843D');
          `}
        </Script>
        {/* Yandex.Metrika counter 109614555 */}
        <Script id="yandex-metrika-109614555" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=109614555", "ym");
            ym(109614555, "init", {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript><div><img src="https://mc.yandex.ru/watch/109614555" style={{position:'absolute', left:'-9999px'}} alt="" /></div></noscript>

        {/* Yandex.Metrika counter 110082764 */}
        <Script id="yandex-metrika-110082764" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=110082764", "ym");
            ym(110082764, "init", {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript><div><img src="https://mc.yandex.ru/watch/110082764" style={{position:'absolute', left:'-9999px'}} alt="" /></div></noscript>
      </body>
    </html>
  );
}
