import cartCountRedux from "./cartcount";
import { combineReducers } from "redux";
import cartProdRedux from "./cartprod";

//const { combineReducers } = require("redux");//

const rootRedux = combineReducers({
  count: cartCountRedux,
  cart: cartProdRedux,
});

export default rootRedux;
