import dotenv from "dotenv";
import { prisma } from "./lib/prisma.js";
import { app } from "./app.js";

// Initialize environment variables
dotenv.config();

const PORT = process.env.PORT || 8080;

// Start Server
const startServer = async () => {
  try {
    await prisma.$connect();
    console.log("Successfully connected to MySQL via Prisma.");

    app.listen(PORT, () => {
      console.log(`🚀 Rental API is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

startServer();
