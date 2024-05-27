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
];

module.exports = iceCreams;
