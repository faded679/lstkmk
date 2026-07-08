import { NextRequest, NextResponse } from "next/server";

const YANDEX_API_KEY = process.env.YANDEX_API_KEY!;
const YANDEX_FOLDER_ID = process.env.YANDEX_FOLDER_ID!;

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();
    if (!text) return NextResponse.json({ error: "No text" }, { status: 400 });

    const params = new URLSearchParams({
      text,
      lang: "ru-RU",
      voice: "alena",
      emotion: "good",
      speed: "1.0",
      format: "mp3",
      folderId: YANDEX_FOLDER_ID,
    });

    const res = await fetch(
      `https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize`,
      {
        method: "POST",
        headers: {
          Authorization: `Api-Key ${YANDEX_API_KEY}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("Yandex TTS error:", res.status, err);
      return NextResponse.json({ error: "TTS failed" }, { status: 502 });
    }

    const audioBuffer = await res.arrayBuffer();
    return new NextResponse(audioBuffer, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (e) {
    console.error("TTS route error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
