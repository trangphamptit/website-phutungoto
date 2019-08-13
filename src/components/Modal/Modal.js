import React, { Component } from "react";
import "./Modal.scss";
import { AppContext } from "../../services/AppContext";
import { Link } from "react-router-dom";
import success from "../../image/success.png";
class Modal extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const { modalOpen, closeModal } = value;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className=" modalOpen container">
                <div className="row">
                  <div
                    id="modal"
                    className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
                  >
                    <h5>Sản phẩm đã được cho vào giỏ hàng</h5>
                    <img
                      style={{ marginBottom: "15px" }}
                      src={success}
                      className="img-fluid"
                      alt="success"
                    />

                    <Link to="/">
                      <button
                        className="btn btn-danger text-uppercase mb-3"
                        onClick={() => closeModal()}
                      >
                        home
                      </button>
                    </Link>
                    <Link to="/orders">
                      <button
                        className="btn btn-danger text-uppercase mb-3 "
                        onClick={() => closeModal()}
                      >
                        orders history
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </AppContext.Consumer>
    );
  }
}

export default Modal;
