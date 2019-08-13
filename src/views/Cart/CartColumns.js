import React, { Component } from "react";

class CartColumns extends Component {
  render() {
    return (
      <div className="col-12 text-center ">
        <div className="row">
          <div className="mx-auto col-lg-2 col-xl-2 col-md-2 col-sm-2">
            <p className="text-uppercase">Tên sản phẩm </p>
          </div>

          <div className="mx-auto col-lg-2 col-xl-2 col-md-2 col-sm-2">
            <p className="text-uppercase">Giá</p>
          </div>
          <div className="mx-auto col-lg-2 col-xl-2 col-md-2 col-sm-2">
            <p className="text-uppercase">Só lượng</p>
          </div>
          <div className="mx-auto col-lg-2 col-xl-2 col-md-2 col-sm-2">
            <p className="text-uppercase">Bỏ chọn</p>
          </div>
          <div className="mx-auto col-lg-2 col-xl-2 col-md-2 col-sm-2">
            <p className="text-uppercase">Tổng tiền</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CartColumns;
