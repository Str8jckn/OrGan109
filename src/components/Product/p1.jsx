import React, { Component } from "react";
import Quantity from "../Quantity P/Quantity";
import "./p1.css";

class Product extends Component {
  state = {
    quantity: 1,
  };
  render() {
    return (
      <div className="product1">
        <img src={"/images/products/" + this.props.data.image} alt="" />
        <h4>{this.props.data.title}</h4>
        <div>
          <label className="script">Description</label>
          <label className="total">${this.getTotal()}</label>
        </div>
        <label className="price">${this.props.data.price.toFixed(2)}</label>
        <Quantity
          onValueChange={(qnty) => this.handleQuantityChange(qnty)}
        ></Quantity>
        <button className="btn btn-lg btn-primary">Add</button>
      </div>
    );
  }
  getTotal = () => {
    return (this.props.data.price * this.state.quantity).toFixed(2);
  };
  handleQuantityChange = (qnty) => {
    this.setState({ quantity: qnty });
  };
}

/*increase = () => {
  var current = this.state.qnty;
  current += 1;

  this.setState({ qnty: current });
};
decrease = () => {
  var Current = this.state.qnty;
  Current -= 1 && Current > 1;

  this.setState({ qnty: Current });*/
export default Product;
