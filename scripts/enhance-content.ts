import { chatCompletion } from "../src/lib/wellflow";
import * as fs from "fs";
import * as path from "path";

const articles = [
  { slug: "sravnenie-kirpich", title: "Ангар из ЛСТК vs кирпича", category: "Сравнение" },
  { slug: "poly-v-promyshlennom-zdanii", title: "Полы в промышленном здании", category: "Конструкции" },
];

async function enhanceArticle(slug: string, title: string, category: string) {
  const knowledgeDir = path.join(process.cwd(), "src", "app", "knowledge");
  const contentOldPath = path.join(knowledgeDir, slug, "content-old.txt");
  
  if (!fs.existsSync(contentOldPath)) {
    console.log(`⚠️ ${slug} — content-old.txt не найден`);
    return;
  }
  
  const oldContent = fs.readFileSync(contentOldPath, "utf-8");
  
  // Вызываем Wellflow для структурирования контента
  const response = await chatCompletion({
    model: "claude-opus-4.8",
    messages: [
      {
        role: "system",
        content: "Ты — эксперт по вёрстке HTML статей. Преобразуй текст в структурированную статью с таблицами и секциями."
      },
      {
        role: "user",
        content: `Преобразуй этот текст в структурированную HTML статью:

ТЕМА: ${title}
КАТЕГОРИЯ: ${category}

ИСХОДНЫЙ ТЕКСТ:
${oldContent.substring(0, 2000)}

ТРЕБОВАНИЯ:
1. Разбей на секции с заголовками H2
2. Создай HTML таблицу для сравнения/данных (если есть цифры)
3. Добавь блок FAQ с вопросами-ответами в конце
4. Используй классы Tailwind: prose, prose-slate для контента
5. Сохрани все факты и цифры из исходного текста

Выведи только HTML код секции <div className="prose prose-slate max-w-none">...</div> без оберток article или main.`
      }
    ],
    temperature: 0.3,
    max_tokens: 3000
  });

  const enhancedContent = response.content?.[0]?.text || "";
  
  // Сохраняем улучшенный контент
  fs.writeFileSync(
    path.join(knowledgeDir, slug, "content-enhanced.txt"),
    enhancedContent
  );
  
  console.log(`✅ ${slug} — контент улучшен через Wellflow`);
}

async function enhanceAll() {
  console.log("🚀 Улучшение контента через Wellflow Claude Opus 4.8...\n");
  
  for (const article of articles) {
    await enhanceArticle(article.slug, article.title, article.category);
  }
  
  console.log("\n🎉 Готово! Улучшенный контент в content-enhanced.txt");
}

enhanceAll();
