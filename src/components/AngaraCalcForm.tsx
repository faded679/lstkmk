"use client";

import { useState } from "react";

export default function AngaraCalcForm() {
  const [size, setSize] = useState("");
  const [region, setRegion] = useState("");
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
        body: JSON.stringify({
          name: "",
          phone: phone.trim(),
          comment: `Калькулятор ангара. Размер: ${size}, регион: ${region}`,
        }),
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
        Спасибо! Менеджер перезвонит и рассчитает стоимость ангара.
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">Размер ангара</label>
        <input
          type="text"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          placeholder="Например, 24×48 м или 1000 м²"
          required
          className="w-full h-11 px-4 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/20"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">Регион</label>
        <input
          type="text"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          placeholder="Например, Белгородская область"
          required
          className="w-full h-11 px-4 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/20"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">Телефон</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+7 (___) ___-__-__"
          required
          className="w-full h-11 px-4 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/20"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex h-12 w-full items-center justify-center px-6 text-base font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors disabled:opacity-70"
      >
        {loading ? "Отправка..." : "Рассчитать стоимость ангара"}
      </button>
    </form>
  );
}
