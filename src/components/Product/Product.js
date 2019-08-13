import React, { Component } from "react";
import "./Product.scss";
import product1 from "../../image/product.png";
import { Link } from "react-router-dom";
// import RatingProduct from "../Rating/RatingProduct";

import { AppContext } from "../../services/AppContext";
class Product extends Component {
  render() {
    const { product } = this.props;
    console.log("product", product);
    const { _id, image, name, price, discountAmount } = product;
    const { addToCart } = this.context;
    return (
      <div className="product col-xl-3 col-lg-3 col-md-3 col-sm-12">
        <div className="card ">
          <div className="img-container">
            <Link to={`/details/${_id}`}>
              <img
                src={image ? image : product1}
                alt="product"
                className="card-img-top"
              />
              {discountAmount > 0 ? (
                <div className="discount">
                  <span> -{discountAmount}vnđ</span>
                </div>
              ) : null}
            </Link>
            <Link to="/cart">
              <button
                className="cart-btn"
                onClick={() => {
                  // console.log(product);

                  addToCart(product);
                }}
              >
                <i className="fas fa-cart-plus" />
              </button>
            </Link>
          </div>
        </div>
        <div className="card-footer ">
          <p className="product-name ">{name}</p>
          <h5 className="product-price ">{price}</h5>
        </div>
        {/* <RatingProduct /> */}
      </div>
    );
  }
}

Product.contextType = AppContext;

export default Product;
