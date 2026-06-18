const WELLFLOW_API_KEY = process.env.WELLFLOW_API_KEY || "wf_JbEEjBygUYrHJYGkCLKIpWfzodnE0PU9yzYWNybOA2N75VhI";
const WELLFLOW_BASE_URL = "https://api.wellflow.dev";

interface WellflowMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

interface ChatCompletionRequest {
  model: string;
  messages: WellflowMessage[];
  stream?: boolean;
  temperature?: number;
  max_tokens?: number;
}

// Anthropic API response format
interface ChatCompletionResponse {
  id?: string;
  type?: string;
  role?: string;
  model?: string;
  content?: Array<{
    type: string;
    text: string;
  }>;
  // Legacy format support
  completion?: string;
  // OpenAI-compatible
  choices?: Array<{
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

// Chat completion with Wellflow using Anthropic-compatible endpoint
export async function chatCompletion(
  request: ChatCompletionRequest
): Promise<ChatCompletionResponse> {
  // Convert to Anthropic format for Claude models
  const anthropicBody = {
    model: request.model,
    max_tokens: request.max_tokens || 1024,
    messages: request.messages,
    temperature: request.temperature,
  };

  const response = await fetch(`${WELLFLOW_BASE_URL}/v1/messages`, {
    method: "POST",
    headers: {
      "x-api-key": WELLFLOW_API_KEY,
      "anthropic-version": "2023-06-01",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(anthropicBody),
  });

  if (!response.ok) {
    throw new Error(`Chat completion failed: ${response.status}`);
  }

  return response.json();
}

// Store memory milestone
export async function storeMemory(
  projectId: string,
  data: {
    branchName: string;
    branchPurpose: string;
    cumulativeProgress: string;
    thisContribution: string;
    agentId: string;
    agentType: string;
  }
): Promise<void> {
  const response = await fetch(
    `${WELLFLOW_BASE_URL}/api/v1/memory/projects/${projectId}/store`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${WELLFLOW_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error(`Store memory failed: ${response.status}`);
  }
}

// Recall memory context
export async function recallMemory(
  projectId: string,
  view: string = "branch",
  branch: string = "main"
): Promise<any> {
  const response = await fetch(
    `${WELLFLOW_BASE_URL}/api/v1/memory/projects/${projectId}/recall?view=${view}&branch=${branch}`,
    {
      headers: {
        "Authorization": `Bearer ${WELLFLOW_API_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Recall memory failed: ${response.status}`);
  }

  return response.json();
}

// Create project
export async function createProject(
  projectId: string,
  name: string,
  roadmap: string
): Promise<void> {
  const response = await fetch(
    `${WELLFLOW_BASE_URL}/api/v1/memory/projects`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${WELLFLOW_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectId,
        name,
        roadmap,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Create project failed: ${response.status}`);
  }
}
