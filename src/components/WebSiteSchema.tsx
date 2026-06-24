export default function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "МАКСТИЛ — строительство из ЛСТК",
    url: "https://lstkmk.ru",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://lstkmk.ru/knowledge/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
