import React, { Component } from "react";
import { connect } from "react-redux";
import ProdsinCart from "../Product/prodsincart";
class Cart extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Current</h2>
        <h6>{this.props.count}items</h6>
        <div className="cart-prods">
          {this.props.cart.map((p) => (
            <ProdsinCart data={p}></ProdsinCart>
          ))}
        </div>

        <hr></hr>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Cart);
