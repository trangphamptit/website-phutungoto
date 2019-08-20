import React, { Component } from "react";
import { Form, ErrorMessage, withFormik } from "formik";
import * as yup from "yup";
import "./Delivery.scss";
import payondelivery from "../../image/payondelivery.jpg";
import visacard from "../../image/visacard.png";
import { AppContext } from "../../services/AppContext";
class Delivery extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const { user } = value;
          return (
            <Form
              className="deliveryform col-12 col-md-8 col-lg-8 col-sm-12"
              onSubmit={this.props.handleSubmit}
            >
              <h1 className="delivery-title">Thông tin giao hàng </h1>
              <span>
                <strong>Họ và tên:</strong>
              </span>
              <input type="text" value={user.name} disabled />
              <span>
                <strong>Số điện thoại:</strong>
              </span>
              <input type="text" value={user.phone} disabled />
              <span>
                <strong>Địa chỉ:</strong>
              </span>
              <input type="text" value={user.address} disabled />

              <span>
                <strong>Note:</strong>
              </span>
              <input
                type="text"
                name="guide"
                placeholder=" note"
                onChange={this.props.handleChange}
              />
              <div className="error">
                <ErrorMessage name="guide" />
              </div>

              <span>
                <strong>Phương thức thanh toán:</strong>
              </span>

              <div className="choosepayment">
                <div className="paymenttype col-6">
                  <input
                    type="radio"
                    name="payment"
                    value="delivery"
                    id="delivery"
                    onChange={this.props.handleChange}
                    checked
                  />{" "}
                  <label htmlFor="delivery">
                    <img
                      className=" payment-img"
                      src={payondelivery}
                      alt="payondelivery"
                    />
                  </label>
                </div>

                <div className="paymenttype col-6">
                  <input
                    type="radio"
                    name="payment"
                    value="oncard"
                    id="oncard"
                    onChange={this.props.handleChange}
                  />{" "}
                  <label htmlFor="oncard">
                    <img
                      className="payment-img"
                      src={visacard}
                      alt="visacard"
                    />
                  </label>
                </div>
                <div className="error">
                  <ErrorMessage name="payment" />
                </div>
              </div>

              <button
                className="btn btn-outline-danger  btn-large btn-block text-uppercase mb-15 "
                type="submit"
                onClick={this.props.handleSubmit}
              >
                {" "}
                Xác nhận{" "}
              </button>
              <button
                className="btn mb-15 px-5 "
                type="submit"
                onClick={this.props.history.goBack}
              >
                <i className="fas fa-arrow-left " />
                Trở về
              </button>
              {/* </div> */}
            </Form>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

const DeliveryValidation = yup.object().shape({
  payment: yup.string().required()
});

const FormikForm = withFormik({
  mapPropsToValues: () => {
    return {
      guide: "",
      payment: "delivery"
    };
  },

  handleSubmit: (values, { props, setSubmitting }) => {
    let deliveryinfor = values;
    localStorage.setItem("deliveryinfor", JSON.stringify(deliveryinfor));
    props.history.push("/billform");
    // Simulates the delay of a real request
    setTimeout(() => setSubmitting(false), 3 * 1000);
  },
  validationSchema: DeliveryValidation
})(Delivery);

export default FormikForm;
