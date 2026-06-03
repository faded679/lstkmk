import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Добавляем timestamp
    const application = {
      ...data,
      id: Date.now().toString(),
      status: "new",
    };

    // Путь к файлу для хранения заявок
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "vacancy-applications.json");

    // Создаем директорию если нет
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Читаем существующие заявки
    let applications = [];
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      applications = JSON.parse(content);
    }

    // Добавляем новую заявку
    applications.push(application);

    // Сохраняем
    fs.writeFileSync(filePath, JSON.stringify(applications, null, 2));

    return NextResponse.json({ success: true, id: application.id });
  } catch (error) {
    console.error("Error saving application:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save application" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "vacancy-applications.json");
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ applications: [] });
    }

    const content = fs.readFileSync(filePath, "utf-8");
    const applications = JSON.parse(content);

    return NextResponse.json({ applications });
  } catch (error) {
    console.error("Error reading applications:", error);
    return NextResponse.json(
      { success: false, error: "Failed to read applications" },
      { status: 500 }
    );
  }
}
