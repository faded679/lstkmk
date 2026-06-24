export interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}

export default function ArticleSchema({
  title,
  description,
  url,
  image = "https://lstkmk.ru/og-image.jpg",
  datePublished = "2024-01-01",
  dateModified = "2026-01-01",
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    url,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "МАКСТИЛ",
    },
    publisher: {
      "@type": "Organization",
      name: "МАКСТИЛ",
      logo: {
        "@type": "ImageObject",
        url: "https://lstkmk.ru/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
