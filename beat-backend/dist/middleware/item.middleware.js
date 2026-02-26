/**
 * Validate item creation payload
 */
export const validateCreateItem = (req, res, next) => {
    const { pricePerDay } = req.body;
    if (typeof pricePerDay !== "number" || pricePerDay <= 0) {
        return res.status(400).json({
            message: "pricePerDay must be a positive number",
        });
    }
    next();
};
