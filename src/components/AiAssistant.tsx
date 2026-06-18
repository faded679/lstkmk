"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Robot, X, PaperPlaneTilt, CircleNotch, Microphone, MicrophoneSlash } from "@phosphor-icons/react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Здравствуйте! Я помощник МАКСТИЛ. Спрашивайте о ценах, сроках, технологиях ЛСТК, утеплении — отвечу сразу.",
};

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
    return "Извините, произошла ошибка. Позвоните нам: +7 (980) 321-15-42 — инженер ответит на все вопросы.";
  }
}

export default function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const stopListening = () => {
    recognitionRef.current?.stop();
    setListening(false);
  };

  const toggleListening = () => {
    if (typeof window === "undefined") return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SR: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      alert("Ваш браузер не поддерживает голосовой ввод. Используйте Chrome.");
      return;
    }
    if (listening) {
      stopListening();
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rec: any = new SR();
    rec.lang = "ru-RU";
    rec.interimResults = false;
    rec.onresult = (e: any) => {
      const transcript = e.results[0][0].transcript;
      setInput((prev) => (prev ? prev + " " + transcript : transcript));
    };
    rec.onerror = () => setListening(false);
    rec.onend = () => setListening(false);
    recognitionRef.current = rec;
    rec.start();
    setListening(true);
  };

  const send = async () => {
    if (listening) stopListening();
    const text = input.trim();
    if (!text || loading) return;

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    setLoading(true);

    const reply = await getAIResponse(text);
    setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    setLoading(false);
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
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed whitespace-pre-line ${
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
              <button
                type="button"
                onClick={toggleListening}
                className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                  listening
                    ? "bg-red-500 text-white animate-pulse"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
                title={listening ? "Остановить запись" : "Голосовой ввод"}
              >
                {listening ? <MicrophoneSlash size={18} weight="bold" /> : <Microphone size={18} weight="bold" />}
              </button>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={listening ? "Говорите..." : "Спросите о ценах, сроках..."}
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
