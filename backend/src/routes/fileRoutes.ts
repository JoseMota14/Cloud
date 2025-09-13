import { Router } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const router = Router();

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

// 🔹 Upload
router.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  res.json({
    id: Date.now().toString(),
    name: req.file.originalname,
    path: req.file.filename,
    size: req.file.size,
    type: req.file.mimetype,
    date: new Date().toISOString(),
  });
});

// 🔹 Listagem mock (depois vem da DB)
router.get("/", (req, res) => {
  res.json([
    { id: "1", name: "mock-foto.jpg", date: "2025-08-28", type: "image" },
  ]);
});

export default router;
