import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey =
  process.env.NEXT_GOOGLE_GEMINI_API_KEY ||
  "AIzaSyBGGw5nSTPlOlL_AToa54Q7R_K91IlX684";
if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not defined");
}
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [],
});
