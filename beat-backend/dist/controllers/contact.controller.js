import { sendResponse } from "../utils/apiResponse.js";
export const createContactController = (contactService) => ({
    createContact: async (req, res, next) => {
        try {
            const contact = await contactService.createContact(req.body);
            sendResponse({
                res,
                statusCode: 201,
                message: "Contact created successfully",
                data: contact,
            });
        }
        catch (error) {
            next(error);
        }
    },
});
