import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { AppContext } from "../../services/AppContext";

class Header extends Component {
  unchecked() {
    let element = document.getElementById("toggler");
    if (element.checked) {
      element.checked = false;
    }
  }
  render() {
    const { user, cart, logout, getLengthCart } = this.context;
    const lengthCart = getLengthCart(cart);
    return (
      <div className="header-container col-12">
        <div className="menu-wrap">
          <input type="checkbox" id="toggler" />
          <div className="hamburger">
            <div />
          </div>
          <div className="menu" onClick={this.unchecked}>
            <div>
              <div>
                <ul>
                  <li className="itemLast">
                    {user && user.name ? (
                      <div className="user">
                        <span className="user-item">Xin chào, {user.name}</span>

                        <div
                          className="user-item logout"
                          onClick={e => {
                            e.preventDefault();
                            logout();
                          }}
                        >
                          / Đăng xuất
                        </div>
                      </div>
                    ) : (
                      <div className="user">
                        <Link to="/login">
                          {" "}
                          <span className="user-item login-header">
                            Đăng nhập{" "}
                          </span>
                        </Link>{" "}
                        /{" "}
                        <Link to="/signup">
                          {" "}
                          <span className="user-item signup-header">
                            Đăng ký{" "}
                          </span>
                        </Link>
                      </div>
                    )}
                  </li>
                  <li>
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li>
                    <Link to="/listcategory">Danh mục sản phẩm</Link>
                  </li>
                  <li>
                    <Link to="/userprofile">Tài khoản của bạn</Link>
                  </li>
                  <li>
                    <Link to="/about">Giới thiệu</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="logo">
          <Link to="/">
            <h1 className="logo-text">T's OTO</h1>
          </Link>
        </div>
        <div className="header-right">
          {user && user.name ? (
            <div className="user">
              <span className="user-item">Xin Chào, {user.name} </span>
              <span>/</span>
              <div
                className="user-item logout"
                onClick={e => {
                  e.preventDefault();
                  logout();
                }}
              >
                logout
              </div>
            </div>
          ) : (
            <div className="user">
              <Link to="/login">
                {" "}
                <span className="user-item login-header">login </span>
              </Link>{" "}
              /{" "}
              <Link to="/signup">
                {" "}
                <span className="user-item signup-header">signup </span>
              </Link>
            </div>
          )}

          <div className="cart">
            <Link to="/cart">
              <i className="fas fa-cart-arrow-down" />

              <span>{lengthCart}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Header.contextType = AppContext;

export default Header;
