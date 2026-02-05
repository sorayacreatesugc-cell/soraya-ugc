import { GoogleGenAI, Type } from "@google/genai";
import { AIStrategyResult } from '../types';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateContentStrategy = async (brandName: string, productType: string): Promise<AIStrategyResult[]> => {
  try {
    const model = 'gemini-3-flash-preview';
    
    const prompt = `
      You are an expert UGC (User Generated Content) strategist. 
      Create 3 distinct, high-performing short-form video concepts (TikTok/Reels style) for a brand named "${brandName}" selling "${productType}".
      
      Focus on these angles: 
      1. Problem/Solution 
      2. ASMR/Aesthetic 
      3. Testimonial/Storytime.
      
      Return the response in JSON format.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              hook: { type: Type.STRING, description: "The text hook on screen or first spoken sentence." },
              visual: { type: Type.STRING, description: "Description of the visual action happening." },
              whyItWorks: { type: Type.STRING, description: "Brief explanation of the psychology behind this concept." }
            },
            required: ["hook", "visual", "whyItWorks"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    
    return JSON.parse(text) as AIStrategyResult[];
  } catch (error) {
    console.error("Error generating strategy:", error);
    throw error;
  }
};