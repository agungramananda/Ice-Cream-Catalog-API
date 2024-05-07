const { PrismaClient } = require("@prisma/client");
const addSizes = require("./seeding/size");
const addflavor = require("./seeding/flavor");
const addTopping = require("./seeding/topping");
const addType = require("./seeding/type");
const seedIceCream = require("./seeding/iceCream");
const seedIceCreamFlavor = require("./seeding/iceCreamFlavor");
const seedIceCreamToppings = require("./seeding/iceCreamToppings");
const seedIceCreamType = require("./seeding/iceCreamType");

const prisma = new PrismaClient();

async function main() {
  await addSizes();
  await addflavor();
  await addType();
  await addTopping();
  await seedIceCream();
  await seedIceCreamFlavor();
  await seedIceCreamToppings();
  await seedIceCreamType();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
