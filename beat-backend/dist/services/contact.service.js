import { prisma } from "../lib/prisma.js";
export const createContactService = () => ({
    async createContact(data) {
        const contact = await prisma.contact.create({
            data,
        });
        // optional email
        // await sendContactMail(data);
        return contact;
    },
});
