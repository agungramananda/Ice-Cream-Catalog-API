const prisma = require("../prismaClient.js");
const iceCreams = require("./data_source/BC.js");

async function seedIceCream() {
  try {
    const ic = await Promise.all(
      iceCreams.map(async (ic) => {
        return {
          name: ic.name,
          type: await prisma.types.findFirst({ where: { type: ic.type } }),
          size: await prisma.sizes.findFirst({ where: { size: ic.size } }),
          topping:
            ic.topping !== ""
              ? await prisma.toppings.findFirst({
                  where: { topping: ic.topping },
                })
              : null,
          price: ic.price,
          description: ic.description,
        };
      })
    );
    await prisma.iceCream.createMany({
      data: ic.map((i) => {
        return {
          name: i.name,
          type_id: i.type.id,
          size_id: i.size.id,
          topping_id: i.topping ? i.topping.id : null,
          price: i.price,
          description: i.description,
        };
      }),
    });
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = seedIceCream;
