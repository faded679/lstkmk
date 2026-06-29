export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "МАКСТИЛ",
        url: "https://lstkmk.ru",
        logo: "https://lstkmk.ru/logo.png",
        telephone: "+7 (960) 632-20-61",
        email: "maxsteel31@bk.ru",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Белгород",
          addressCountry: "RU",
        },
        sameAs: [
          "https://t.me/lstkmk",
          "https://vk.com/lstkmk",
          "https://wa.me/79606322061",
        ],
      },
      {
        "@type": "LocalBusiness",
        name: "МАКСТИЛ",
        description: "Проектирование, производство и строительство быстровозводимых зданий из ЛСТК и металлоконструкций.",
        url: "https://lstkmk.ru",
        telephone: "+7 (960) 632-20-61",
        email: "maxsteel31@bk.ru",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Белгород",
          addressCountry: "RU",
        },
        priceRange: "от 4 500 ₽/м²",
        openingHours: "Mo-Fr 09:00-18:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
