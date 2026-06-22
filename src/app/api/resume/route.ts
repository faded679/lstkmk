import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

export async function POST(req: NextRequest) {
  try {
    const { vacancy, name, phone, city, experience, comment } = await req.json();

    if (!phone || !name) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
    }

    const text = [
      "📋 <b>Новое резюме с сайта МАКСТИЛ</b>",
      "",
      `💼 <b>Вакансия:</b> ${vacancy || "не указана"}`,
      `👤 <b>ФИО:</b> ${name}`,
      `📞 <b>Телефон:</b> ${phone}`,
      city ? `📍 <b>Город:</b> ${city}` : null,
      experience ? `🛠 <b>Опыт работы:</b> ${experience}` : null,
      comment ? `💬 <b>Дополнительно:</b> ${comment}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text, parse_mode: "HTML" }),
      }
    ).catch((err) => console.error("Telegram error:", err));

    try {
      const mcRes = await fetch("https://www.mctender.ru/api/leads/from-makstal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          comment: `Резюме на вакансию: ${vacancy || "—"}. Город: ${city || "—"}. Опыт: ${experience || "—"}. ${comment || ""}`.trim(),
        }),
      });
      if (!mcRes.ok) {
        console.error("MCTender responded with:", mcRes.status);
      }
    } catch (err) {
      console.error("MCTender error:", err);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Resume API error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
