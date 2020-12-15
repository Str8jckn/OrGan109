export const increaseCounter = () => {
  return {
    type: "upcartcount",
  };
};

export const addProdToCart = (product) => {
  return {
    type: "Add",
    payload: product,
  };
};

export const removeProdToCart = (product) => {
  return {
    type: "Remove",
    payload: product,
  };
};
