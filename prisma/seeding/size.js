const prisma = require("../prismaClient.js");

async function addSizes() {
  await prisma.sizes.createMany({
    data: [{ size: "Small" }, { size: "Medium" }, { size: "Large" }],
    skipDuplicates: true,
  });
}

module.exports = addSizes;
