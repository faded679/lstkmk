import { NextRequest, NextResponse } from "next/server";
import { saveLead } from "@/lib/db";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

export async function POST(req: NextRequest) {
  try {
    const { name, phone, comment } = await req.json();

    if (!phone) {
      return NextResponse.json({ error: "Phone is required" }, { status: 400 });
    }

    // Сохраняем в БД
    const lead = saveLead(name || "", phone, comment || "");

    const text = [
      "📩 <b>Новая заявка с сайта МАКСТИЛ</b>",
      "",
      `👤 <b>Имя:</b> ${name || "не указано"}`,
      `📞 <b>Телефон:</b> ${phone}`,
      comment ? `💬 <b>Комментарий:</b> ${comment}` : null,
      `🆔 <b>ID:</b> ${lead.id}`,
    ]
      .filter(Boolean)
      .join("\n");

    // Отправляем в Telegram (не блокируем если ошибка)
    fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      }
    ).catch(err => console.error("Telegram error:", err));

    // Дублируем заявку на mctender.ru (FastAPI)
    fetch("https://www.mctender.ru/api/leads/from-makstal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name || "", phone, comment: comment || "" }),
    }).catch(err => console.error("MCTender error:", err));

    return NextResponse.json({ ok: true, id: lead.id });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
