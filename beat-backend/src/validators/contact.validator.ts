import { z } from "zod";

export const createContactSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  message: z.string().min(10),
});
