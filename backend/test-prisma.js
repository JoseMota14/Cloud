// Crie este ficheiro: backend/test-prisma.js
require("dotenv").config();

console.log("DATABASE_URL:", process.env.DATABASE_URL);

try {
  console.log("Tentando importar PrismaClient...");
  const { PrismaClient } = require("@prisma/client");

  console.log("PrismaClient importado com sucesso!");

  const prisma = new PrismaClient();
  console.log("PrismaClient instanciado com sucesso!");

  // Teste simples de conexão
  prisma
    .$connect()
    .then(() => {
      console.log("Conexão com DB estabelecida!");
      return prisma.$disconnect();
    })
    .then(() => {
      console.log("Teste completo com sucesso!");
      process.exit(0);
    })
    .catch((error) => {
      console.error("Erro na conexão:", error);
      process.exit(1);
    });
} catch (error) {
  console.error("Erro ao importar ou instanciar Prisma:", error);
  process.exit(1);
}
