import cartCountRedux from "./cartcount";
import cartProdRedux from "./cartprod";

const { combineReducers } = require("redux");

const { default: cart } = require("../../components/cart/cart");

const rootRedux = combineReducers({
  count: cartCountRedux,
  cart: cartProdRedux,
});

export default rootRedux;
