import { prisma } from "../lib/prisma.js";
export const createRental = async (req, res) => {
    const { itemId, days } = req.body;
    const userId = req.user.id;
    const item = await prisma.item.findUnique({ where: { id: itemId } });
    if (!item || !item.isAvailable)
        return res.status(400).json({ message: "Item unavailable" });
    const rental = await prisma.rental.create({
        data: {
            userId,
            itemId,
            endDate: new Date(Date.now() + days * 86400000),
            totalPrice: item.pricePerDay * days,
        },
    });
    await prisma.item.update({
        where: { id: itemId },
        data: { isAvailable: false },
    });
    res.status(201).json(rental);
};
export const myRentals = async (req, res) => {
    const rentals = await prisma.rental.findMany({
        where: { userId: req.user.id },
        include: { item: true },
    });
    res.json(rentals);
};
