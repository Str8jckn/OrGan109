import React, { Component } from "react";

class About extends Component {
  state = {
    isEmailVis: false,
  };
  render() {
    return (
      <div>
        {this.getEmailText()}
        <button
          onClick={this.handleBtnClick}
          className="btn btn-lg btn-primary"
        >
          E Male
        </button>
      </div>
    );
  }

  handleBtnClick = () => {
    this.setState({ isEmailVis: true });

    setTimeout(() => {
      this.setState({ isEmailVis: false });
    }, 12000);
  };
  getEmailText = () => {
    if (this.state.isEmailVis) {
      return <a href="mailto:jaebrownjr@gmail.com">Me mail</a>;
    }
    return <h6>Click on Button</h6>;
  };
}

export default About;
