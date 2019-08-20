import React, { Component } from "react";
import Product from "../../components/Product/Product";
import { AppContext } from "../../services/AppContext";

class Products extends Component {
  componentDidMount() {
    const brandId = this.props.match.params.id;
    this.context.getProductsBrand(brandId);
  }

  render() {
    const { productsbrand } = this.context;
    return (
      <div className="products">
        <div className="row">
          {productsbrand.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

Products.contextType = AppContext;

export default Products;
