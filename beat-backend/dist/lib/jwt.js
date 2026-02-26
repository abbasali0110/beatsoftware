import jwt from "jsonwebtoken";
import { config } from "../config/config.js";
const ACCESS_TOKEN_EXPIRES_IN = config.JWT_EXPIRES_IN;
export const signAccessToken = (payload) => {
    return jwt.sign(payload, config.JWT_SECRET, {
        expiresIn: ACCESS_TOKEN_EXPIRES_IN,
    });
};
export const verifyToken = (token) => {
    return jwt.verify(token, config.JWT_SECRET);
};
