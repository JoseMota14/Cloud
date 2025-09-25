import express from "express";
import cors from "cors";
import fileRoutes from "./routes/fileRoutes";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use("/api/files", fileRoutes);

app.get("/test-prisma", async (req, res) => {
  try {
    console.log("Tentando importar PrismaClient...");
    const { PrismaClient } = await import("@prisma/client");

    console.log("Criando instância do Prisma...");
    const prisma = new PrismaClient();

    console.log("Testando conexão...");
    await prisma.$connect();

    console.log("Desconectando...");
    await prisma.$disconnect();

    res.json({ success: true, message: "Prisma is working!" });
  } catch (error) {
    console.error("Erro no teste Prisma:", error);
    res.status(500).json({
      success: false,
      error: error,
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
