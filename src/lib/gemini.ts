import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const model = "gemini-3-flash-preview";

export async function generateChatResponse(message: string, history: { role: "user" | "model"; parts: { text: string }[] }[]) {
  const chat = ai.chats.create({
    model: model,
    config: {
      systemInstruction: "You are Nexus, a helpful and concise AI assistant. You provide clear, accurate, and friendly responses.",
    },
  });

  // Reconstruct history if needed, but for simple sendMessage we can just pass the message
  // Note: sendMessage only accepts 'message' string in this SDK version
  const result = await chat.sendMessage({ message });
  return result.text;
}

export async function* streamChatResponse(message: string) {
  const chat = ai.chats.create({
    model: model,
    config: {
      systemInstruction: "You are Nexus, a helpful and concise AI assistant. You provide clear, accurate, and friendly responses.",
    },
  });

  const result = await chat.sendMessageStream({ message });
  for await (const chunk of result) {
    yield chunk.text;
  }
}
