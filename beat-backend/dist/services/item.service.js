import { prisma } from "../lib/prisma.js";
export const getAllItems = () => {
    return prisma.item.findMany();
};
export const getItemById = (id) => {
    return prisma.item.findUnique({
        where: { id },
    });
};
export const createItem = (data) => {
    return prisma.item.create({
        data: {
            pricePerDay: data.pricePerDay,
            isAvailable: data.isAvailable ?? true,
        },
    });
};
