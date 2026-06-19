"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Robot, X, PaperPlaneTilt, CircleNotch, Microphone, MicrophoneSlash, Phone, Check } from "@phosphor-icons/react";
import { createVoice, type VoiceController } from "@/lib/voice-input";

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
    return "Извините, произошла ошибка. Оставьте номер — менеджер перезвонит в ближайшую минуту.";
  }
}

function CallbackForm() {
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const p = phone.trim();
    if (!p || loading) return;
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: p, comment: "Обратный звонок из чата" }),
      });
      setSent(true);
    } catch {
      setSent(true);
    }
    setLoading(false);
  };

  if (sent) {
    return (
      <div className="mt-2 flex items-center gap-2 text-xs text-green-600 bg-green-50 rounded-lg px-3 py-2">
        <Check size={14} weight="bold" />
        Менеджер перезвонит в ближайшую минуту
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="mt-2 flex gap-1.5">
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="+7 (___) ___-__-__"
        type="tel"
        className="flex-1 h-8 px-2.5 text-xs bg-white border border-border rounded-lg outline-none focus:border-accent-blue transition-colors"
      />
      <button
        type="submit"
        disabled={!phone.trim() || loading}
        className="h-8 px-3 flex items-center gap-1.5 text-xs bg-accent-blue text-white rounded-lg disabled:opacity-40 hover:bg-accent-blue/90 transition-colors whitespace-nowrap"
      >
        {loading ? <CircleNotch size={12} className="animate-spin" /> : <Phone size={12} weight="bold" />}
        Перезвоните
      </button>
    </form>
  );
}

export default function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [voiceError, setVoiceError] = useState<string | null>(null);
  const [callbackShownAt, setCallbackShownAt] = useState<Set<number>>(new Set([0]));
  const scrollRef = useRef<HTMLDivElement>(null);
  const voiceRef = useRef<VoiceController | null>(null);
  const baseInputRef = useRef<string>("");

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const stopListening = () => {
    voiceRef.current?.stop();
  };

  const toggleListening = () => {
    if (listening) {
      stopListening();
      return;
    }
    setVoiceError(null);
    baseInputRef.current = input ? input.trim() + " " : "";
    const ctrl = createVoice({
      onTranscript: (text) => setInput(baseInputRef.current + text),
      onError: (msg) => {
        setVoiceError(msg);
        setListening(false);
      },
      onEnd: () => setListening(false),
    });
    if (!ctrl) {
      setVoiceError("Браузер не поддерживает голосовой ввод. Используйте Chrome или Safari.");
      return;
    }
    voiceRef.current = ctrl;
    ctrl.start();
    setListening(true);
  };

  const send = async () => {
    if (listening) stopListening();
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: "user" as const, content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    const reply = await getAIResponse(text);
    const withReply = [...nextMessages, { role: "assistant" as const, content: reply }];
    setMessages(withReply);
    setCallbackShownAt((prev) => new Set([...prev, withReply.length - 1]));
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
            style={{ height: 540 }}
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
                <div key={i}>
                  <div
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
                  {msg.role === "assistant" && callbackShownAt.has(i) && (
                    <div className="pl-1 pr-8">
                      <p className="text-[11px] text-muted mt-2 mb-1">
                        Оставьте номер — менеджер перезвонит в ближайшую минуту:
                      </p>
                      <CallbackForm />
                    </div>
                  )}
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

            {voiceError && (
              <div className="px-4 py-2 text-xs text-red-600 bg-red-50 border-t border-red-100">
                {voiceError}
              </div>
            )}
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
