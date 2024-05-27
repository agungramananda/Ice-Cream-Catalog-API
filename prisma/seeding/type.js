const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function addType() {
  await prisma.types.createMany({
    data: [{ type: "Cone" }, { type: "Cup" }, { type: "Sandwich" }],
  });
}

module.exports = addType;
