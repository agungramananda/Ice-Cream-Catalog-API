const iceCreams = require("./data_source/BC");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedIceCream() {
  await prisma.iceCream.createMany({
    data: iceCreams.map((iceCream) => ({
      name: iceCream.name,
      size_type: iceCream.size_type,
      price: iceCream.price,
      description: iceCream.description,
    })),
  });
}

module.exports = seedIceCream;
