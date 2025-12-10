import { GoogleGenAI } from "@google/genai";

// ... existing code ...
const EXCHANGE_PLANNER_KEY = 'studySparkExchangePlanner_v2';

type AppView = 'flashcards_input' | 'quiz' | 'navigator' | 'gpa' | string;

const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
// Using Gemini 3 Pro for complex reasoning tasks (Quiz, Navigator, GPA Advice, Flashcard Reasoning)
const MODEL_COMPLEX = 'gemini-3-pro-preview'; 
// Updated to Gemini 3 Pro for all tasks to meet hackathon "Technical Depth" requirements
const MODEL_FAST = 'gemini-3-pro-preview';

// App State
let currentView: AppView = 'flashcards_input';
// ... existing code ...