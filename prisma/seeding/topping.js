const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function addTopping() {
  await prisma.toppings.createMany({
    data: [
      { topping: "Caramel Sauce" },
      { topping: "Chocolate Syrup" },
      { topping: "Whipped Cream" },
      { topping: "Chopped Nuts" },
      { topping: "Rainbow Sprinkles" },
      { topping: "Chocolate Chips" },
      { topping: "Crushed Cookies" },
      { topping: "Tropical Fruit Slices" },
      { topping: "Marshmallows" },
    ],
  });
}

module.exports = addTopping;
