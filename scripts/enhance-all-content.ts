import { chatCompletion } from "../src/lib/wellflow";
import * as fs from "fs";
import * as path from "path";

const articles = [
  { slug: "calculation-krovlja", title: "Расчёт кровли ангара: калькулятор и формулы", category: "Калькуляторы" },
  { slug: "zakon-stroitelstvo", title: "Закон о строительстве ангаров 2024", category: "Законодательство" },
  { slug: "sravnenie-sendvich", title: "Сравнение сэндвич-панелей", category: "Материалы" },
  { slug: "stoimost-m2", title: "Стоимость ангара за 1 м²", category: "Цены" },
  { slug: "montazh-svoimi-rukami", title: "Монтаж ЛСТК своими руками", category: "Монтаж" },
  { slug: "otoplenie-gazom", title: "Отопление ангара газом", category: "Инженерия" },
  { slug: "proektirovanie-online", title: "Проектирование ангаров онлайн", category: "Проектирование" },
  { slug: "sravnenie-kirpich", title: "ЛСТК vs кирпич", category: "Сравнение" },
  { slug: "dokumenty-na-stroitelstvo", title: "Документы для строительства", category: "Документы" },
  { slug: "fundament-pod-angar", title: "Фундамент под ангар", category: "Фундамент" },
];

async function enhanceArticle(article: typeof articles[0]) {
  const knowledgeDir = path.join(process.cwd(), "src", "app", "knowledge");
  const contentOldPath = path.join(knowledgeDir, article.slug, "content-old.txt");
  
  if (!fs.existsSync(contentOldPath)) {
    console.log(`⚠️ ${article.slug} — content-old.txt не найден, пропускаем`);
    return null;
  }
  
  const oldContent = fs.readFileSync(contentOldPath, "utf-8");
  
  const response = await chatCompletion({
    model: "claude-opus-4.8",
    messages: [
      {
        role: "system",
        content: "Ты — эксперт по вёрстке HTML статей. Преобразуй текст в структурированную статью с таблицами сравления и FAQ."
      },
      {
        role: "user",
        content: `Преобразуй этот текст в структурированную HTML статью для раздела "${article.category}":

ТЕМА: ${article.title}

ИСХОДНЫЙ ТЕКСТ:
${oldContent.substring(0, 2500)}

ТРЕБОВАНИЯ:
1. Разбей на секции с заголовками H2
2. Если есть сравнение/цифры — создай HTML таблицу с классами Tailwind
3. Добавь блок FAQ с 4-5 вопросами-ответами в конце (h3 для вопросов)
4. Используй классы: prose, prose-slate, overflow-x-auto, my-6, border, border-slate-300, bg-slate-100, px-4, py-2
5. Сохрани все факты и цифры

Выведи только HTML код без оберток article/main.`
      }
    ],
    temperature: 0.3,
    max_tokens: 3500
  });

  const enhancedContent = response.content?.[0]?.text || "";
  
  fs.writeFileSync(
    path.join(knowledgeDir, article.slug, "content-enhanced.txt"),
    enhancedContent
  );
  
  console.log(`✅ ${article.slug} — контент улучшен`);
  return enhancedContent;
}

async function enhanceAll() {
  console.log("🚀 Улучшение всех статей через Wellflow Claude Opus 4.8...\n");
  
  for (const article of articles) {
    await enhanceArticle(article);
    // Небольшая задержка между запросами
    await new Promise(r => setTimeout(r, 500));
  }
  
  console.log("\n🎉 Все статьи улучшены!");
}

enhanceAll();
