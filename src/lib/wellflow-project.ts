import { createProject, storeMemory, recallMemory } from "./wellflow";

const PROJECT_ID = "lstkmk-website";
const BRANCH = "main";

// Инициализировать проект (выполнить 1 раз)
export async function initProject(): Promise<void> {
  try {
    await createProject(
      PROJECT_ID,
      "ЛСТК МАКСТИЛ Сайт",
      "Разработка сайта для компании ЛСТК МАКСТИЛ: внедрение AI-ассистента, базы знаний, каталога проектов"
    );
    console.log("✅ Проект создан в Wellflow");
  } catch (error) {
    console.log("Проект уже существует или ошибка:", error);
  }
}

// Сохранить этап работы
export async function saveWorkSession(
  purpose: string,
  contribution: string,
  agentId: string = "developer"
): Promise<void> {
  await storeMemory(PROJECT_ID, {
    branchName: BRANCH,
    branchPurpose: purpose,
    cumulativeProgress: `Работа над ${purpose}`,
    thisContribution: contribution,
    agentId,
    agentType: "developer",
  });
}

// Получить контекст проекта
export async function getProjectContext(): Promise<any> {
  return await recallMemory(PROJECT_ID, "branch", BRANCH);
}

// Примеры использования:

// 1. Начало работы над фичей
export async function startFeature(featureName: string): Promise<void> {
  await saveWorkSession(
    `Разработка: ${featureName}`,
    `Начал работу над ${featureName}`,
    "feature-dev"
  );
}

// 2. Завершение задачи
export async function completeTask(taskName: string, details: string): Promise<void> {
  await saveWorkSession(
    `Завершено: ${taskName}`,
    details,
    "task-complete"
  );
}

// 3. Получить сводку работы
export async function getWorkSummary(): Promise<string> {
  const context = await getProjectContext();
  
  if (!context || !context.milestones) {
    return "Нет сохранённой истории работы.";
  }
  
  const milestones = context.milestones.slice(-5); // последние 5
  return milestones
    .map((m: any) => `- ${m.thisContribution} (${new Date(m.timestamp).toLocaleDateString()})`)
    .join("\n");
}
