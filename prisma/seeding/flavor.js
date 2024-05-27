const prisma = require("../prismaClient");

async function addflavor() {
  await prisma.flavors.createMany({
    data: [
      { flavor: "Vanilla" },
      { flavor: "Chocolate" },
      { flavor: "Mint" },
      { flavor: "Matcha" },
      { flavor: "Strawberry" },
      { flavor: "Blueberry" },
      { flavor: "Mango" },
      { flavor: "Taro" },
    ],
  });
}

module.exports = addflavor;
