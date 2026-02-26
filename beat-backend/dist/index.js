import { prisma } from "./lib/prisma.js";
import { verifyMailConnection } from "./lib/mail.js";
import { app } from "./app.js";
import { config } from "./config/config.js";
const startServer = async () => {
    try {
        await prisma.$connect();
        console.log("Successfully connected to MySQL via Prisma.");
        await verifyMailConnection();
        console.log("Successfully connected to SMTP server.");
        app.listen(config.PORT, () => {
            console.log(`Rental API is running on http://localhost:${config.PORT}`);
        });
    }
    catch (error) {
        console.error("Failed to start server:", error);
        await prisma.$disconnect();
        process.exit(1);
    }
};
startServer();
