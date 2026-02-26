import { Router } from "express";
import { createRental, myRentals } from "../controllers/rental.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const router = Router();
router.post("/", authMiddleware, createRental);
router.get("/my", authMiddleware, myRentals);
export default router;
