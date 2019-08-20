import React, { Component } from "react";

import EmptyCart from "./EmptyCart";
import { AppContext } from "../../services/AppContext";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import "./Cart.scss";
export default class Cart extends Component {
  render() {
    return (
      <section className="cart">
        <AppContext.Consumer>
          {value => {
            const { cart } = value;
            console.log('cart :',cart);
            if (cart.length > 0) {
              const subtotal = value.getTotal(cart);
              return (
                <React.Fragment>
                  <h1 style={{ textAlign: "center" }}>Sản phẩm đã chọn</h1>
                  <div id="table" className="table-hover">
                    <table>
                      <thead>
                        <tr>
                          <th>Tên</th>
                          <th>Giá</th>
                          <th>Số lượng</th>
                          <th>Tống tiền</th>
                          <th>Bỏ chọn</th>
                        </tr>
                      </thead>
                      <CartList value={cart} />
                    </table>
                  </div>
                  <CartTotals
                    value={value}
                    total={subtotal ? subtotal : 0}
                    history={this.props.history}
                  />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </AppContext.Consumer>
      </section>
    );
  }
}
