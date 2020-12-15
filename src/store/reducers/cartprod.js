const cartProdRedux = (state = [], action) => {
  switch (action.type) {
    case "Add":
      var copy = [...state];
      copy.push(action.payload);
      return copy;

    case "Remove":
      return state.filter((pc) => pc.product.id !== action.payload.product.id);
  }
  return state;
};

export default cartProdRedux;
