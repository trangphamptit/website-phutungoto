import React, { Component } from "react";
import "./BestSellerProduct.scss";
import { Link } from "react-router-dom";
import { AppContext } from "../../services/AppContext";

class Product extends Component {
  render() {
    const { bestseller } = this.props;
    const { addToCart, formatMoney } = this.context;
    const { _id, image, name, price, discountAmount, quantity } = bestseller;
    return (
      <div className="product col-xl-3 col-lg-3 col-md-3 col-sm-12">
        <div className="card ">
          <div className="img-container">
            <Link to={`/details/${_id}`}>
              <img src={image} alt="product" className="card-img-top" />
              {discountAmount > 0 ? (
                <div className="discount">
                  <span> -{formatMoney(discountAmount)}</span>
                </div>
              ) : null}
            </Link>
            <Link to="/cart">
              <button
                className="cart-btn"
                onClick={() => {
                  addToCart(bestseller);
                  // localStorage.setItem(
                  //   "bestseller",
                  //   JSON.stringify(bestseller)
                  // );
                }}
              >
                <i className="fas fa-cart-plus" />
              </button>
            </Link>
          </div>
        </div>
        <div className="card-footer ">
          <p className="product-name ">{name}</p>
          <h5 className="product-price ">{formatMoney(price)}</h5>
        </div>
      </div>
    );
  }
}
Product.contextType = AppContext;
export default Product;
