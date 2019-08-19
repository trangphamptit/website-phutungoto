import React, { Component } from "react";
import "./ListCategory.scss";
import Category from "./Category";
import { AppContext } from "../../services/AppContext";
class ListCategory extends Component {
  componentDidMount() {
    this.context.getCategories();
  }
  render() {
    const { categories } = this.context;
    return (
      <div className="listcategory row">
        {categories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </div>
    );
  }
}
ListCategory.contextType = AppContext;
export default ListCategory;
