import "./BestSeller.scss";
import React, { Component } from "react";
import BestSellerProduct from "./BestSellerProduct";
import { AppContext } from "../../services/AppContext";
class BestSeller extends Component {
  componentDidMount() {
    this.context.getBestsellers();
  }
  render() {
    const { bestsellers } = this.context;
    return (
      <div className="bestseller">
        <h1 className="bestsellerpage my-30 text-center">BEST SELLERS</h1>
        <div className="row">
          {bestsellers.map((bestseller, index) => (
            <BestSellerProduct key={index} bestseller={bestseller} />
          ))}
        </div>
      </div>
    );
  }
}
BestSeller.contextType = AppContext;
export default BestSeller;
