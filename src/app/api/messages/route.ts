import { NextRequest, NextResponse } from "next/server";
import { getUserMessages, getUserMessagesCount } from "@/lib/db";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    const password = authHeader?.replace("Bearer ", "");

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "200");
    const offset = parseInt(searchParams.get("offset") || "0");

    const messages = getUserMessages(limit, offset);
    const total = getUserMessagesCount();

    return NextResponse.json({ messages, total });
  } catch (e) {
    console.error("Messages API error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
