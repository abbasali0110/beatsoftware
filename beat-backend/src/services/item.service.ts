import { prisma } from "../lib/prisma.js";

interface CreateItemInput {
  pricePerDay: number;
  isAvailable?: boolean;
}

export const getAllItems = () => {
  return prisma.item.findMany();
};

export const getItemById = (id: number) => {
  return prisma.item.findUnique({
    where: { id },
  });
};

export const createItem = (data: CreateItemInput) => {
  return prisma.item.create({
    data: {
      pricePerDay: data.pricePerDay,
      isAvailable: data.isAvailable ?? true,
    },
  });
};
