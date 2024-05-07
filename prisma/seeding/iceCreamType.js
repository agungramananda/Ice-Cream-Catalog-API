const iceCreams = require("./data_source/BC");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedIceCreamType() {
  const data = await prisma.iceCream.findMany();
  const tempData = iceCreams.map((iceCream) => {
    const match = data.find((ic) => ic.name === iceCream.name);
    if (match) {
      return {
        ice_cream_id: match.id,
        type_id: iceCream.typeId,
      };
    } else {
      return null;
    }
  });

  const validData = tempData.filter((data) => data !== null);

  await prisma.iceCreamType.createMany({
    data: validData,
  });
}

module.exports = seedIceCreamType;
