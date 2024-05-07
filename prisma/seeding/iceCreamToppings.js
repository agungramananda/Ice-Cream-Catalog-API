const iceCreams = require("./data_source/BC");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedIceCreamToppings() {
  const data = await prisma.iceCream.findMany();
  const tempData = iceCreams.map((iceCream) => {
    const match = data.find((ic) => ic.name === iceCream.name);
    if (match) {
      return {
        ice_cream_id: match.id,
        topping_id: iceCream.toppingId,
      };
    } else {
      return null;
    }
  });

  const validData = tempData.filter((data) => data !== null);

  await prisma.iceCreamTopping.createMany({
    data: validData,
  });
}

module.exports = seedIceCreamToppings;
