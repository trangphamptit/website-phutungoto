import React, { Component } from "react";
import "./OrdersCustomer.scss";
import { AppContext } from "../../services/AppContext";
import Axios from "axios";
class OrdersCustomer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(async () => {
      let { user } = this.context;

      if (user) {
        await this.context.getOrdersCustomer(user._id);
      } else {
        console.log("err");
      }
    }, 1000);
  }
  render() {
    let { orders, products, user, getOrderStatus, formatMoney } = this.context;
    // console.log("orders", orders);
    // console.log("user", user);

    if (user) {
      return (
        <div className="orders container">
          <div className="card" style={{ marginBottom: "15px" }}>
            <div className="card-header text-capitalize">Lịch sử đặt hàng</div>
            <div className="card-body">
              <div className="table-responsive-sm">
                {orders.map(order => (
                  <React.Fragment>
                    <p style={{ color: "#000" }}>
                      {new Date(order.date).toLocaleString()}
                    </p>
                    <p style={{ color: "#000" }}>
                      {getOrderStatus(order.status)}
                    </p>
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
                        {order.orderDetails.map((orderDetail, index) => {
                          return (
                            <tr key={index}>
                              <td className="center">{index + 1}</td>
                              <td className="left strong">
                                {orderDetail.name}
                              </td>

                              <td className="right">
                                {formatMoney(orderDetail.price)}
                              </td>
                              <td className="center">{orderDetail.quantity}</td>
                              <td className="right">{orderDetail.total}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h2>Bạn cần đăng nhập để xem được các đơn hàng</h2>;
    }
  }
}

OrdersCustomer.contextType = AppContext;
export default OrdersCustomer;
