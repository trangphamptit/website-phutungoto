import React, { Component } from "react";

// import Slider from "../../components/Slider/Slider";

import { Link } from "react-router-dom";
import ListCategory from "../ListCategory/ListCategory";
import BestSellerProduct from "../BestSeller/BestSellerProduct";
import Product from "../../components/Product/Product";

import { AppContext } from "../../services/AppContext";
import Category from "../ListCategory/Category";
import Brand from "../ListBrands/Brand";
class Home extends Component {
  componentDidMount() {
    this.context.getProducts();
    this.context.getCategories();
    this.context.getBestsellers();
    this.context.getBrands();
  }

  render() {
    const { bestsellers, products, categories, brands } = this.context;
    console.log('categories :', categories);
    return (
      <div className="home col-12">
        {/* <Slider /> */}
        <div className="title-nav">
          <h1>Sản phẩm bán chạy</h1>
          <Link to="/bestseller">
            {" "}
            <button className="btn btn-danger px-2">xem thêm</button>
          </Link>
        </div>
        <div className="bestseller row">
          {bestsellers
            ? bestsellers
                .slice(0, 4)
                .map(bestseller => (
                  <BestSellerProduct
                    key={bestseller._id}
                    bestseller={bestseller}
                  />
                ))
            : null}
          {/* <BestSeller /> */}
        </div>

        <div className="title-nav">
          <h1>Danh mục sản phẩm</h1>
          <Link to="/listcategory">
            {" "}
            <button className="btn btn-danger px-2 ">xem thêm</button>
          </Link>
        </div>
        <div className="row">
          {categories ? categories.slice(0, 4).map(category => (
              <Category key={category._id} category={category} />
            )) 
            : null}
        </div>

        <div className="title-nav">
          <h1>Các hãng sản xuất</h1>
          <Link to="/brands">
            {" "}
            <button className="btn btn-danger px-2 ">xem thêm</button>
          </Link>
        </div>
        <div className="row">
        {brands ? brands.slice(0, 4).map(brand => (
              <Brand key={brand._id} brand={brand} />
            )) 
            : null}
        </div>

        <div className="title-nav ">
          <h1>Tất cả sản phẩm</h1>

          <Link to="/products">
            {" "}
            <button className="btn btn-danger px-2">xem thêm</button>
          </Link>
        </div>

        <div className="row">
            {products ? products.slice(0, 4).map(product => (
                <Product key={product._id} product={product} />
              )) : null}
        </div>
      </div>
    );
  }
}
Home.contextType = AppContext;
export default Home;
