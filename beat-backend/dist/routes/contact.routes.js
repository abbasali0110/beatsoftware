import { Router } from "express";
import { createContactController } from "../controllers/contact.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { createContactService } from "../services/contact.service.js";
import { contactSchema } from "../schema/contact.schema.js";
const router = Router();
const contactService = createContactService();
const contactController = createContactController(contactService);
/**
 * POST /api/contact
 */
router.post("/", validate(contactSchema), contactController.createContact);
export default router;
