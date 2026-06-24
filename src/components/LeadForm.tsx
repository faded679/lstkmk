"use client";

import { useState } from "react";
import { Phone } from "@phosphor-icons/react/dist/ssr";

export default function LeadForm({ comment }: { comment: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim() || loading) return;
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim(), comment }),
      });
    } catch {
      // ignore
    }
    setSent(true);
    setLoading(false);
  };

  if (sent) {
    return (
      <div className="p-4 rounded-xl bg-green-50 text-green-700 text-sm text-center">
        Спасибо! Менеджер перезвонит в ближайшую минуту.
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ваше имя"
        required
        className="w-full h-11 px-4 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/20"
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="+7 (___) ___-__-__"
        required
        className="w-full h-11 px-4 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/20"
      />
      <button
        type="submit"
        disabled={loading}
        className="inline-flex h-12 w-full items-center justify-center px-6 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors disabled:opacity-70"
      >
        {loading ? "Отправка..." : "Рассчитать стоимость"}
      </button>
      <div className="mt-4 pt-4 border-t border-border text-center">
        <a
          href="tel:+79606322061"
          className="inline-flex items-center justify-center gap-2 text-sm font-medium text-foreground hover:text-accent-blue transition-colors"
        >
          <Phone size={18} weight="bold" />
          +7 (960) 632-20-61
        </a>
      </div>
    </form>
  );
}
