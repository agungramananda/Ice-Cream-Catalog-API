const flavorQuery = (requestedFlavor) => {
  return {
    flavor: {
      some: {
        flavor: {
          flavor: requestedFlavor,
        },
      },
    },
  };
};

const typeQuery = (requestedType) => {
  return {
    type: { type: requestedType },
  };
};

const toppingQuery = (requestedTopping) => {
  return {
    topping: { topping: requestedTopping },
  };
};

module.exports = {
  flavorQuery,
  typeQuery,
  toppingQuery,
};
