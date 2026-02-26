import type { Request, Response } from "express";
import type { SignOptions } from "jsonwebtoken";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma.js";
import { config } from "../config/config.js";

const jwtExpiresIn = config.JWT_EXPIRES_IN as SignOptions["expiresIn"];

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { email, password: hashedPassword },
  });

  res.status(201).json({ id: user.id, email: user.email });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user.id }, config.JWT_SECRET, {
    expiresIn: jwtExpiresIn,
  });

  res.json({ token });
};
