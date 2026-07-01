"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Robot, X, PaperPlaneTilt, CircleNotch, Microphone, MicrophoneSlash, Phone, Check, ChatTeardropDots, SpeakerHigh, SpeakerSlash, SpeakerX } from "@phosphor-icons/react";
import { createVoice, type VoiceController } from "@/lib/voice-input";
import { speak, stopSpeaking, initTTSVoices, isTTSSupported } from "@/lib/tts";

const LINK_LABELS: Record<string, string> = {
  "/#calculator": "🧮 Калькулятор",
  "/#projects":   "📁 Наши проекты",
  "/#contacts":   "📞 Контакты",
  "/knowledge/":  "📚 База знаний",
  "/knowledge":   "📚 База знаний",
};

function getLinkLabel(url: string): string {
  if (LINK_LABELS[url]) return LINK_LABELS[url];
  if (url.startsWith("/knowledge")) return "📚 База знаний";
  if (url.startsWith("https://t.me")) return "Telegram";
  if (url.startsWith("https://vk.com")) return "ВКонтакте";
  if (url.startsWith("https://www.instagram.com")) return "Instagram";
  if (url.startsWith("https://www.youtube.com") || url.startsWith("https://youtube.com")) return "YouTube";
  return url;
}

function linkify(text: string): React.ReactNode[] {
  const re = /(https?:\/\/[^\s]+|\/[a-zA-Z0-9#/_-]+)/g;
  const parts: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    let url = m[0];
    const trailing = url.match(/[.,;:!?)]+$/);
    let tail = "";
    if (trailing) {
      tail = trailing[0];
      url = url.slice(0, -tail.length);
    }
    const label = getLinkLabel(url);
    const isExternal = url.startsWith("http");
    parts.push(
      <a
        key={key++}
        href={url}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="inline-flex items-center gap-1 px-2 py-0.5 mx-0.5 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-medium hover:bg-accent-blue/20 transition-colors no-underline whitespace-nowrap"
      >
        {label}
      </a>
    );
    if (tail) parts.push(tail);
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

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
    return "Извините, произошла ошибка. Попробуйте калькулятор на /#calculator или посмотрите проекты на /#projects.";
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
        aria-label="Телефон для обратного звонка"
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
  const [hintDismissed, setHintDismissed] = useState(false);
  const [muted, setMuted] = useState(false);
  const [speakingIdx, setSpeakingIdx] = useState<number | null>(null);
  const listenRef = useRef(false);
  const mutedRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const voiceRef = useRef<VoiceController | null>(null);
  const baseInputRef = useRef<string>("");

  useEffect(() => { initTTSVoices(); }, []);
  useEffect(() => { listenRef.current = listening; }, [listening]);
  useEffect(() => { mutedRef.current = muted; }, [muted]);

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
    stopSpeaking();
    setSpeakingIdx(null);
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
    setLoading(false);

    if (!mutedRef.current && !listenRef.current && isTTSSupported()) {
      const idx = withReply.length - 1;
      speak(reply, {
        onStart: () => setSpeakingIdx(idx),
        onEnd: () => setSpeakingIdx((prev) => (prev === idx ? null : prev)),
      });
    }
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
              <div className="flex items-center gap-1">
                {isTTSSupported() && (
                  <button
                    onClick={() => {
                      const next = !muted;
                      setMuted(next);
                      if (next) { stopSpeaking(); setSpeakingIdx(null); }
                    }}
                    aria-label={muted ? "Включить озвучку" : "Отключить озвучку"}
                    title={muted ? "Включить озвучку" : "Отключить озвучку"}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                  >
                    {muted ? <SpeakerX size={18} /> : <SpeakerHigh size={18} />}
                  </button>
                )}
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Закрыть чат"
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
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
                    <div className={`relative group max-w-[85%] ${
                      msg.role === "user" ? "" : "flex flex-col"
                    }`}>
                      <div
                        className={`px-3.5 py-2.5 rounded-xl text-sm leading-relaxed whitespace-pre-line ${
                          msg.role === "user"
                            ? "bg-accent-blue text-white rounded-br-sm"
                            : "bg-slate-100 text-foreground rounded-bl-sm"
                        }`}
                      >
                        {msg.role === "assistant" ? linkify(msg.content) : msg.content}
                      </div>
                      {msg.role === "assistant" && isTTSSupported() && (
                        <button
                          onClick={() => {
                            if (speakingIdx === i) {
                              stopSpeaking();
                              setSpeakingIdx(null);
                            } else {
                              speak(msg.content, {
                                onStart: () => setSpeakingIdx(i),
                                onEnd: () => setSpeakingIdx((prev) => (prev === i ? null : prev)),
                              });
                            }
                          }}
                          aria-label={speakingIdx === i ? "Остановить озвучку" : "Озвучить сообщение"}
                          className="mt-1 self-start flex items-center gap-1 text-[10px] text-slate-400 hover:text-accent-blue transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                        >
                          {speakingIdx === i
                            ? <SpeakerSlash size={13} weight="bold" />
                            : <SpeakerHigh size={13} weight="bold" />}
                          {speakingIdx === i ? "Стоп" : "Озвучить"}
                        </button>
                      )}
                    </div>
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

            {/* Постоянная форма обратного звонка */}
            <div className="px-4 py-2.5 border-t border-border bg-slate-50">
              <p className="text-[11px] text-muted mb-1.5">Нужен звонок? Оставьте номер — перезвоним за минуту:</p>
              <CallbackForm />
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
                aria-label={listening ? "Остановить запись" : "Голосовой ввод"}
              >
                {listening ? <MicrophoneSlash size={18} weight="bold" /> : <Microphone size={18} weight="bold" />}
              </button>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={listening ? "Говорите..." : "Спросите о ценах, сроках..."}
                aria-label="Вопрос помощнику"
                className="flex-1 h-10 px-3 text-sm bg-slate-50 border border-border rounded-lg outline-none focus:border-accent-blue transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Отправить сообщение"
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-accent-blue text-white rounded-lg disabled:opacity-40 hover:bg-accent-blue/90 transition-colors"
              >
                <PaperPlaneTilt size={18} weight="bold" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Hint bubble */}
        <AnimatePresence>
          {!open && !hintDismissed && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              transition={{ delay: 1.5, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white border border-border rounded-xl shadow-lg px-4 py-3 max-w-[200px] cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <button
                onClick={(e) => { e.stopPropagation(); setHintDismissed(true); }}
                className="absolute -top-2 -right-2 w-5 h-5 bg-slate-400 hover:bg-slate-500 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <X size={10} weight="bold" />
              </button>
              <div className="flex items-center gap-2 mb-1">
                <ChatTeardropDots size={16} className="text-accent-blue flex-shrink-0" weight="fill" />
                <span className="text-xs font-semibold text-foreground">Спросите ИИ-помощника</span>
              </div>
              <p className="text-[11px] text-muted leading-tight">Цены, сроки, расчёт — отвечу сразу</p>
              {/* Arrow */}
              <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-border rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main button */}
        <div className="relative">
          {/* Pulse ring — только когда закрыто */}
          {!open && (
            <span className="absolute inset-0 rounded-full bg-accent-blue/30 animate-ping" />
          )}
          <motion.button
            onClick={() => { setOpen(!open); setHintDismissed(true); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-colors ${
              open ? "bg-slate-700 text-white" : "bg-accent-blue text-white"
            }`}
          >
            {open ? <X size={22} weight="bold" /> : <Robot size={24} weight="bold" />}
          </motion.button>
        </div>
      </div>
    </>
  );
}
