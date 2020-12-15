import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Current</h2>
        <h6>{this.props.count}items</h6>
        <hr></hr>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps, null)(Cart);
