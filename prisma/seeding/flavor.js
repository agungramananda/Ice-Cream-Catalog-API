const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function addflavor() {
  await prisma.flavor.createMany({
    data: [
      { flavors: "Classic Vanilla" },
      { flavors: "Rich Chocolate" },
      { flavors: "Strawberry Blast" },
      { flavors: "Icy Mint" },
      { flavors: "Matcha Samurai" },
    ],
  });
}

module.exports = addflavor;
