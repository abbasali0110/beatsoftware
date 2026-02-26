import express from "express";
import fs from "node:fs";
import path from "node:path";
import routes from "./routes/index.js";
import { errorHandler } from "./middleware/error.middleware.js";

export const app = express();
const frontendDir = path.resolve(process.cwd(), "dist", "public");
const frontendIndex = path.resolve(frontendDir, "index.html");

app.use(express.json());
app.use("/api", routes);
app.use(express.static(frontendDir));

app.get(/^\/(?!api).*/, (_req, res, next) => {
  if (!fs.existsSync(frontendIndex)) {
    return next();
  }

  return res.sendFile(frontendIndex);
});

app.use(errorHandler);
