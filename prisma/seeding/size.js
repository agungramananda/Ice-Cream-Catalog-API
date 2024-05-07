const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function addSizes() {
  await prisma.size.createMany({
    data: [{ size: "small" }, { size: "medium" }, { size: "large" }],
    skipDuplicates: true,
  });
}

module.exports = addSizes;
