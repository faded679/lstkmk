import { NextRequest, NextResponse } from "next/server";

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;
const DEEPSEEK_URL = "https://api.deepseek.com/chat/completions";

// Safety: список запрещенных тем
const BLOCKED_KEYWORDS = [
  "война", "спецоперация", "сво", "украина", "украины", "путин", "зеленский",
  "политика", "партия", "выборы", "наркотик", "кокаин", "героин", "марихуана",
  "курить", "травка", "религия", "церковь", "ислам", "христиан", "иудаизм",
  "оружие", "пистолет", "винтовка", "убить", "умереть", "самоубийство",
  "секс", "порно", "эротика", "18+", "нагишом", "голый",
];

function checkSafety(message: string): boolean {
  const lower = message.toLowerCase();
  return !BLOCKED_KEYWORDS.some((kw) => lower.includes(kw));
}

const SYSTEM_PROMPT = `Ты — ИИ-помощник компании МАКСТИЛ (lstkmk.ru). Компания строит быстровозводимые здания из металлоконструкций и ЛСТК в Белгородской области и по всей России.

О компании:
- Полное название: МАКСТИЛ
- Телефон: +7 (980) 321-15-42
- Email: maxsteel31@bk.ru
- Адрес: Белгородский р-н, с. Репное, ул. Автодорожная, 2
- Режим работы: Пн–Пт 9:00–18:00

Услуги:
- Проектирование (КМ, КМД)
- Производство металлоконструкций и ЛСТК-профиля
- Строительство под ключ: ангары, склады, производственные цеха, автосервисы/СТО, сельхозздания (коровники, птицефабрики, зернохранилища), торговые павильоны, гаражи
- Монтаж сэндвич-панелей (минвата, ПИР, пенополистирол; толщины 80–200 мм)

Актуальные цены из коммерческого предложения:
- Холодный ангар: от 4 500 ₽/м² (типовой, без утепления)
- Утепленный склад: от 9 000 ₽/м²
- Производственный цех: от 11 000 ₽/м²

Сроки: ангар 500 м² — от 45 дней под ключ. Проектирование 10–15 дней, производство 15–30 дней, монтаж 14–45 дней.

Гарантия: 5 лет на металлоконструкции, 3 года на монтаж.

Правила:
1. Отвечай ТОЛЬКО на вопросы о строительстве, металлоконструкциях, ЛСТК, услугах компании.
2. Если вопрос не по теме — вежливо перенаправь к строительным вопросам.
3. Отвечай ОЧЕНЬ кратко — максимум 1-2 предложения. Не пиши списки и длинные объяснения. Если нужны подробности — предложи позвонить.
4. Если не знаешь точного ответа — предложи позвонить: +7 (980) 321-15-42.
5. Используй русский язык.
6. Не придумывай несуществующие услуги или цены.`;

// Fallback если DeepSeek недоступен
function getFallback(): string {
  return "К сожалению, я сейчас не могу ответить. Позвоните нашему инженеру: +7 (980) 321-15-42 — проконсультирует бесплатно!";
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Сообщение обязательно" }, { status: 400 });
    }

    // Safety check
    if (!checkSafety(message)) {
      return NextResponse.json({
        reply: "Извините, я специализируюсь только на вопросах строительства быстровозводимых зданий. Задайте вопрос о наших услугах — с удовольствием помогу!",
        blocked: true,
      });
    }

    // Если нет API-ключа — fallback
    if (!DEEPSEEK_API_KEY) {
      console.warn("DEEPSEEK_API_KEY not set, using fallback");
      return NextResponse.json({ reply: getFallback(), ai: false });
    }

    // Запрос к DeepSeek (OpenAI-compatible API)
    const res = await fetch(DEEPSEEK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message },
        ],
        max_tokens: 120,
        temperature: 0.7,
      }),
    });

    if (!res.ok) {
      console.error("DeepSeek API error:", res.status, await res.text().catch(() => ""));
      return NextResponse.json({ reply: getFallback(), ai: false });
    }

    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      return NextResponse.json({ reply: getFallback(), ai: false });
    }

    return NextResponse.json({ reply, ai: true });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json({
      reply: "Извините, произошла техническая ошибка. Пожалуйста, позвоните нам: +7 (980) 321-15-42",
      error: true,
    }, { status: 200 });
  }
}
