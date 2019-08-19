import React, { Component } from "react";
import "./Brand.scss";

import { Link } from "react-router-dom";
class Brand extends Component {
  render() {
    const { brand } = this.props;
    const { _id, name } = brand;
    return (
      <div className="category col-xl-6 col-lg-6 col-md-6 col-sm-6">
        <div className="categoryitem">
          <Link to={`/productsbrand/${_id}`}>
            <label className="category-title">{name}</label>
          </Link>
        </div>
      </div>
    );
  }
}

export default Brand;
