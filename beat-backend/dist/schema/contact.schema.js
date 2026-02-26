import { z } from "zod";
export const contactSchema = z.object({
    name: z.string().min(2, "Name is required").max(100, "Name is too long"),
    email: z.email("Invalid email address"),
    message: z
        .string()
        .min(5, "Message is required")
        .max(1000, "Message is too long"),
});
