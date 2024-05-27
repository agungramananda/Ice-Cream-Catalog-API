const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function addSizes() {
  await prisma.sizes.createMany({
    data: [{ size: "Small" }, { size: "Medium" }, { size: "Large" }],
    skipDuplicates: true,
  });
}

module.exports = addSizes;
