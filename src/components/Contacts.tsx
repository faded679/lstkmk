"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
  PaperPlaneRight,
  Robot,
  CheckCircle,
} from "@phosphor-icons/react";

const faqResponses: Record<string, string> = {
  цена: "Стоимость зависит от типа здания, площади и утепления. Ориентировочно: от 7 000 руб/м² для холодного ангара до 15 000 руб/м² для утеплённого производственного здания. Воспользуйтесь калькулятором выше или задайте уточняющий вопрос.",
  срок: "Средний срок строительства — 30-75 дней в зависимости от площади и сложности. Проектирование — от 10 дней, производство каркаса — от 15 дней, монтаж — от 14 дней.",
  гарантия: "Мы даём гарантию 5 лет на металлоконструкции и 3 года на монтажные работы. Все материалы сертифицированы, сварочные швы проходят контроль качества.",
  доставка: "Доставляем металлоконструкции по всей России. Стоимость доставки зависит от расстояния и объёма. При заказе от 500 м² — доставка бесплатно.",
  утепление: "Предлагаем сэндвич-панели 80мм (лёгкое утепление) и 150мм (полное утепление). Для отапливаемых зданий рекомендуем 150мм — это обеспечит энергоэффективность.",
  фундамент: "Проектируем и строим фундаменты под ключ: ленточные, столбчатые, свайные. Тип фундамента подбирается по результатам геологических изысканий.",
};

function getAiResponse(message: string): string {
  const lower = message.toLowerCase();
  for (const [key, response] of Object.entries(faqResponses)) {
    if (lower.includes(key)) return response;
  }
  return "Спасибо за вопрос! Наш инженер свяжется с вами для подробной консультации. Или позвоните: +7 (800) 100-91-51 (бесплатно по России).";
}

interface Message {
  role: "user" | "assistant";
  text: string;
}

export default function Contacts() {
  const reduce = useReducedMotion();

  // Chat state
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Здравствуйте! Задайте вопрос о ценах, сроках, гарантиях — отвечу сразу." },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  // Form state
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, typing]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", text: getAiResponse(trimmed) }]);
      setTyping(false);
    }, 800);
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacts" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-orange mb-3">Контакты</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none text-foreground">
            Свяжитесь с нами
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Col 1 — Contacts */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            {[
              { icon: Phone, color: "accent-blue", label: "Телефон", value: "+7 (800) 100-91-51", sub: "Бесплатно по России", href: "tel:+78001009151" },
              { icon: EnvelopeSimple, color: "accent-orange", label: "Почта", value: "maxsteel31@bk.ru", href: "mailto:maxsteel31@bk.ru" },
              { icon: MapPin, color: "accent-blue", label: "Адрес", value: "Белгородский р-н, с. Репное, ул. Автодорожная, 2" },
              { icon: Clock, color: "accent-orange", label: "Режим работы", value: "Пн–Пт: 9:00–18:00" },
            ].map(({ icon: Icon, color, label, value, sub, href }) => (
              <div key={label} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-border">
                <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-${color}/10`}>
                  <Icon size={20} weight="bold" className={`text-${color}`} />
                </div>
                <div>
                  <div className="text-xs text-muted mb-0.5">{label}</div>
                  {href ? (
                    <a href={href} className="text-sm font-semibold text-foreground hover:text-accent-blue transition-colors">{value}</a>
                  ) : (
                    <div className="text-sm font-semibold text-foreground">{value}</div>
                  )}
                  {sub && <div className="text-xs text-muted mt-0.5">{sub}</div>}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Col 2 — Request form */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white rounded-xl border border-border p-6 h-full">
              <h3 className="text-lg font-semibold text-foreground mb-1">Оставить заявку</h3>
              <p className="text-sm text-muted mb-5">Перезвоним в течение 30 минут в рабочее время.</p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                  <CheckCircle size={48} weight="duotone" className="text-green-500" />
                  <p className="text-base font-semibold text-foreground">Заявка отправлена!</p>
                  <p className="text-sm text-muted">Наш менеджер свяжется с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={submitForm} className="space-y-3">
                  <div>
                    <label className="text-xs text-muted block mb-1">Ваше имя</label>
                    <input
                      required
                      type="text"
                      placeholder="Иван Петров"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="w-full h-10 px-3.5 text-sm border border-border rounded-lg outline-none focus:border-accent-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted block mb-1">Телефон</label>
                    <input
                      required
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      className="w-full h-10 px-3.5 text-sm border border-border rounded-lg outline-none focus:border-accent-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted block mb-1">Комментарий (необязательно)</label>
                    <textarea
                      rows={3}
                      placeholder="Площадь, тип здания, регион..."
                      value={form.comment}
                      onChange={(e) => setForm((f) => ({ ...f, comment: e.target.value }))}
                      className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg outline-none focus:border-accent-blue transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full h-11 text-sm font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors"
                  >
                    Отправить заявку
                  </button>
                  <p className="text-[11px] text-muted text-center leading-relaxed">
                    Нажимая кнопку, вы соглашаетесь с{" "}
                    <a href="/privacy" className="hover:underline text-accent-blue">политикой конфиденциальности</a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Col 3 — AI chat */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white rounded-xl border border-border flex flex-col h-full min-h-[400px]">
              <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
                <div className="w-9 h-9 rounded-full bg-accent-blue/10 flex items-center justify-center">
                  <Robot size={18} weight="bold" className="text-accent-blue" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Помощник МАКСТИЛ</div>
                  <div className="text-xs text-muted">Ответы на типовые вопросы</div>
                </div>
              </div>

              <div ref={chatRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] px-4 py-2.5 rounded-xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-accent-blue text-white rounded-br-sm"
                        : "bg-slate-50 border border-border text-foreground rounded-bl-sm"
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {typing && (
                  <div className="flex justify-start">
                    <div className="bg-slate-50 border border-border px-4 py-2.5 rounded-xl rounded-bl-sm text-sm text-muted">Печатает...</div>
                  </div>
                )}
              </div>

              <div className="px-4 py-3 border-t border-border">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Спросите о ценах, сроках..."
                    className="flex-1 h-10 px-3.5 text-sm border border-border rounded-lg outline-none focus:border-accent-blue transition-colors"
                  />
                  <button
                    onClick={sendMessage}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-blue text-white hover:bg-accent-blue/90 transition-colors"
                  >
                    <PaperPlaneRight size={18} weight="bold" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
