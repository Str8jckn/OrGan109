import React, { Component } from "react";
import "./qntty.css";

class Quantity extends Component {
  state = {
    qnty: 1,
  };
  render() {
    return (
      <div className="Quantity">
        <h6>{this.state.name}</h6>

        <button className="btn btn-sm btn-secondary" onClick={this.decrease}>
          -
        </button>

        <label>{this.state.qnty}</label>

        <button className="btn btn-sm btn-primary" onClick={this.increase}>
          +
        </button>
      </div>
    );
  }

  increase = () => {
    var current = this.state.qnty;
    current += 1;

    this.setState({ qnty: current });
    this.props.onValueChange();
  };
  decrease = () => {
    var Current = this.state.qnty;
    Current -= 1 && Current > 1;

    this.setState({ qnty: Current });
    this.props.onValueChange();
  };
}

export default Quantity;
