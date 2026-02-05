import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

const ACCESS_TOKEN_EXPIRES_IN = "15m";

export interface JwtPayload {
  id: number;
  role: "USER" | "ADMIN";
}

export const signAccessToken = (payload: JwtPayload) => {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRES_IN,
  });
};

export const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, env.JWT_SECRET) as JwtPayload;
};
