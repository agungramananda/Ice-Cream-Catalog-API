const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { flavorQuery } = require("./query/query.js");

const filterByFlavor = async (request, h) => {
  try {
    const flavor = await prisma.iceCream.findMany(
      flavorQuery("Classic Vanilla")
    );
    console.log(flavor);
  } catch (error) {
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
