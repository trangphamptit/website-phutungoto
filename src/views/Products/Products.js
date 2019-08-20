import React, { Component } from "react";
import Product from "../../components/Product/Product";
import { AppContext } from "../../services/AppContext";

class Products extends Component {
  componentDidMount() {
    this.context.getProducts();
  }

  render() {
    const { products } = this.context;
    return (
      <div className="products">
        <h1 className="bestsellerpage my-30 text-center">TẤT CẢ SẢN PHẨM</h1>
        <div className="row">
          {products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

Products.contextType = AppContext;

export default Products;
