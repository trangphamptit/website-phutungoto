import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CartTotals extends Component {
  checkLogin = () => {
    console.log(this.props.history);
    let user = localStorage.getItem("user");
    if (user) {
      this.props.history.push("/delivery");
    } else {
      this.props.history.push("/login");
    }
  };
  render() {
    const { clearCart } = this.props.value;
    return (
      <React.Fragment>
        <div className="row mt-5 text-capitalize">
          <ul
            className="CartTotals col-10 m-auto "
            style={{
              textAlign: "center"
            }}
          >
            <li>
              <span>Tổng tiền : </span>
              <span> {this.props.total} vnđ </span>
            </li>

            <li>
              <span>Phí giao hàng : </span>
              <span>15.000 vnđ</span>
            </li>

            <li className=" text-capitalize">
              <span>Hóa đơn: </span>
              <span>{this.props.total + 15000} vnđ</span>
            </li>
          </ul>
        </div>
        <div className="row mt-5 text-capitalize d-flex justify-content-center ">
          <Link>
            <button
              className="btn btn-danger text-uppercase mb-3 px-5 "
              type="button"
              onClick={this.checkLogin}
              style={{ marginRight: "20px" }}
            >
              Xác nhận
            </button>
          </Link>
          <Link to="/cart">
            <button
              className="btn btn-danger text-uppercase mb-3 px-2 "
              type="button"
              onClick={() => clearCart()}
            >
              <i class="fas fa-trash-alt" />
            </button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
