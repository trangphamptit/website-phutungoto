import React, { Component } from "react";
import Product from "../../components/Product/Product";
import { AppContext } from "../../services/AppContext";

class Products extends Component {
  componentDidMount() {
    const categoryId = this.props.match.params.id;
    this.context.getProductscategory(categoryId);
  }
  render() {
    const { productscategory } = this.context;
    return (
      <div className="products">
        <div className="row">
          {productscategory.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

Products.contextType = AppContext;

export default Products;
