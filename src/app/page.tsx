import Navigation from "@/components/Navigation";
import HeroVideo from "@/components/HeroVideo";
import About from "@/components/About";
import FactoryBanner from "@/components/FactoryBanner";
import Process from "@/components/Process";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import ClientMarquee from "@/components/ClientMarquee";
import Calculator from "@/components/Calculator";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "МАКСТИЛ",
  alternateName: "МакСтил",
  url: "https://lstkmk.ru",
  logo: "https://lstkmk.ru/photo_2026-06-01_19-06-27%20(2).jpg",
  description:
    "Производство и монтаж быстровозводимых зданий из металлоконструкций ЛСТК. Ангары, склады, производственные цеха под ключ.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "RU",
    addressRegion: "Белгородская область",
    addressLocality: "Белгород",
    streetAddress: "Белгородская область",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+7-980-321-15-42",
    contactType: "sales",
    availableLanguage: ["Russian"],
  },
  sameAs: [
    "https://vk.ru/mcsteel31",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "МАКСТИЛ",
  image: "https://lstkmk.ru/photo_2026-06-01_19-06-27%20(2).jpg",
  "@id": "https://lstkmk.ru",
  url: "https://lstkmk.ru",
  telephone: "+7-800-100-91-51",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "RU",
    addressRegion: "Белгородская область",
    addressLocality: "Белгород",
    streetAddress: "Белгородская область",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.5957,
    longitude: 36.5872,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  email: "info@lstkmk.ru",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Строительные услуги",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Проектирование ЛСТК",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Производство металлоконструкций",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Монтаж быстровозводимых зданий",
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "МАКСТИЛ",
  url: "https://lstkmk.ru",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://lstkmk.ru/articles/?search={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Navigation />
      <main>
        <HeroVideo />
        <Calculator />
        <About />
        <FactoryBanner />
        <Process />
        <Certifications />
        <Projects />
        <Testimonials />
        <ClientMarquee />
        <Contacts />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
