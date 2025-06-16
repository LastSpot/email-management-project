"use server";

import { sendEmail } from "@/lib/clients/nodemailer";
import { Suggestion } from "@/lib/types";

export async function sendSuggestion({
  name,
  email,
  suggestionType,
  message,
}: Suggestion) {
  const from = `"Sortify Suggestions" <${process.env.SMTP_USER}>`;
  const subject = `New Suggestion from ${name} - ${suggestionType}`;
  const text = `Name: ${name}\nEmail: ${email}\n\nSuggestion Type: ${suggestionType}\n\nMessage: ${message}`;
  try {
    await sendEmail(from, email, subject, text);
    await autoReplyForSuggestion(email);
  } catch (error) {
    throw new Error("Failed to send suggestion", { cause: error });
  }
}

async function autoReplyForSuggestion(email: string) {
  try {
    const from = `"Sortify Team" <${process.env.SMTP_USER}>`;
    const subject = "Thank you for your suggestion!";
    const text = `
      Hi,
      Thank you for sending out suggestions to Sortify.
      We've received your message and a member of our team will get back to you within 24 hours.
      In the meantime, feel free to explore Sortify further.
      Best regards,
      The Sortify Team`;
    const html = `
      <p>Hi,</p>
      <p>Thank you for reaching out to <strong>Sortify</strong>.</p>
      <p>We've received your message and a member of our team will get back to you within <strong>24 hours</strong>.</p>
      <p>In the meantime, feel free to explore Sortify further.</p>
      <br/>
      <p>Best regards,<br/>
        The Sortify Team<br/>
      </p>`;
    await sendEmail(from, email, subject, text, html);
  } catch (error) {
    throw new Error("Failed to send auto reply", { cause: error });
  }
}
