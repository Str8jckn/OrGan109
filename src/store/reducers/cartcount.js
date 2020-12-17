const cartCountRedux = (state = 0, action) => {
  if (action.type === "upcartcount") {
    return state + 1;
  }
  return state;
};

export default cartCountRedux;
