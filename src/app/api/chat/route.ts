import { NextRequest, NextResponse } from "next/server";
import { saveUserMessage } from "@/lib/db";
import { getClientIp, getUserAgent } from "@/lib/request-meta";

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

Социальные сети:
- Telegram: https://t.me/mcsteel031
- Instagram: https://www.instagram.com/maksteel31/
- ВКонтакте: https://vk.com/mcsteel31
- YouTube: https://www.youtube.com/@mcsteel31
- Max (новая платформа): https://max.ru/join/n-9OuRJ2NTY_1f77DHMswPbVCe14w8rMicyRr-3-rAk

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

Регионы работы:
- Белгородская область
- Курская область
- Орловская область
- Воронежская область
- Липецкая область
- ДНР
- ЛНР

Правила:
1. Отвечай ТОЛЬКО на вопросы о строительстве, металлоконструкциях, ЛСТК, услугах компании.
2. Если вопрос не по теме — вежливо перенаправь к строительным вопросам.
3. Отвечай ОЧЕНЬ кратко — максимум 1-2 предложения. Не пиши списки и длинные объяснения.
4. Если не знаешь точного ответа — предложи позвонить: +7 (980) 321-15-42.
5. Используй русский язык.
6. Не придумывай несуществующие услуги или цены.
7. НЕ ПЕРЕСПРАШИВАЙ информацию, которую пользователь уже указал (тип здания, площадь, утепление). Используй её для ответа.
8. Если пользователь просит "примерный расчёт" — сразу дай ориентировочную цену из раздела "Актуальные цены", умноженную на площадь. Например: "Примерно 3.4 млн ₽ (750 м² × 4500 ₽). Точная смета по телефону".`;

// Fallback если DeepSeek недоступен
function getFallback(): string {
  return "К сожалению, я сейчас не могу ответить. Позвоните нашему инженеру: +7 (980) 321-15-42 — проконсультирует бесплатно!";
}

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Сообщение обязательно" }, { status: 400 });
    }

    // Лог пользовательского сообщения (fire-and-forget, не блокирует)
    saveUserMessage({
      source: "chat",
      content: message,
      sessionId: typeof sessionId === "string" ? sessionId : null,
      ip: getClientIp(request),
      userAgent: getUserAgent(request),
    });

    // Push to mctender (fire-and-forget)
    const mcUrl = process.env.MCTENDER_CHAT_URL || "http://127.0.0.1:8080/api/chat-messages/from-makstal";
    fetch(mcUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: message,
        source: "chat",
        session_id: typeof sessionId === "string" ? sessionId : "",
        ip: getClientIp(request),
        user_agent: getUserAgent(request),
      }),
    }).catch(() => {});

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
