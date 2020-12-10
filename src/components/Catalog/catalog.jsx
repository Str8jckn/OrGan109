import React, { Component } from "react";
import Product from "../Product/p1";
import ProductService from "../../services/productservice";
import "./catalog.css";

class Catalog extends Component {
  state = {
    products: [],
    catagories: [],
    selectedCategory: "",
  };
  render() {
    var prodsToDisplay = this.state.products;

    if (this.state.selectedCategory !== "") {
      prodsToDisplay = prodsToDisplay.filter(
        (p) => p.category === this.state.selectedCategory
      );
    }

    return (
      <div className="catalog-page">
        <div className="categories">
          <div className="btncategory" ononClick={() => this.setCategory()}>
            All Products
          </div>
          {this.state.catagories.map((cat) => (
            <div
              key={cat}
              className="btn-category"
              onClick={() => this.setCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </div>
        <div className="products">
          {prodsToDisplay.map((p) => (
            <Product key={p.id} data={p}></Product>
          ))}
        </div>
      </div>
    );
  }

  setCategory = (cat) => {
    this.setState({ selectedCategory: cat });
  };
  componentDidMount() {
    let service = new ProductService();
    const data = service.getProducts();
    let categories = [];

    for (let i = 0; i < data.length; i++) {
      var product = data[i];

      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    }

    this.setState({ products: data, categories: categories });
  }
}

export default Catalog;
