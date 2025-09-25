import { Router } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// Criar pasta uploads se não existir
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configuração do multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// 🔹 Upload e guardar no DB
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    console.log("Saving file:", {
      name: req.file.originalname,
      path: req.file.filename,
      size: req.file.size,
      type: req.file.mimetype,
    });

    const file = await prisma.file.create({
      data: {
        name: req.file.originalname,
        path: req.file.filename,
        size: req.file.size,
        type: req.file.mimetype,
      },
    });

    console.log("File saved:", file);

    return res.json(file);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error saving file to database" });
  }
});

// 🔹 Listar ficheiros da DB
router.get("/", async (req, res) => {
  try {
    const files = await prisma.file.findMany({
      orderBy: { createdAt: "desc" },
    });
    console.log(files);
    return res.json(files);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error fetching files" });
  }
});

export default router;
