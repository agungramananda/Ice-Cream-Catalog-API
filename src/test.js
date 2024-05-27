const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const iceCreams = require("../prisma/seeding/data_source/BC.js");

const filterByFlavor = async () => {
  try {
    const type = await prisma.iceCream.findMany({
      where: {
        flavor: {
          some: {
            flavor: {
              flavor: "Vanilla",
            },
          },
        },
      },
    });
    console.log(type);
  } catch (e) {
    console.error(e);
  }
};

filterByFlavor()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
