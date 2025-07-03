import { GoogleGenAI, Type } from "@google/genai";
import { Email, Folder } from "@/lib/types";

const gemini = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const geminiFlashModel = "gemini-2.0-flash";
// const geminiThinkingModel = "gemini-2.5-pro-preview-06-05";

const classificationPrompt = (
  email: Email,
  folders: Omit<Folder, "user_id">[]
) => {
  return `You are an expert email sorter. Given one email and exactly these folders—no others—assign each a strict compatibility score (0–100) relative to the set. Use only the provided folders.

Rules:
• 0 = no fit, 100 = perfect fit  
• Weight all fields equally
• Only use the folders listed; do not invent or reference any outside folders  
• High scores (>85) only when the email’s meaning closely matches the folder’s purpose 

Return a JSON array of objects with:
  folderName   (string)
  folderId     (string)
  compatibility(integer 0–100)
  emailId      (string)

EMAIL:
ID: ${email.id}  
From: ${email.from}  
Date: ${email.date}  
Subject: ${email.subject}  
Body:
${email.body}

FOLDERS:
${folders
  .map(
    (f) =>
      `Name: ${f.name}
Description: ${f.description}
FolderId: ${f.provider_folder_id}`
  )
  .join("\n\n")}

Output only valid JSON. Example:
[
  { "folderName": "Work Projects",    "folderId": "Label_12345", "compatibility": 92, "emailId": "${
    email.id
  }" },
  { "folderName": "Personal Finance", "folderId": "Label_67890", "compatibility":  5, "emailId": "${
    email.id
  }" }
]
`;
};

export async function emailClassifications({
  email,
  folders,
}: {
  email: Email;
  folders: Omit<Folder, "user_id">[];
}) {
  const response = await gemini.models.generateContent({
    model: geminiFlashModel,
    contents: classificationPrompt(email, folders),
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            folderName: {
              type: Type.STRING,
            },
            folderId: {
              type: Type.STRING,
            },
            compatibility: {
              type: Type.INTEGER,
            },
            emailId: {
              type: Type.STRING,
            },
          },
          propertyOrdering: [
            "folderName",
            "folderId",
            "compatibility",
            "emailId",
          ],
        },
      },
    },
  });
  const raw = response.text;
  let parsed;
  try {
    parsed = JSON.parse(raw ?? "[]");
  } catch (e) {
    console.error("Failed to parse LLM JSON:", raw);
    throw e;
  }
  return parsed as Array<{
    folderName: string;
    folderId: string;
    compatibility: number;
    emailId: string;
  }>;
}
