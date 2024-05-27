const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const filterByFlavor = async () => {
  try {
    const flavor = await prisma.iceCream.findMany({
      include: {
        size: true, // Menyertakan informasi ukuran
        types: true, // Menyertakan informasi tipe
        flavors: true, // Menyertakan informasi rasa
        toppings: true, // Menyertakan informasi topping
      },
    });
    flavor.forEach(async (iceCream) => {
      const {
        id,
        name,
        size_type,
        price,
        description,
        images,
        types,
        flavors,
        toppings,
      } = iceCream;
      const typeId = types.map((type) => type.type_id);
      const type = await prisma.type.findUnique({
        where: {
          id: typeId[0],
        },
        select: {
          types: true,
        },
      });
      const flavorId = flavors.map((flavor) => flavor.flavor_id);
      const flavor = await prisma.flavor.findUnique({
        where: {
          id: flavorId[0],
        },
        select: {
          flavors: true,
        },
      });
      const toppingId = toppings.map((topping) => topping.topping_id);
      const topping = await prisma.topping.findUnique({
        where: {
          id: toppingId[0],
        },
        select: {
          toppings: true,
        },
      });

      console.log(`
        ID: ${id}
        Name: ${name}
        Size: ${size_type}
        Type: ${type.types}
        Flavors: ${flavor.flavors}
        Toppings: ${topping.toppings}
        Price: ${price}
        Description: ${description}
        Images: ${images || "No image available"}
      `);
    });
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
