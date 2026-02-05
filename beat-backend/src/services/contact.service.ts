import { sendContactMail } from "../lib/mail.js";
import { prisma } from "../lib/prisma.js";

interface ContactInput {
  name: string;
  email: string;
  message: string;
}

export interface ContactService {
  createContact(data: ContactInput): Promise<any>;
}

export const createContactService = (): ContactService => ({
  async createContact(data) {
    const contact = await prisma.contact.create({
      data,
    });

    // optional email
    // await sendContactMail(data);

    return contact;
  },
});
