import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#015d87" }}
      >
        <Link className="navbar-brand" href="/#"></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <Link className="btn btn-outline-secondary my-2 my-sm-0" to="/cart">
              <i className="fas fa-shopping-cart">view cart</i>
            </Link>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
