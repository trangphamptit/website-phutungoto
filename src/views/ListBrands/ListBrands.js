import React, { Component } from "react";
import "./ListBrands.scss";
import Brand from "./Brand";
import { AppContext } from "../../services/AppContext";
class ListBrands extends Component {
  componentDidMount() {
    this.context.getBrands();
  }

  render() {
    const { brands } = this.context;
    console.log("brands", brands);
    return (
      <div className="listcategory row">
        {brands.map((brand, index) => (
          <Brand key={index} brand={brand} />
        ))}
      </div>
    );
  }
}

ListBrands.contextType = AppContext;
export default ListBrands;
