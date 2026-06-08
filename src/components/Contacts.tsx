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

// Иконка VK (Phosphor нет, делаем SVG)
const VkIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.714-1.033-1.033-1.49-1.171-1.744-1.171-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.492 4 8.076c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.779.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.475-.085.72-.576.72z"/>
  </svg>
);

// AI Chat API интеграция
async function getAIResponse(message: string): Promise<string> {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    
    if (!response.ok) {
      throw new Error("API error");
    }
    
    const data = await response.json();
    return data.reply;
  } catch {
    // Fallback при ошибке API
    return "Извините, произошла ошибка соединения. Пожалуйста, позвоните нам: +7 (980) 321-15-42 — инженер ответит на все вопросы.";
  }
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("maxsteel31@bk.ru");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, typing]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    
    const reply = await getAIResponse(trimmed);
    setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    setTyping(false);
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Валидация телефона
    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      setError("Введите корректный номер телефона");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Ошибка отправки. Попробуйте позже.");
        return;
      }
      setSubmitted(true);
      setForm({ name: "", phone: "", comment: "" });
    } catch {
      setError("Ошибка соединения. Проверьте интернет.");
    } finally {
      setLoading(false);
    }
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
              { icon: Phone, color: "accent-blue", label: "Телефон", value: "+7 (980) 321-15-42", sub: "Бесплатно по России", href: "tel:+79803211542" },
              { icon: EnvelopeSimple, color: "accent-orange", label: "Почта", value: "maxsteel31@bk.ru", href: null, copyEmail: true },
              { icon: MapPin, color: "accent-blue", label: "Адрес", value: "Белгородская область, с. Репное, ул. Автодорожная, 2" },
              { icon: Clock, color: "accent-orange", label: "Режим работы", value: "Пн–Пт: 9:00–18:00" },
            ].map(({ icon: Icon, color, label, value, sub, href, copyEmail: isCopy }) => (
              <div key={label} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-border">
                <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-${color}/10`}>
                  <Icon size={20} weight="bold" className={`text-${color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-muted mb-0.5">{label}</div>
                  {isCopy ? (
                    <button
                      onClick={copyEmail}
                      className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent-orange transition-colors group"
                    >
                      <span>{value}</span>
                      <span className={`text-xs font-normal transition-all duration-300 ${emailCopied ? "opacity-100 text-green-500" : "opacity-0 group-hover:opacity-60 text-muted"}`}>
                        {emailCopied ? "✓ Скопировано" : "копировать"}
                      </span>
                    </button>
                  ) : href ? (
                    <a href={href} className="text-sm font-semibold text-foreground hover:text-accent-blue transition-colors">{value}</a>
                  ) : (
                    <div className="text-sm font-semibold text-foreground">{value}</div>
                  )}
                  {sub && <div className="text-xs text-muted mt-0.5">{sub}</div>}
                </div>
              </div>
            ))}

            {/* Карточка VK отдельно */}
            <div className="bg-gradient-to-br from-[#0077FF]/10 to-[#0077FF]/5 rounded-xl p-5 border border-[#0077FF]/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0077FF] text-white">
                  <VkIcon />
                </div>
                <div>
                  <div className="text-xs text-muted">Социальная сеть</div>
                  <div className="text-sm font-semibold text-foreground">Мы во ВКонтакте</div>
                </div>
              </div>
              <p className="text-xs text-muted mb-3">Актуальные новости, фото объектов, ответы на вопросы</p>
              <a 
                href="https://vk.ru/mcsteel31" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center px-4 text-sm font-medium text-white bg-[#0077FF] rounded-lg hover:bg-[#0077FF]/90 transition-colors"
              >
                Перейти в VK
              </a>
            </div>
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
                  {error && (
                    <p className="text-sm text-red-600 text-center">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-11 text-sm font-medium text-white bg-accent-blue rounded-lg hover:bg-accent-blue/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      "Отправить заявку"
                    )}
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
