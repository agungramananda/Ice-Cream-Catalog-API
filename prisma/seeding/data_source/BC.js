/*
  size id : 
  1 -- small
  2 -- medium
  3 -- large

  type id :
  1--Cone
  2--Cup
  3--Sandwich

  topping id : 
  1 : "Caramel Sauce" 
  2 : "Chocolate Syrup" 
  3 : "Whipped Cream" 
  4 : "Chopped Nuts" 
  5 : "Rainbow Sprinkles" 
  6 : "Chocolate Chips"
  7 : "Crushed Cookies" 
  8 : "Tropical Fruit Slices" 
  9 : "Marshmallows" 

  flavor id : 
  1 -- Vanilla
  2 -- Chocolate
  3 -- Mint
  4 -- Matcha
  5 --Strawberry
  6 -- Blueberry
  7 -- Mango
  8 -- Taro
*/

const iceCreams = [
  {
    name: "Vanilla Cone",
    type: "Cone",
    size: "Small",
    topping: "",
    flavor: ["Vanilla"],
    price: "$3.99",
    description: "Vanilla ice cream in a crispy cone.",
  },
  {
    name: "Chocolate Delight",
    type: "Cup",
    size: "Medium",
    topping: "Chocolate Syrup",
    flavor: ["Chocolate"],
    price: "$4.99",
    description: "Rich chocolate ice cream in a cup with chocolate syrup.",
  },
  {
    name: "Minty Matcha Cone",
    type: "Cone",
    size: "Large",
    topping: "Whipped Cream",
    flavor: ["Mint", "Matcha"],
    price: "$5.49",
    description:
      "Refreshing mint and matcha ice cream in a cone with whipped cream.",
  },
  {
    name: "Strawberry Dream",
    type: "Cup",
    size: "Small",
    topping: "Rainbow Sprinkles",
    flavor: ["Strawberry"],
    price: "$3.99",
    description:
      "Delicious strawberry ice cream in a cup with rainbow sprinkles.",
  },
  {
    name: "Tropical Mango Sandwich",
    type: "Sandwich",
    size: "Medium",
    topping: "",
    flavor: ["Mango"],
    price: "$4.49",
    description: "Tropical mango ice cream in a sandwich.",
  },
  {
    name: "Blueberry Bliss Cone",
    type: "Cone",
    size: "Large",
    topping: "Chopped Nuts",
    flavor: ["Blueberry"],
    price: "$5.49",
    description: "Sweet blueberry ice cream in a cone with chopped nuts.",
  },
  {
    name: "Taro Cupcake",
    type: "Cup",
    size: "Medium",
    topping: "Crushed Cookies",
    flavor: ["Taro"],
    price: "$4.99",
    description: "Unique taro ice cream in a cup with crushed cookies.",
  },
  {
    name: "Double Chocolate Chip Cone",
    type: "Cone",
    size: "Small",
    topping: "Chocolate Chips",
    flavor: ["Chocolate"],
    price: "$4.49",
    description: "Decadent chocolate ice cream in a cone with chocolate chips.",
  },
  {
    name: "Matcha Heaven",
    type: "Cup",
    size: "Large",
    topping: "Marshmallows",
    flavor: ["Matcha"],
    price: "$5.99",
    description: "Creamy matcha ice cream in a cup with marshmallows.",
  },
  {
    name: "Vanilla Strawberry Sandwich",
    type: "Sandwich",
    size: "Medium",
    topping: "",
    flavor: ["Vanilla", "Strawberry"],
    price: "$4.99",
    description: "Classic vanilla and strawberry ice cream in a sandwich.",
  },
  {
    name: "Caramel Nut Cone",
    type: "Cone",
    size: "Medium",
    topping: "Caramel Sauce",
    flavor: ["Vanilla"],
    price: "$4.99",
    description:
      "Vanilla ice cream in a cone with caramel sauce and chopped nuts.",
  },
  {
    name: "Mango Madness Cup",
    type: "Cup",
    size: "Small",
    topping: "Tropical Fruit Slices",
    flavor: ["Mango"],
    price: "$4.49",
    description:
      "Refreshing mango ice cream in a cup with tropical fruit slices.",
  },
  {
    name: "Chocolate Mint Cone",
    type: "Cone",
    size: "Large",
    topping: "Chocolate Syrup",
    flavor: ["Chocolate", "Mint"],
    price: "$5.49",
    description:
      "Cool mint and rich chocolate ice cream in a cone with chocolate syrup.",
  },
  {
    name: "Blueberry Swirl Cup",
    type: "Cup",
    size: "Medium",
    topping: "Whipped Cream",
    flavor: ["Blueberry"],
    price: "$4.99",
    description: "Delicious blueberry ice cream in a cup with whipped cream.",
  },
  {
    name: "Matcha Cookie Sandwich",
    type: "Sandwich",
    size: "Medium",
    topping: "",
    flavor: ["Matcha"],
    price: "$4.49",
    description: "Smooth matcha ice cream in a sandwich.",
  },
  {
    name: "Strawberry Delight Cone",
    type: "Cone",
    size: "Small",
    topping: "Crushed Cookies",
    flavor: ["Strawberry"],
    price: "$4.49",
    description: "Fresh strawberry ice cream in a cone with crushed cookies.",
  },
  {
    name: "Minty Marshmallow Cup",
    type: "Cup",
    size: "Large",
    topping: "Marshmallows",
    flavor: ["Mint"],
    price: "$5.49",
    description: "Cool mint ice cream in a cup with marshmallows.",
  },
  {
    name: "Vanilla Berry Cone",
    type: "Cone",
    size: "Medium",
    topping: "Rainbow Sprinkles",
    flavor: ["Vanilla", "Blueberry"],
    price: "$4.99",
    description:
      "Vanilla and blueberry ice cream in a cone with rainbow sprinkles.",
  },
  {
    name: "Chocolate Mango Sandwich",
    type: "Sandwich",
    size: "Large",
    topping: "",
    flavor: ["Chocolate", "Mango"],
    price: "$5.49",
    description: "Exotic chocolate and mango ice cream in a sandwich.",
  },
  {
    name: "Taro Nut Delight",
    type: "Cup",
    size: "Medium",
    topping: "Chopped Nuts",
    flavor: ["Taro"],
    price: "$4.99",
    description: "Rich taro ice cream in a cup with chopped nuts.",
  },
];

module.exports = iceCreams;
