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
import Script from "next/script";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "МАКСТИЛ",
  alternateName: "МакСтил",
  url: "https://lstkmk.ru",
  logo: "https://lstkmk.ru/logo.png",
  description:
    "Производство и монтаж быстровозводимых зданий из металлоконструкций ЛСТК. Ангары, склады, производственные цеха под ключ.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "RU",
    addressRegion: "Белгородская область",
    addressLocality: "Белгород",
    streetAddress: "Белгородский район",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+7-000-000-00-00",
    contactType: "sales",
    availableLanguage: ["Russian"],
  },
  sameAs: [],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "МАКСТИЛ",
  image: "https://lstkmk.ru/logo.png",
  "@id": "https://lstkmk.ru",
  url: "https://lstkmk.ru",
  telephone: "+7-000-000-00-00",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "RU",
    addressRegion: "Белгородская область",
    addressLocality: "Белгород",
    streetAddress: "Белгородский район",
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
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="schema-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Navigation />
      <main>
        <HeroVideo />
        <About />
        <FactoryBanner />
        <Process />
        <Certifications />
        <Projects />
        <Testimonials />
        <ClientMarquee />
        <Calculator />
        <Contacts />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
