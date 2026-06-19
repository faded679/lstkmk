// Web Speech API wrapper — handles mobile quirks and surface errors.
// Mobile (iOS Safari, Android Chrome) need interimResults=true + continuous=true
// to reliably get any onresult callback — without these final result may never fire.

/* eslint-disable @typescript-eslint/no-explicit-any */

export interface VoiceController {
  start: () => void;
  stop: () => void;
}

export interface VoiceCallbacks {
  onTranscript: (text: string) => void;
  onError: (msg: string) => void;
  onEnd: () => void;
}

export function isVoiceSupported(): boolean {
  if (typeof window === "undefined") return false;
  return !!((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);
}

export function createVoice(cb: VoiceCallbacks): VoiceController | null {
  if (typeof window === "undefined") return null;
  const SR: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  if (!SR) return null;

  const rec: any = new SR();
  rec.lang = "ru-RU";
  rec.continuous = true;
  rec.interimResults = true;
  rec.maxAlternatives = 1;

  let finalText = "";

  rec.onresult = (e: any) => {
    let interim = "";
    let appended = "";
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const r = e.results[i];
      if (r.isFinal) {
        appended += r[0].transcript;
      } else {
        interim += r[0].transcript;
      }
    }
    if (appended) {
      finalText += (finalText ? " " : "") + appended.trim();
    }
    // Emit final + interim so user sees live text
    const emit = finalText + (interim ? (finalText ? " " : "") + interim : "");
    if (emit) cb.onTranscript(emit);
  };

  rec.onerror = (e: any) => {
    const code = e?.error || "unknown";
    const map: Record<string, string> = {
      "not-allowed": "Нет доступа к микрофону. Разрешите доступ в настройках браузера.",
      "service-not-allowed": "Голосовой ввод заблокирован. Разрешите микрофон.",
      "no-speech": "Речь не распознана. Попробуйте ещё раз.",
      "audio-capture": "Микрофон не найден. Проверьте устройство.",
      "network": "Ошибка сети. Проверьте подключение.",
      "aborted": "",
    };
    const msg = map[code] ?? `Ошибка распознавания: ${code}`;
    if (msg) cb.onError(msg);
  };

  rec.onend = () => cb.onEnd();

  return {
    start: () => {
      try {
        rec.start();
      } catch (err: any) {
        // Already started — ignore InvalidStateError
        if (err?.name !== "InvalidStateError") {
          cb.onError(`Не удалось запустить: ${err?.message || err}`);
        }
      }
    },
    stop: () => {
      try { rec.stop(); } catch { /* noop */ }
    },
  };
}
