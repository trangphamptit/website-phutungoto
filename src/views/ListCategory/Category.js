import React, { Component } from "react";
import "./Category.scss";

import { Link } from "react-router-dom";
class Category extends Component {
  render() {
    const { category } = this.props;
    const { _id, name } = category;
    return (
      <div className="category col-xl-6 col-lg-6 col-md-6 col-sm-6">
        <div className="categoryitem">
          <Link to={`/productscategory/${_id}`}>
            <label className="category-title">{name}</label>
          </Link>
        </div>
      </div>
    );
  }
}

export default Category;
