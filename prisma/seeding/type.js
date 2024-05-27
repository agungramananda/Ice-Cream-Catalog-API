const prisma = require("../prismaClient.js");

async function addType() {
  await prisma.types.createMany({
    data: [{ type: "Cone" }, { type: "Cup" }, { type: "Sandwich" }],
  });
}

module.exports = addType;
