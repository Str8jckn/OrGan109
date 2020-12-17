import React, { Component } from "react";

class ProdsinCart extends Component {
  state = {};
  render() {
    return (
      <div>
        <div style={{ display: "block" }}>
          <img src={"/images/products/" + this.props.data.product.image}></img>
          <h4>
            {(this.props.data.product.price * this.props.data.quantity).toFixed(
              2
            )}
            $
          </h4>
        </div>
      </div>
    );
  }
}

export default ProdsinCart;
