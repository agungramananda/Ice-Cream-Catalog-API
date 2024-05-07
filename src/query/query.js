const flavorQuery = (requestedFlavor) => {
  return {
    flavors: {
      some: {
        flavor: {
          flavors: requestedFlavor,
        },
      },
    },
  };
};

const typeQuery = (requestedType) => {
  return {
    types: {
      some: {
        type: {
          types: requestedType,
        },
      },
    },
  };
};

const toppingQuery = (requestedTopping) => {
  return {
    toppings: {
      some: {
        topping: {
          toppings: requestedTopping,
        },
      },
    },
  };
};

module.exports = {
  flavorQuery,
  typeQuery,
  toppingQuery,
};
