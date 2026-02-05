import nodemailer from "nodemailer";

export const mailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendContactMail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  await mailer.sendMail({
    from: `"Contact Form" <${process.env.EMAIL_USER}>`,
    to: "abc@gmail.com",
    subject: "New Contact Message",
    text: `
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
    `,
  });
};
