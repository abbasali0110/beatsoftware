import { z } from "zod";
export const createItemSchema = z.object({
    pricePerDay: z.number().positive(),
});
