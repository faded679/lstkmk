export interface ServiceSchemaProps {
  name: string;
  description: string;
  priceRange?: string;
  areaServed?: string;
}

export default function ServiceSchema({
  name,
  description,
  priceRange = "по запросу",
  areaServed = "Россия",
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: "МАКСТИЛ",
      telephone: "+7 (960) 632-20-61",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Белгород",
        addressCountry: "RU",
      },
    },
    areaServed,
    priceRange,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
