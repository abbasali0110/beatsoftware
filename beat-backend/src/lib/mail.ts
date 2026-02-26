import nodemailer from "nodemailer";
import { config } from "../config/config.js";

export const mailer = nodemailer.createTransport({
  host: config.SMTP_HOST,
  port: config.SMTP_PORT,
  secure: config.SMTP_SECURE,
  auth: {
    user: config.EMAIL_USER,
    pass: config.EMAIL_PASS,
  },
});

export const verifyMailConnection = async () => {
  await mailer.verify();
};

export const sendContactMail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  await mailer.sendMail({
    from: `"Contact Form" <${config.SMTP_FROM}>`,
    to: config.CONTACT_RECEIVER,
    subject: "New Contact Message",
    text: `
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
    `,
  });
};
