import { verifyToken } from "../lib/jwt.js";
export const authMiddleware = (req, res, next) => {
    const token = req.cookies?.access_token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        req.user = verifyToken(token);
        next();
    }
    catch {
        return res.status(401).json({ message: "Invalid token" });
    }
};
