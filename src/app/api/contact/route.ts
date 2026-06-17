import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

export async function POST(req: NextRequest) {
  try {
    const { name, phone, comment } = await req.json();

    if (!phone) {
      return NextResponse.json({ error: "Phone is required" }, { status: 400 });
    }

    // Попытка сохранить в локальную БД (может не работать на serverless)
    let leadId: number | string = Date.now();
    try {
      const { saveLead } = await import("@/lib/db");
      const lead = saveLead(name || "", phone, comment || "");
      leadId = lead.id;
    } catch (dbErr) {
      console.warn("DB unavailable (serverless), skipping local save:", dbErr);
    }

    const text = [
      "📩 <b>Новая заявка с сайта МАКСТИЛ</b>",
      "",
      `👤 <b>Имя:</b> ${name || "не указано"}`,
      `📞 <b>Телефон:</b> ${phone}`,
      comment ? `💬 <b>Комментарий:</b> ${comment}` : null,
      `🆔 <b>ID:</b> ${leadId}`,
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
    try {
      const mcRes = await fetch("https://www.mctender.ru/api/leads/from-makstal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name || "", phone, comment: comment || "" }),
      });
      if (!mcRes.ok) {
        console.error("MCTender responded with:", mcRes.status, await mcRes.text().catch(() => ""));
      }
    } catch (err) {
      console.error("MCTender error:", err);
    }

    return NextResponse.json({ ok: true, id: leadId });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
