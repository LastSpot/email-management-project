import { GoogleGenAI, Type } from "@google/genai";
import { Email, Folder } from "../types";

const gemini = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const geminiFlashModel = "gemini-2.0-flash";
const geminiThinkingModel = "gemini-2.5-pro-preview-06-05";

export async function sortSingleEmail({
  email,
  folders,
}: {
  email: Email;
  folders: Omit<Folder, "id">[];
}) {
  const response = await gemini.models.generateContent({
    model: geminiFlashModel,
    contents: `
You are a highly accurate email sortation assistant.  
For the single email below, evaluate its fit for each of the folders listed.  
**Compare across all folders**—do not treat them in isolation. Assign a compatibility score from 0 to 100 **relative to the other folders**, where:

- 0 means “definitely not a match”  
- 100 means “perfect match”  

Consider the sender, date, subject line, and full body text.  
An email about lululemon, for example, should not go into “spam” unless that folder’s description explicitly says it’s for promotional shopping.

Respond with a JSON array of objects, each having:
- "folderName": the folder’s name  
- "folderId": the folder’s provider_folder_id  
- "compatibility": integer between 0 and 100  
- "emailId": the ID of the email  

EMAIL:
\`\`\`
ID: ${email.id}
From: ${email.from}
Date: ${email.date}
Subject: ${email.subject}
Body:
${email.body}
\`\`\`

FOLDERS:
\`\`\`
${folders
  .map(
    (f) =>
      `Name: ${f.name}
Description: ${f.description}
FolderId: ${f.provider_folder_id}`
  )
  .join("\n\n")}
\`\`\`

Output only valid JSON. Example format:
\`\`\`
[
  {
    "folderName": "Work Projects",
    "folderId": "Label_12345",
    "compatibility": 92,
    "emailId": "${email.id}"
  },
  {
    "folderName": "Personal Finance",
    "folderId": "Label_67890",
    "compatibility": 5,
    "emailId": "${email.id}"
  }
]
\`\`\`
`,
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
