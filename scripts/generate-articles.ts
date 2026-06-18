import { chatCompletion } from "../src/lib/wellflow";
import * as fs from "fs";
import * as path from "path";

const topics = [
  { slug: "calculation-krovlja", title: "Расчёт кровли ангара: калькулятор и формулы", category: "Калькуляторы" },
  { slug: "zakon-stroitelstvo", title: "Закон о строительстве ангаров 2024: что изменилось", category: "Законодательство" },
  { slug: "sravnenie-sendvich", title: "Сравнение сэндвич-панелей: какие выбрать для ангара", category: "Материалы" },
  { slug: "stoimost-m2", title: "Сколько стоит построить ангар за 1 м² в 2024", category: "Цены" },
  { slug: "montazh-svoimi-rukami", title: "Монтаж ЛСТК своими руками: пошаговая инструкция", category: "Монтаж" },
  { slug: "otoplenie-gazom", title: "Отопление ангара газом: расчёт мощности и стоимость", category: "Инженерия" },
  { slug: "proektirovanie-online", title: "Проектирование ангаров онлайн: бесплатный расчёт", category: "Проектирование" },
  { slug: "sravnenie-kirpich", title: "Ангар из ЛСТК vs кирпича: что дешевле и быстрее", category: "Сравнение" },
  { slug: "dokumenty-na-stroitelstvo", title: "Какие документы нужны для строительства ангара", category: "Документы" },
  { slug: "fundament-pod-angar", title: "Какой фундамент лучше под ангар: ленточный или свайный", category: "Фундамент" },
];

async function generateArticle(topic: any): Promise<string> {
  const prompt = `Напиши SEO-оптимизированную микро-статью (300-400 слов) для строительной компании ЛСТК МАКСТИЛ на тему: "${topic.title}"

Требования:
1. Используй ключевые слова: ЛСТК, ангар, строительство, цена, проект, монтаж, сроки, расчёт
2. Структура: заголовок H1, вступление, 3-4 подзаголовка H2, вывод
3. Тон: экспертный, но понятный
4. Добавь 3-4 факта с цифрами
5. В конце призыв к действию с телефоном +7 (980) 321-15-42
6. Уникальность: конкретика по ЛСТК

Выведи только HTML-контент без DOCTYPE и html тегов, начни с article. Добавь schema.org JSON-LD в конце.`;

  const response = await chatCompletion({
    model: "claude-opus-4.8",
    messages: [
      { role: "system", content: "Ты — SEO-специалист и строительный эксперт. Пишешь продающие тексты для сайта ЛСТК МАКСТИЛ. Отвечай только HTML-кодом." },
      { role: "user", content: prompt }
    ],
    temperature: 0.4,
    max_tokens: 2500
  });

  // Anthropic API returns { content: [{ type: "text", text: "..." }] }
  const textContent = response.content?.find((c: any) => c.type === "text")?.text;
  return textContent || response.completion || response.content?.[0]?.text || "";
}

function generatePageTemplate(slug: string, title: string, content: string): string {
  return `"use client";

import Navigation from "@/components/Navigation";

export const metadata = {
  title: "${title} | ЛСТК МАКСТИЛ",
  description: "${title}. Профессиональное строительство ангаров из ЛСТК. Расчёт стоимости, проектирование, монтаж. Телефон: +7 (980) 321-15-42",
  keywords: ["ЛСТК", "ангар", "строительство", "цена", "проект", "монтаж", "сроки", "расчёт", "${slug.replace(/-/g, ' ')}"],
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-[800px] mx-auto px-6 pt-28 pb-20">
        ${content}
      </main>
    </div>
  );
}
`;
}

async function createArticles() {
  console.log("🚀 Генерация 10 статей через Wellflow (Claude Opus 4.8)...\n");
  
  const knowledgeDir = path.join(process.cwd(), "src", "app", "knowledge");
  
  for (const topic of topics) {
    console.log(`Генерация: ${topic.title}...`);
    
    try {
      const content = await generateArticle(topic);
      
      // Создаём директорию
      const articleDir = path.join(knowledgeDir, topic.slug);
      if (!fs.existsSync(articleDir)) {
        fs.mkdirSync(articleDir, { recursive: true });
      }
      
      // Создаём файл страницы
      const pageContent = generatePageTemplate(topic.slug, topic.title, content);
      fs.writeFileSync(path.join(articleDir, "page.tsx"), pageContent);
      
      console.log(`✅ Создано: src/app/knowledge/${topic.slug}/page.tsx`);
    } catch (error) {
      console.error(`❌ Ошибка для ${topic.slug}:`, error);
    }
  }
  
  console.log("\n🎉 Готово! Добавь статьи в knowledge/page.tsx");
}

createArticles();
