import nodemailer from "nodemailer";

export function createTransporter() {
  console.log(
    process.env.SMTP_HOST,
    process.env.SMTP_PORT,
    process.env.SMTP_USER,
    process.env.SMTP_PASSWORD
  );
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465, // true for 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

export async function sendEmail(to: string, subject: string, text: string) {
  const transporter = createTransporter();
  try {
    await transporter.sendMail({
      from: `"Sortify Suggestions" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
    });
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    throw new Error("Failed to send email", { cause: error });
  }
}
