import type { SignOptions } from "jsonwebtoken";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

const ACCESS_TOKEN_EXPIRES_IN = config.JWT_EXPIRES_IN as SignOptions["expiresIn"];

export interface JwtPayload {
  id: number;
  role: "USER" | "ADMIN";
}

export const signAccessToken = (payload: JwtPayload) => {
  return jwt.sign(payload, config.JWT_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRES_IN,
  });
};

export const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, config.JWT_SECRET) as JwtPayload;
};
