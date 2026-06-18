import * as fs from "fs";
import * as path from "path";

const articles = [
  { slug: "calculation-krovlja" },
  { slug: "zakon-stroitelstvo" },
  { slug: "sravnenie-sendvich" },
  { slug: "stoimost-m2" },
  { slug: "montazh-svoimi-rukami" },
  { slug: "otoplenie-gazom" },
  { slug: "proektirovanie-online" },
  { slug: "sravnenie-kirpich" },
  { slug: "dokumenty-na-stroitelstvo" },
  { slug: "fundament-pod-angar" },
];

function extractArticleContent(oldContent: string): string {
  // Ищем контент между <article> и </article>
  const match = oldContent.match(/<article>([\s\S]*?)<\/article>/);
  return match ? match[1].trim() : "";
}

async function restoreContent() {
  const knowledgeDir = path.join(process.cwd(), "src", "app", "knowledge");
  
  console.log("🔄 Восстановление контента из content-old.txt...\n");
  
  for (const article of articles) {
    const articleDir = path.join(knowledgeDir, article.slug);
    const oldFile = path.join(articleDir, "content-old.txt");
    const pageFile = path.join(articleDir, "page.tsx");
    
    if (fs.existsSync(oldFile) && fs.existsSync(pageFile)) {
      const oldContent = fs.readFileSync(oldFile, "utf-8");
      const pageContent = fs.readFileSync(pageFile, "utf-8");
      
      // Извлекаем статью из старого контента
      const articleContent = extractArticleContent(oldContent);
      
      if (articleContent) {
        // Заменяем placeholder на реальный контент
        const newContent = pageContent.replace(
          /<p>Тут должен быть основной контент статьи\.\.\.<\/p>/,
          articleContent
        );
        
        fs.writeFileSync(pageFile, newContent);
        console.log(`✅ ${article.slug} — контент восстановлен`);
      } else {
        console.log(`⚠️ ${article.slug} — не найден контент в content-old.txt`);
      }
    }
  }
  
  console.log("\n🎉 Готово! Контент восстановлен.");
}

restoreContent();
