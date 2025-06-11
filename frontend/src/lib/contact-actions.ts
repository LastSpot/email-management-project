"use server";

import nodemailer from "nodemailer";

export async function sendContactForm(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Name Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New ${data.subject} from ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\nMessage: ${data.message}`,
    });

    await transporter.sendMail({
      from: `"Name Team" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "Thank you for contacting Name",
      text: `Hi,

Thank you for reaching out to Name.

We've received your message and a member of our team will get back to you within 1-2 business days.

In the meantime, feel free to explore our platform or learn more about how Name works at www.findname.com.

Best regards,
The Name Team
${process.env.EMAIL_USER}
`,
      html: `
    <p>Hi,</p>
    <p>Thank you for reaching out to <strong>Name</strong>.</p>
    <p>We've received your message and a member of our team will get back to you within <strong>1-2 business days</strong>.</p>
    <p>In the meantime, feel free to explore our platform or learn more about how Name works at 
       <a href="https://www.findname.com" target="_blank" rel="noopener">www.findname.com</a>.
    </p>
    <br/>
    <p>Best regards,<br/>
       The Name Team<br/>
       <a href="mailto:${process.env.EMAIL_USER}">${process.env.EMAIL_USER}</a>
    </p>
  `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
