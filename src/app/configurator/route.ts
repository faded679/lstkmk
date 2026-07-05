import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";
export const dynamic = "force-static";

export async function GET() {
  const html = await readFile(
    join(process.cwd(), "public", "configurator", "index.html"),
    "utf8"
  );

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
