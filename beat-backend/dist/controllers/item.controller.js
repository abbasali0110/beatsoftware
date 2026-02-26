import * as itemService from "../services/item.service.js";
/**
 * GET all items
 */
export const getItems = async (_, res, next) => {
    try {
        const items = await itemService.getAllItems();
        res.json(items);
    }
    catch (error) {
        next(error);
    }
};
/**
 * GET item by ID
 */
export const getItemById = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const item = await itemService.getItemById(id);
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.json(item);
    }
    catch (error) {
        next(error);
    }
};
/**
 * CREATE item
 */
export const createItem = async (req, res, next) => {
    try {
        const item = await itemService.createItem(req.body);
        res.status(201).json(item);
    }
    catch (error) {
        next(error);
    }
};
