import React, { Component } from "react";
import { Form, ErrorMessage, withFormik } from "formik";
import * as yup from "yup";
import "./Signup.scss";
import { apiLinks } from "../../services/APILinks";
import axios from "axios";
class Signup extends Component {
  render() {
    return (
      <Form
        className="signupform col-xl-8 col-md-8 col-lg-8 col-sm-12"
        onSubmit={this.props.handleSubmit}
      >
        <h1 className="signup-title">Đăng ký </h1>
        <input
          type="text"
          name="name"
          placeholder="họ và tên"
          onChange={this.props.handleChange}
        />
        <div className="error">
          <ErrorMessage name="name" />
        </div>
        <input
          type="email"
          name="email"
          placeholder=" email"
          onChange={this.props.handleChange}
        />
        <div className="error">
          <ErrorMessage name="email" />
        </div>

        <input
          type="text"
          name="phone"
          placeholder="số điện thoại(8-10 số)"
          onChange={this.props.handleChange}
        />
        <div className="error">
          <ErrorMessage name="phone" />
        </div>
        <input
          type="text"
          name="address"
          placeholder="điạ chỉ"
          onChange={this.props.handleChange}
        />
        <div className="error">
          <ErrorMessage name="address" />
        </div>
        <input
          type="password"
          name="password"
          placeholder="mật khẩu(6 - 16 ký tự)"
          onChange={this.props.handleChange}
        />
        <div className="error">
          <ErrorMessage name="password" />
        </div>
        <input
          type="password"
          name="passwordconfirm"
          placeholder="nhập lại mật khẩu"
          onChange={this.props.handleChange}
        />
        <div className="error">
          <ErrorMessage name="passwordconfirm" />
        </div>

        <div className="signup-footer">
          <button
            className="btn btn-danger text-uppercase mb-3 px-5 m-auto"
            type="submit"
            onClick={this.props.handleSubmit}
          >
            {" "}
            ĐĂNG KÝ
          </button>
        </div>
      </Form>
    );
  }
}

const SignupValidation = yup.object().shape({
  name: yup.string().required("vui lòng nhập họ và tên"),

  email: yup
    .string()
    .required("vui lòng nhập email")
    .email("email không hợp lệ"),

  phone: yup
    .string()
    .required("Vui lòng nhập số điện thoại")

    .min(8, "số điện thoại ít nhất 8 ký tự")
    .max(10, "số điện thoại không quá 10 ký tự"),
  password: yup
    .string()
    .min(6, "mật khẩu ít nhất 6 ký tự")
    .max(16, "mật khẩu không quá 16 ký tự")
    .required(),

  passwordconfirm: yup.string().oneOf([yup.ref("password"), null]),
  address: yup.string().required("vui lòng nhập địa chỉ")
});

const FormikForm = withFormik({
  mapPropsToValues: () => {
    return {
      name: "",
      email: "",
      phone: "",
      password: "",
      passwordconfirm: "",
      address: ""
    };
  },

  handleSubmit: (values, { props, setSubmitting }) => {
    let signupLink = apiLinks.signup;

    axios
      .post(signupLink, {
        name: values.name,
        email: values.email,
        phone: values.phone,
        password: values.password,
        address: values.address,
        dob: "2019-08-09",
        customerRank: "5d4ba20557790b011963d5f6"
      })
      .then(function(response) {
        console.log(response);
        if (response.data && response.data.email) {
          props.history.goBack();
          alert("Đăng ký thành công");
        } else {
          alert("Đăng ký không thành công");
        }
      })
      .catch(function(error) {
        alert(error);
      });
    // Simulates the delay of a real request
    setTimeout(() => setSubmitting(false), 3 * 1000);
  },
  validationSchema: SignupValidation
})(Signup);
export default FormikForm;
