const iceCreams = [
  {
    name: "Vanilla Cone",
    size_type: "small",
    price: "$3.99",
    description: "Classic vanilla ice cream in a crispy cone.",
    typeId: 1, // Assuming type id is 1 for Cone
    flavorId: 1, // Assuming flavor id is 1 for Classic Vanilla
    toppingId: 1, // Assuming topping id is 1 for Rainbow Sprinkles
  },
  {
    name: "Chocolate Cup",
    size_type: "small",
    price: "$4.49",
    description: "Rich chocolate ice cream in a cup.",
    typeId: 2, // Assuming type id is 2 for Cup
    flavorId: 2, // Assuming flavor id is 2 for Rich Chocolate
    toppingId: 2, // Assuming topping id is 2 for Chocolate Syrup
  },
  {
    name: "Strawberry Delight",
    size_type: "medium",
    price: "$5.99",
    description: "Creamy strawberry ice cream with fresh strawberries.",
    typeId: 2, // Assuming type id is 2 for Cup
    flavorId: 3, // Assuming flavor id is 3 for Strawberry Blast
    toppingId: 3, // Assuming topping id is 3 for Fresh Fruit Slices
  },
  {
    name: "Mint Chocolate Chip Cone",
    size_type: "large",
    price: "$4.29",
    description:
      "Refreshing mint ice cream with chocolate chips in a crispy cone.",
    typeId: 1, // Assuming type id is 1 for Cone
    flavorId: 4, // Assuming flavor id is 4 for Icy Mint
    toppingId: 4, // Assuming topping id is 4 for Chocolate Chips
  },
  {
    name: "Chocolate and Cream Shake",
    size_type: "medium",
    price: "$5.49",
    description:
      "Creamy cookies and cream ice cream blended into a delicious shake.",
    typeId: 3, // Assuming type id is 3 for Shake
    flavorId: 2, // Assuming flavor id is 2 for Rich Chocolate
    toppingId: 5, // Assuming topping id is 5 for Whipped Cream
  },
  {
    name: "Samurai Sundae",
    size_type: "small",
    price: "$6.79",
    description: "Matcha ice cream served with chopped nuts.",
    typeId: 4, // Assuming type id is 4 for Sundae
    flavorId: 5, // Assuming flavor id is 5 for Matcha Samurai
    toppingId: 6, // Assuming topping id is 6 for Chopped Nuts
  },
];

module.exports = iceCreams;
