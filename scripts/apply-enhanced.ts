import * as fs from "fs";
import * as path from "path";

const articles = [
  { slug: "sravnenie-kirpich", title: "Ангар из ЛСТК vs кирпича", category: "Сравнение" },
];

function generatePageTemplate(slug: string, title: string, category: string, content: string): string {
  // Убираем ```html из начала если есть
  const cleanContent = content.replace(/^```html\n/, "").replace(/\n```$/, "");
  
  return `import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Phone } from "@phosphor-icons/react/dist/ssr";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "${title} | Справочник ЛСТК",
  description: "Профессиональное руководство по ${title.toLowerCase()}. Цены, сроки, технологии ЛСТК.",
  keywords: ["${slug.replace(/-/g, " ")}"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${title}",
    "description": "Руководство по ${title.toLowerCase()}",
    "author": { "@type": "Organization", "name": "ЛСТК-МК" }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <main className="max-w-[800px] mx-auto px-6 py-12 pt-28">
        {/* Хлебные крошки */}
        <Link href="/knowledge/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-6">
          <ArrowLeft size={16} />
          База знаний
        </Link>

        <article>
          {/* Заголовок */}
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ${title}
          </h1>
          
          {/* Категория */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-muted mb-6">
            ${category}
          </div>

          {/* Содержание статьи */}
          ${cleanContent}

          {/* Блок с CTA */}
          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Нужна консультация?
            </h3>
            <p className="text-muted mb-4">
              Наши инженеры бесплатно рассчитают стоимость вашего проекта за 15 минут.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="/configurator" 
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                <Calculator size={18} />
                Рассчитать стоимость
              </a>
              <a 
                href="tel:+79803211542" 
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-border rounded-lg hover:bg-slate-50 transition-colors"
              >
                <Phone size={18} />
                +7 (980) 321-15-42
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
`;
}

async function applyEnhanced() {
  const knowledgeDir = path.join(process.cwd(), "src", "app", "knowledge");
  
  console.log("🔄 Применение улучшенного контента...\n");
  
  for (const article of articles) {
    const enhancedFile = path.join(knowledgeDir, article.slug, "content-enhanced.txt");
    const pageFile = path.join(knowledgeDir, article.slug, "page.tsx");
    
    if (fs.existsSync(enhancedFile)) {
      const enhancedContent = fs.readFileSync(enhancedFile, "utf-8");
      const newPage = generatePageTemplate(article.slug, article.title, article.category, enhancedContent);
      
      fs.writeFileSync(pageFile, newPage);
      console.log(`✅ ${article.slug} — применён улучшенный контент с таблицами`);
    } else {
      console.log(`⚠️ ${article.slug} — content-enhanced.txt не найден`);
    }
  }
  
  console.log("\n🎉 Готово!");
}

applyEnhanced();
