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

ВАЖНО: минимальная площадь здания — 24 м² (как в калькуляторе на сайте). Меньше не строим. Если просят меньше — предложи 24 м² минимум.

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

Разделы сайта (для CTA в ответах):
- /#projects — портфолио реализованных объектов (ангары, склады, цеха)
- /#calculator — онлайн-калькулятор стоимости здания
- /#contacts — форма заявки и контакты
- /knowledge/ — база знаний (статьи по ЛСТК, утеплению, фундаментам)

Правила:
1. Отвечай ТОЛЬКО на вопросы о строительстве, металлоконструкциях, ЛСТК, услугах компании.
2. Если вопрос не по теме — вежливо перенаправь к строительным вопросам.
3. Отвечай ОЧЕНЬ кратко — максимум 1-2 предложения. Не пиши списки и длинные объяснения.
4. Используй русский язык.
5. Не придумывай несуществующие услуги или цены.
6. НЕ ПЕРЕСПРАШИВАЙ информацию, которую пользователь уже указал (тип здания, площадь, утепление). Используй её для ответа.
7. Если пользователь просит "примерный расчёт" — сразу дай ориентировочную цену из раздела "Актуальные цены", умноженную на площадь. Например: "Примерно 3.4 млн ₽ (750 м² × 4500 ₽). Точный расчёт — в калькуляторе на /#calculator."
8. Если пользователь спрашивает о работе в регионе НЕ из списка выше — ответь: "Основные регионы: Белгородская, Курская, Орловская, Воронежская, Липецкая области, ДНР и ЛНР. По другим — оставьте номер в форме ниже, менеджер обсудит возможности."

ВАЖНО — РАЗНООБРАЗИЕ CTA:
9. В конце ответа добавляй ОДИН CTA. ЧЕРЕДУЙ их, не повторяй одно и то же подряд. Выбирай уместный по контексту:
   - "Посмотрите наши проекты на /#projects — там есть похожие объекты."
   - "Точный расчёт — в калькуляторе на /#calculator (займёт 30 секунд)."
   - "Подробнее об этом в нашей базе знаний: /knowledge/"
   - "Оставьте номер в форме ниже — менеджер перезвонит за минуту."
   - "Заполните форму на /#contacts — пришлём КП с ценами и сроками."
10. Предложение "оставить номер" используй НЕ чаще чем в 1 ответе из 3. По умолчанию направляй на калькулятор/проекты/базу знаний.
11. Если короткий фактический ответ (1 цифра, 1 факт) — CTA можно опустить вообще.
12. Если пользователь спрашивает «как связаться», «контакты», «телефон», «позвонить» — ОБЯЗАТЕЛЬНО дай телефон: +7 (980) 321-15-42, предложи оставить номер в форме ниже и дай ссылку на /#contacts.
13. Не пиши форму ниже если уже предложил калькулятор или проекты — один CTA на ответ.
14. Второй телефон: +7 (910) 737-24-85.`;

// Fallback если DeepSeek недоступен
function getFallback(): string {
  return "Сейчас не могу ответить. Загляните в калькулятор на /#calculator или посмотрите проекты на /#projects — там много полезного.";
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
        max_tokens: 180,
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
      reply: "Извините, произошла техническая ошибка. Оставьте номер телефона — менеджер перезвонит в ближайшую минуту.",
      error: true,
    }, { status: 200 });
  }
}
