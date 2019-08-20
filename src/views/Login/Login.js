import React, { Component } from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import "./Login.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiLinks } from "../../services/APILinks";
import { AppContext } from "../../services/AppContext";
const HISTORY_LENGTH_FIRST_HIT = 2;
const LoginValidation = yup.object().shape({
  email: yup.string().required(),
  password: yup
    .string()
    .min(6)
    .max(16)
    .required()
});

const LoginForm = props => {
  return (
    <Form className="loginform col-12 col-md-8 col-lg-8 col-sm-12">
      <h1 className="login-title">ĐĂNG NHẬP </h1>
      <label htmlFor="email">
        <b>Email</b>
      </label>
      <Field type="text" name="email" placeholder="email" component="input" />
      <div className="error">
        <ErrorMessage name="email" />
      </div>
      <label htmlFor="pass">
        <b>Mật khẩu</b>
      </label>
      <Field
        type="password"
        name="password"
        placeholder="password"
        component="input"
      />
      <div className="error">
        <ErrorMessage name="password" />
      </div>

      <button
        className=" btn btn-danger text-uppercase mb-3 px-5"
        type="submit"
      >
        Login
      </button>

      <div className="login-footer">
        <Link to="/">
          <span className="forgot">Quên mật khẩu?</span>
        </Link>
        <Link to="/signup">
          <span className="signup"> Bạn chưa có tài khoản, đăng ký?</span>
        </Link>
      </div>
    </Form>
  );
};

class LoginContainer extends Component {
  initialValues = {
    email: "",
    password: ""
  };

  onSubmit = (values, actions) => {
    const {
      context: { login }
    } = this;
    const { history } = this.props;
    const { login: loginLink } = apiLinks;
    const { email, password } = values;

    axios
      .post(loginLink, { email, password })
      .then(response => {
        const { data } = response;
        if (data && data.email) {
          login(data);
          if (history.length > HISTORY_LENGTH_FIRST_HIT) {
            history.goBack();
          } else {
            history.push("/"); // push to root
          }
        } else {
          alert("email or password is wrong");
        }
      })
      .catch(error => {
        console.log(error);
        alert("Internal server error!");
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  };

  render() {
    return (
      <Formik
        initialValues={this.initialValues}
        onSubmit={this.onSubmit}
        validationSchema={LoginValidation}
        render={props => <LoginForm {...props} />}
      />
    );
  }
}

LoginContainer.contextType = AppContext;

export default LoginContainer;
