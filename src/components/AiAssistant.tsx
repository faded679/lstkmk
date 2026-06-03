"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Robot, X, PaperPlaneTilt, CircleNotch } from "@phosphor-icons/react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Здравствуйте! Я виртуальный помощник МАКСТИЛ. Задайте вопрос о строительстве металлоконструкций, сроках, ценах или наших услугах.",
};

const FAQ_RESPONSES: Record<string, string> = {
  цена:
    "Стоимость зависит от типа здания, размеров и утепления. Ориентировочно: холодный ангар от 7 000 руб/м², тёплый склад от 10 000 руб/м². Воспользуйтесь нашим калькулятором для расчёта или оставьте заявку на точную смету.",
  срок:
    "Средний срок строительства: 30-60 дней в зависимости от площади и сложности. Проектирование занимает 5-10 дней, производство каркаса 15-20 дней, монтаж 15-30 дней.",
  гарантия:
    "Мы предоставляем гарантию 5 лет на несущие конструкции и 2 года на ограждающие. Все сварные соединения проходят ультразвуковой контроль.",
  доставка:
    "Доставляем металлоконструкции по всей России собственным автопарком. Стоимость доставки зависит от расстояния и объёма. До 500 км от завода доставка обычно включена в стоимость.",
  фундамент:
    "Мы выполняем все типы фундаментов: ленточные, столбчатые, свайные. Тип фундамента подбирается после геологических изысканий и зависит от нагрузок и грунта.",
  утепление:
    "Предлагаем сэндвич-панели толщиной от 50 до 200 мм. Для отапливаемых зданий в средней полосе рекомендуем панели 100-150 мм с минеральной ватой.",
  проект:
    "Проектирование входит в стоимость при заказе строительства под ключ. Отдельно проект стоит от 150 руб/м². Получаете полный комплект КМ и КМД.",
};

function findResponse(input: string): string {
  const lower = input.toLowerCase();

  for (const [key, response] of Object.entries(FAQ_RESPONSES)) {
    if (lower.includes(key)) return response;
  }

  if (lower.includes("привет") || lower.includes("здравств")) {
    return "Здравствуйте! Чем могу помочь? Спрашивайте о ценах, сроках, гарантии, утеплении или любых других вопросах по строительству.";
  }

  return "Спасибо за вопрос! Для подробной консультации рекомендую связаться с нашим инженером по телефону 8 (800) 555-35-35 или оставить заявку в разделе контактов. Также вы можете спросить меня о ценах, сроках, гарантии, доставке, фундаменте или утеплении.";
}

export default function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const send = () => {
    const text = input.trim();
    if (!text || loading) return;

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: findResponse(text) },
      ]);
      setLoading(false);
    }, 800 + Math.random() * 600);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-white rounded-xl border border-border shadow-xl overflow-hidden flex flex-col"
            style={{ height: 520 }}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-accent-blue text-white">
              <div className="flex items-center gap-2.5">
                <Robot size={20} weight="bold" />
                <div>
                  <div className="text-sm font-semibold">
                    Помощник МАКСТИЛ
                  </div>
                  <div className="text-[11px] text-white/70">Онлайн</div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-accent-blue text-white rounded-br-sm"
                        : "bg-slate-100 text-foreground rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 px-4 py-3 rounded-xl rounded-bl-sm">
                    <CircleNotch
                      size={18}
                      className="animate-spin text-accent-blue"
                    />
                  </div>
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex items-center gap-2 px-4 py-3 border-t border-border"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Задайте вопрос..."
                className="flex-1 h-10 px-3 text-sm bg-slate-50 border border-border rounded-lg outline-none focus:border-accent-blue transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-accent-blue text-white rounded-lg disabled:opacity-40 hover:bg-accent-blue/90 transition-colors"
              >
                <PaperPlaneTilt size={18} weight="bold" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-colors ${
          open
            ? "bg-slate-700 text-white"
            : "bg-accent-blue text-white"
        }`}
      >
        {open ? <X size={22} weight="bold" /> : <Robot size={24} weight="bold" />}
      </motion.button>
    </>
  );
}
