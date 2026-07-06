"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type { ParseResult } from "@/lib/parseCommand";

type VoiceState = "idle" | "listening" | "processing" | "speaking";

interface VoiceAssistantProps {
  onCommand: (text: string) => ParseResult;
}

export default function VoiceAssistant({ onCommand }: VoiceAssistantProps) {
  const [state, setState] = useState<VoiceState>("idle");
  const [bubble, setBubble] = useState<string | null>(null);
  const [inputMode, setInputMode] = useState(false);
  const [inputText, setInputText] = useState("");
  const [micDenied, setMicDenied] = useState(false);

  const recognitionRef = useRef<any>(null);
  const bubbleTimeout = useRef<NodeJS.Timeout | null>(null);

  // Check SpeechRecognition support
  const getSpeechRecognition = useCallback(() => {
    if (typeof window === "undefined") return null;
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    return SR || null;
  }, []);

  // Speak text using speechSynthesis
  const speak = useCallback((text: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ru-RU";
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    // Pick best Russian voice
    const voices = window.speechSynthesis.getVoices();
    const ruVoice =
      voices.find((v) => v.lang.startsWith("ru") && v.name.includes("Google")) ||
      voices.find((v) => v.lang.startsWith("ru") && v.name.includes("Yandex")) ||
      voices.find((v) => v.lang.startsWith("ru"));
    if (ruVoice) utterance.voice = ruVoice;

    utterance.onstart = () => setState("speaking");
    utterance.onend = () => setState("idle");
    utterance.onerror = () => setState("idle");

    window.speechSynthesis.speak(utterance);
  }, []);

  // Process recognized text
  const processText = useCallback(
    (text: string) => {
      setState("processing");
      const result = onCommand(text);

      // Show bubble
      setBubble(result.text);
      if (bubbleTimeout.current) clearTimeout(bubbleTimeout.current);
      bubbleTimeout.current = setTimeout(() => setBubble(null), 8000);

      // Speak the response
      speak(result.text);
    },
    [onCommand, speak]
  );

  // Start listening
  const startListening = useCallback(() => {
    const SR = getSpeechRecognition();
    if (!SR) {
      setMicDenied(true);
      setInputMode(true);
      return;
    }

    const recognition = new SR();
    recognition.lang = "ru-RU";
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setState("listening");
    };

    recognition.onresult = (e: any) => {
      const transcript = e.results[0][0].transcript;
      processText(transcript);
    };

    recognition.onerror = (e: any) => {
      if (e.error === "not-allowed" || e.error === "service-not-allowed") {
        setMicDenied(true);
        setInputMode(true);
      }
      setState("idle");
    };

    recognition.onend = () => {
      if (state === "listening") setState("idle");
      recognitionRef.current = null;
    };

    recognitionRef.current = recognition;

    try {
      recognition.start();
    } catch {
      setState("idle");
    }
  }, [getSpeechRecognition, processText, state]);

  // Stop listening
  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        /* noop */
      }
      recognitionRef.current = null;
    }
    setState("idle");
  }, []);

  // Handle mic button click
  const handleClick = useCallback(() => {
    if (state === "listening") {
      stopListening();
      return;
    }
    if (state === "speaking") {
      window.speechSynthesis?.cancel();
      setState("idle");
      return;
    }

    if (micDenied) {
      setInputMode(true);
      return;
    }

    startListening();
  }, [state, micDenied, startListening, stopListening]);

  // Handle text input submit
  const handleSubmit = useCallback(() => {
    const text = inputText.trim();
    if (!text) return;
    setInputText("");
    processText(text);
  }, [inputText, processText]);

  // Load voices on mount
  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
  }, []);

  // Cleanup
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch { /* */ }
      }
      if (bubbleTimeout.current) clearTimeout(bubbleTimeout.current);
    };
  }, []);

  return (
    <>
      {/* Bubble */}
      {bubble && (
        <div
          style={{
            position: "fixed",
            bottom: 92,
            right: 24,
            zIndex: 10000,
            maxWidth: 300,
            padding: "12px 16px",
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 4px 24px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)",
            fontSize: 14,
            lineHeight: 1.5,
            color: "#1a1a2e",
            animation: "voiceBubbleIn 0.25s ease-out",
          }}
        >
          {bubble}
          <button
            onClick={() => setBubble(null)}
            style={{
              position: "absolute",
              top: 4,
              right: 8,
              background: "none",
              border: "none",
              fontSize: 16,
              cursor: "pointer",
              color: "#999",
              lineHeight: 1,
            }}
            aria-label="Закрыть"
          >
            ×
          </button>
        </div>
      )}

      {/* Text input fallback */}
      {inputMode && (
        <div
          style={{
            position: "fixed",
            bottom: 92,
            right: 24,
            zIndex: 10000,
            display: "flex",
            gap: 8,
            animation: "voiceBubbleIn 0.25s ease-out",
          }}
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
              if (e.key === "Escape") setInputMode(false);
            }}
            placeholder="Введите команду..."
            style={{
              width: 220,
              height: 40,
              padding: "0 12px",
              border: "1px solid #ddd",
              borderRadius: 8,
              fontSize: 14,
              outline: "none",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            }}
            autoFocus
          />
          <button
            onClick={handleSubmit}
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              border: "none",
              background: "#e67e22",
              color: "#fff",
              fontSize: 18,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Отправить"
          >
            →
          </button>
          <button
            onClick={() => setInputMode(false)}
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              border: "1px solid #ddd",
              background: "#fff",
              color: "#999",
              fontSize: 18,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Закрыть"
          >
            ×
          </button>
        </div>
      )}

      {/* Mic button */}
      <button
        onClick={handleClick}
        onContextMenu={(e) => {
          e.preventDefault();
          setInputMode((v) => !v);
        }}
        title={
          state === "listening"
            ? "Слушаю... (нажмите, чтобы остановить)"
            : state === "speaking"
            ? "Говорю... (нажмите, чтобы остановить)"
            : micDenied
            ? "Нет доступа к микрофону. Нажмите для текстового ввода"
            : "Голосовой помощник"
        }
        aria-label="Голосовой помощник"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 9999,
          width: 56,
          height: 56,
          borderRadius: "50%",
          border: "none",
          background: state === "listening" ? "#c0392b" : "#e67e22",
          color: "#fff",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(230, 126, 34, 0.4), 0 2px 6px rgba(0,0,0,0.12)",
          transition: "background 0.2s, transform 0.15s",
          transform: state === "listening" ? "scale(1.1)" : "scale(1)",
          animation: state === "listening" ? "voicePulse 1.5s ease-in-out infinite" : "none",
        }}
      >
        {state === "listening" ? (
          <MicOnIcon />
        ) : state === "processing" ? (
          <ProcessingIcon />
        ) : state === "speaking" ? (
          <SpeakerIcon />
        ) : (
          <MicIcon />
        )}
      </button>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes voicePulse {
          0%, 100% { box-shadow: 0 4px 16px rgba(192, 57, 43, 0.4), 0 2px 6px rgba(0,0,0,0.12); }
          50% { box-shadow: 0 4px 32px rgba(192, 57, 43, 0.7), 0 2px 12px rgba(0,0,0,0.15); }
        }
        @keyframes voiceBubbleIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

// --- SVG Icons (inline, no dependencies) ---

function MicIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="1" width="6" height="13" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}

function MicOnIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <rect x="9" y="1" width="6" height="13" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" strokeWidth="2" />
      <line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function ProcessingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="32">
        <animate attributeName="stroke-dashoffset" values="32;0;32" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function SpeakerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}
