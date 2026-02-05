import type { Request, Response, NextFunction } from "express";
import type { ContactService } from "../services/contact.service.js";
import { sendResponse } from "../utils/apiResponse.js";

export const createContactController = (contactService: ContactService) => ({
  createContact: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const contact = await contactService.createContact(req.body);
      sendResponse({
        res,
        statusCode: 201,
        message: "Contact created successfully",
        data: contact,
      });
    } catch (error) {
      next(error);
    }
  },
});
