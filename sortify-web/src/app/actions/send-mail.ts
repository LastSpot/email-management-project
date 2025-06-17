"use server";

import { sendEmail } from "@/lib/clients/nodemailer";
import { Contact, Suggestion } from "@/lib/types";

export async function sendSuggestion(suggestion: Suggestion) {
  const from = `"Sortify Suggestions" <${process.env.SMTP_USER}>`;
  const subject = `New Suggestion from ${suggestion.name} - ${suggestion.suggestionType}`;
  const text = `Name: ${suggestion.name}\nEmail: ${suggestion.email}\n\nSuggestion Type: ${suggestion.suggestionType}\n\nMessage: ${suggestion.message}`;
  try {
    await sendEmail(from, process.env.SMTP_USER!, subject, text);
    await autoReplyForSuggestion(suggestion.email);
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
    throw new Error("Failed to send auto reply for suggestion", {
      cause: error,
    });
  }
}

export async function sendContactForm(contact: Contact) {
  const from = `"Sortify Team" <${process.env.SMTP_USER}>`;
  const subject = `New Contact from ${contact.name} - ${contact.inquiryType}`;
  const text = `Name: ${contact.name}\nEmail: ${contact.email}\n\nInquiry Type: ${contact.inquiryType}\n\nMessage: ${contact.message}`;
  try {
    await sendEmail(from, process.env.SMTP_USER!, subject, text);
    await autoReplyForContact(contact.email);
  } catch (error) {
    throw new Error("Failed to send contact form", { cause: error });
  }
}

export async function autoReplyForContact(email: string) {
  const from = `"Sortify Team" <${process.env.SMTP_USER}>`;
  const subject = "Thank you for your contact!";
  const text = `
    Hi,
    Thank you for reaching out to Sortify.
    We've received your message and a member of our team will get back to you within 24 hours.
    Sincerely,
    The Sortify Team
  `;
  const html = `
    <p>Hi,</p>
    <p>Thank you for reaching out to <strong>Sortify</strong>.</p>
    <p>We've received your message and a member of our team will get back to you within <strong>24 hours</strong>.</p>
    <br/>
    <p>Sincerely,<br/>
      The Sortify Team<br/>
    </p>
  `;
  try {
    await sendEmail(from, email, subject, text, html);
  } catch (error) {
    throw new Error("Failed to send auto reply for contact", { cause: error });
  }
}
