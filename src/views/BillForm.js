import React, { Component } from "react";
import { AppContext } from "../services/AppContext";
import { apiLinks } from "../services/APILinks";
import axios from "axios";
import Modal from "../components/Modal/Modal";
import "./BillForm.scss";
class BillForm extends Component {
  constructor(props) {
    super(props);
  }

  createOrder = () => {
    // console.log("user", this.context.user);
    // console.log("status", this.context.status);
    const { clearCart, openModal } = this.context;
    let orders = this.context.cart.map(item => {
      let orderDetail = {
        productID: item._id,
        quantity: item.cartquantity
      };
      return orderDetail;
    });
    // console.log(this.context.user._id);
    // console.log(orders);
    let ordersLink = apiLinks.orders;
    axios
      .post(ordersLink, {
        customerID: this.context.user._id,
        status: "5d50e0a270e4970501ff2b6a",
        orderDetails: orders
      })
      .then(function(response) {
        console.log(response.data.message);
        if (response.data.message) {
          clearCart();
          openModal();
        } else {
          alert("Can't create order. Please try again");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    const {
      cart,

      user,

      getTotal
    } = this.context;

    const total = getTotal(cart);
    return (
      <React.Fragment>
        <Modal />
        <div className="bill container">
          <div className="card" style={{ marginBottom: "15px" }}>
            <div className="card-header text-capitalize">
              Bill
              <span className="float-right">
                {" "}
                <strong>Trạng thái:</strong>Shipping
              </span>
            </div>
            <div className="card-body">
              <div className="row mb-4">
                <div className="col-sm-6">
                  <h6 className="mb-3">Từ:</h6>
                  <div>
                    <strong>T's OTO</strong>
                  </div>
                  <div>Địa chỉ: </div>
                  <div>97 Man Thiện, phường Hiệp Phú, quận 9</div>
                  <div>Email: info@webz.com.pl</div>
                  <div>Số điện thoại: +48 444 666 3333</div>
                </div>
                <div className="col-sm-6">
                  <h6 className="mb-3">Đến:</h6>

                  <div>
                    <strong>{user.name}</strong>
                  </div>
                  <div>Địa chỉ: </div>
                  <div>{user.address}</div>
                  <div>Email: {user.email}</div>
                  <div>Số điện thoại:{user.phone}</div>
                </div>
              </div>
              <div className="table-responsive-sm">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th className="center">STT</th>
                      <th>Tên sản phẩm</th>
                      <th className="right">Giá</th>
                      <th className="center">Số lượng</th>
                      <th className="right">Tổng tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => (
                      <tr key={index}>
                        <td className="center">{index}</td>
                        <td className="left strong">{item.name}</td>
                        <td className="right">{item.price}</td>
                        <td className="right">{item.cartquantity}</td>
                        <th className="right">
                          {(item.price - item.discountAmount) *
                            item.cartquantity}
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-lg-4 col-sm-5" />
                <div className="col-lg-4 col-sm-5 ml-auto">
                  <table className="table table-clear">
                    <tbody>
                      <tr>
                        <td className="left">
                          <strong>Tổng tiền:</strong>
                        </td>
                        <td className="right">{total}vnđ </td>
                      </tr>

                      <tr>
                        <td className="left">
                          <strong>Phí ship</strong>
                        </td>
                        <td className="right">15.000 vnđ </td>
                      </tr>
                      <tr>
                        <td className="left">
                          <strong>Trạng thái</strong>
                        </td>
                        <td className="right">
                          <strong>{total + 15000} vnđ</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              className="btn btn-danger text-uppercase mb-3 px-5"
              type="submit"
              onClick={this.createOrder}
            >
              Xác nhận
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

BillForm.contextType = AppContext;
export default BillForm;
