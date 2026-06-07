import { NextRequest, NextResponse } from "next/server";
import { getLeads, getLeadsCount } from "@/lib/db";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    const password = authHeader?.replace("Bearer ", "");
    
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "100");
    const offset = parseInt(searchParams.get("offset") || "0");

    const leads = getLeads(limit, offset);
    const total = getLeadsCount();

    return NextResponse.json({ leads, total });
  } catch (e) {
    console.error("Leads API error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
