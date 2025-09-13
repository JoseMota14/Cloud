import express from "express";
import cors from "cors";
import fileRoutes from "./routes/fileRoutes.js";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/files", fileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
