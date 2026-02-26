import { Router } from "express";
import * as itemController from "../controllers/item.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { validateCreateItem } from "../middleware/item.middleware.js";
const router = Router();
/**
 * GET /api/items
 */
router.get("/", itemController.getItems);
/**
 * GET /api/items/:id
 */
router.get("/:id", itemController.getItemById);
/**
 * POST /api/items
 */
router.post("/", authMiddleware, validateCreateItem, itemController.createItem);
export default router;
