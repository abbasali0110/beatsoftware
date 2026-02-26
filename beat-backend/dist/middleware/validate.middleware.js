import { AppError } from "../errors/app.error.js";
export const validate = (schema) => (req, _res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
        return next(new AppError("Validation failed", 400, result.error.issues));
    }
    req.body = result.data;
    next();
};
