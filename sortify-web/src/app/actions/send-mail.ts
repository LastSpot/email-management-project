"use server";

import { sendEmail } from "@/lib/clients/nodemailer";
import { Suggestion } from "@/lib/types";

export async function sendSuggestion({
  name,
  email,
  suggestionType,
  message,
}: Suggestion) {
  const subject = `New Suggestion from ${name} - ${suggestionType}`;
  const text = `Name: ${name}\nEmail: ${email}\nSuggestion Type: ${suggestionType}\nMessage: ${message}`;
  console.log(subject, text);
  try {
    await sendEmail(email, subject, text);
  } catch (error) {
    throw new Error("Failed to send suggestion", { cause: error });
  }
}
