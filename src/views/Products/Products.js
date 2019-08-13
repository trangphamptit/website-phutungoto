import React, { Component } from "react";
import Product from "../../components/Product/Product";
import { AppContext } from "../../services/AppContext";

class Products extends Component {
  componentDidMount() {
    // this.context.getProducts();
    this.context.getBrands();
  }

  render() {
    const { products } = this.context;
    const {brands} = this.context;
    console.log("brands", brands);

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
