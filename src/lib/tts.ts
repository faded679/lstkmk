// TTS wrapper over Web Speech API (speechSynthesis)
// Auto-selects best Russian voice: Google русский > Milena > Microsoft Irina > any ru-RU

/* eslint-disable @typescript-eslint/no-explicit-any */

export function isTTSSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

let cachedVoice: SpeechSynthesisVoice | null | undefined = undefined;

function pickRuVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;

  const priority = ["Google русский", "Google Russian", "Milena", "Microsoft Irina"];
  for (const name of priority) {
    const v = voices.find((v) => v.name.toLowerCase().includes(name.toLowerCase()));
    if (v) return v;
  }
  return voices.find((v) => v.lang.startsWith("ru")) ?? null;
}

function getVoice(): SpeechSynthesisVoice | null {
  if (cachedVoice !== undefined) return cachedVoice;
  cachedVoice = pickRuVoice();
  return cachedVoice;
}

export function initTTSVoices(): void {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoice = pickRuVoice();
  };
  // Trigger initial load
  cachedVoice = pickRuVoice();
}

export interface SpeakOptions {
  onEnd?: () => void;
  onStart?: () => void;
}

export function speak(text: string, opts?: SpeakOptions): SpeechSynthesisUtterance | null {
  if (!isTTSSupported()) return null;
  window.speechSynthesis.cancel();

  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = "ru-RU";
  utt.rate = 1.0;
  utt.pitch = 1.0;

  const voice = getVoice();
  if (voice) utt.voice = voice;

  if (opts?.onStart) utt.onstart = () => opts.onStart!();
  if (opts?.onEnd) {
    utt.onend = () => opts.onEnd!();
    utt.onerror = () => opts.onEnd!();
  }

  window.speechSynthesis.speak(utt);
  return utt;
}

export function stopSpeaking(): void {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}
