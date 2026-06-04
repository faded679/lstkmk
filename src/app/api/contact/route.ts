import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

export async function POST(req: NextRequest) {
  try {
    const { name, phone, comment } = await req.json();

    if (!phone) {
      return NextResponse.json({ error: "Phone is required" }, { status: 400 });
    }

    const text = [
      "📩 <b>Новая заявка с сайта МАКСТИЛ</b>",
      "",
      `👤 <b>Имя:</b> ${name || "не указано"}`,
      `📞 <b>Телефон:</b> ${phone}`,
      comment ? `💬 <b>Комментарий:</b> ${comment}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const response = await fetch(
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
    );

    if (!response.ok) {
      const err = await response.text();
      console.error("Telegram error:", err);
      return NextResponse.json({ error: "Telegram error" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
