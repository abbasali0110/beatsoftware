import { Router } from "express";
import authRoutes from "./auth.routes.js";
import itemRoutes from "./item.routes.js";
import rentalRoutes from "./rental.routes.js";
import contactRoutes from "./contact.routes.js";

const router = Router();

router.get("/health", (_, res) => res.json({ status: "OK" }));

router.use("/auth", authRoutes);
router.use("/items", itemRoutes);
router.use("/rentals", rentalRoutes);
router.use("/contact", contactRoutes);

export default router;
