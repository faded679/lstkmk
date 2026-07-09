import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

export async function PATCH(req: NextRequest) {
  try {
    const { leadId, name, phone, comment } = await req.json();

    if (!leadId) {
      return NextResponse.json({ error: "leadId required" }, { status: 400 });
    }

    // Update local DB
    try {
      const { updateLead, getLead } = await import("@/lib/db");
      const fields: Record<string, string> = {};
      if (name) fields.name = name;
      if (phone) fields.phone = phone;
      if (comment) fields.comment = comment;
      updateLead(Number(leadId), fields);

      const updated = getLead(Number(leadId));

      // Send Telegram update notification
      const text = [
        "✏️ <b>Обновление заявки #" + leadId + " (МАКСТИЛ Конфигуратор)</b>",
        "",
        updated?.name ? `👤 <b>Имя:</b> ${updated.name}` : null,
        updated?.phone ? `📞 <b>Телефон:</b> ${updated.phone}` : null,
        updated?.comment ? `💬 <b>Данные:</b>\n${updated.comment}` : null,
      ]
        .filter(Boolean)
        .join("\n");

      fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text, parse_mode: "HTML" }),
      }).catch(() => {});

      // If phone is now known — sync full lead to mctender
      if (updated?.phone && !updated.phone.includes("частичная")) {
        fetch("https://www.mctender.ru/api/leads/from-makstal", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: updated.name || "",
            phone: updated.phone,
            comment: updated.comment || "",
          }),
        }).catch(() => {});
      }
    } catch (dbErr) {
      console.warn("DB unavailable, skipping update:", dbErr);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("lead-update error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
