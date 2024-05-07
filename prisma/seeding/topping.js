const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function addTopping() {
  await prisma.topping.createMany({
    data: [
      { toppings: "Caramel Sauce" },
      { toppings: "Chocolate Syrup" },
      { toppings: "Whipped Cream" },
      { toppings: "Chopped Nuts" },
      { toppings: "Rainbow Sprinkles" },
      { toppings: "Chocolate Chips" },
      { toppings: "Crushed Cookies" },
      { toppings: "Tropical Fruit Slices" },
      { toppings: "Marshmallows" },
    ],
  });
}

module.exports = addTopping;
