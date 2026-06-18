import { NextRequest, NextResponse } from "next/server";
import { saveUserMessage } from "@/lib/db";
import { getClientIp, getUserAgent } from "@/lib/request-meta";

const WELLFLOW_API_KEY = process.env.WELLFLOW_API_KEY || "wf_JbEEjBygUYrHJYGkCLKIpWfzodnE0PU9yzYWNybOA2N75VhI";
const WELLFLOW_BASE_URL = "https://api.wellflow.dev";

interface WellflowMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

async function getToken(): Promise<string> {
  const response = await fetch(`${WELLFLOW_BASE_URL}/api/v1/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ api_key: WELLFLOW_API_KEY }),
  });

  if (!response.ok) {
    throw new Error(`Failed to get token: ${response.status}`);
  }

  const data = await response.json();
  return data.access_token;
}

export async function POST(request: NextRequest) {
  try {
    const { messages, model = "gpt-4o-mini", sessionId } = await request.json();

    // Лог последнего user-сообщения
    if (Array.isArray(messages)) {
      const lastUser = [...messages].reverse().find(
        (m: WellflowMessage) => m?.role === "user" && typeof m?.content === "string"
      );
      if (lastUser) {
        saveUserMessage({
          source: "chat-wellflow",
          content: lastUser.content,
          sessionId: typeof sessionId === "string" ? sessionId : null,
          ip: getClientIp(request),
          userAgent: getUserAgent(request),
          meta: { model },
        });

        // Push to mctender (fire-and-forget)
        const mcUrl = process.env.MCTENDER_CHAT_URL || "http://127.0.0.1:8080/api/chat-messages/from-makstal";
        fetch(mcUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: lastUser.content,
            source: "chat-wellflow",
            session_id: typeof sessionId === "string" ? sessionId : "",
            ip: getClientIp(request),
            user_agent: getUserAgent(request),
            meta: JSON.stringify({ model }),
          }),
        }).catch(() => {});
      }
    }

    const token = await getToken();

    const response = await fetch(`${WELLFLOW_BASE_URL}/v1/chat/completions`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "system",
            content: "Вы — помощник по строительству быстровозводимых зданий из ЛСТК (легкие стальные тонкостенные конструкции). Отвечайте кратко и по делу."
          },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Wellflow API error" },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    return NextResponse.json({
      message: data.choices[0]?.message?.content || "Нет ответа",
    });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
