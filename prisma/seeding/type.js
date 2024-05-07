const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function addType() {
  await prisma.type.createMany({
    data: [
      { types: "Cone" },
      { types: "Cup" },
      { types: "Sandwich" },
      { types: "Shake" },
      { types: "Sundae" },
    ],
  });
}

module.exports = addType;
