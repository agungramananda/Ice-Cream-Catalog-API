const { PrismaClient } = require("@prisma/client");
const iceCreams = require("./data_source/BC.js");

const prisma = new PrismaClient();

async function seedIceCreamFlavor() {
  try {
    // Fetch existing ice cream and flavor data from the database
    const [iceCreamData, flavorData] = await Promise.all([
      prisma.iceCream.findMany(),
      prisma.flavors.findMany(),
    ]);

    const tempData = iceCreams.flatMap((iceCream) => {
      const matchIceCream = iceCreamData.find(
        (ic) => ic.name === iceCream.name
      );
      if (matchIceCream) {
        return iceCream.flavor
          .map((flavorName) => {
            const matchFlavor = flavorData.find(
              (fl) => fl.flavor === flavorName
            );
            if (matchFlavor) {
              return {
                ice_cream_id: matchIceCream.id,
                flavor_id: matchFlavor.id,
              };
            } else {
              return null;
            }
          })
          .filter((data) => data !== null);
      } else {
        return [];
      }
    });

    await prisma.iceCreamFlavors.createMany({
      data: tempData,
    });
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = seedIceCreamFlavor;
