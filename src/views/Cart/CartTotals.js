import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../services/AppContext";

export default class CartTotals extends Component {
  checkLogin = () => {
    // console.log(this.props.history);
    let user = localStorage.getItem("user");
    if (user) {
      this.props.history.push("/delivery");
    } else {
      this.props.history.push("/login");
    }
  };
  render() {
    const { clearCart } = this.props.value;
    const { formatMoney } = this.context;
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
              <span> {formatMoney(this.props.total)} </span>
            </li>

            <li>
              <span>Phí giao hàng : </span>
              <span>{formatMoney(15000)}</span>
            </li>

            <li className=" text-capitalize">
              <span>Hóa đơn: </span>
              <span>{formatMoney(this.props.total + 15000)}</span>
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

CartTotals.contextType = AppContext;
