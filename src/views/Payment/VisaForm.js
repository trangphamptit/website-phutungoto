import React, { Component } from "react";
import { Form, ErrorMessage, withFormik } from "formik";
import * as yup from "yup";

class VisaForm extends Component {
  render() {
    return (
      <Form
        className="visaform col-12 col-md-8 col-lg-8 col-sm-12"
        onSubmit={this.props.handleSubmit}
      >
        <h1 className="login-title">CARD INFORMATION </h1>
        <label for="cardnumber">
          <b>card number</b>
        </label>
        <input
          type="number"
          name="cardnumber"
          placeholder="your card number"
          onChange={this.props.handleChange}
        />
        <div className="error">
          <ErrorMessage name="cardnumber" />
        </div>

        <button type="submit" onClick={this.props.handleSubmit}>
          {" "}
          Submit{" "}
        </button>

        <div className="visa-footer">
          <button type="button" className="cancelbtn">
            Cancel
          </button>
        </div>
      </Form>
    );
  }
}

const VisaValidation = yup.object().shape({
  cardnumber: yup.number().required()
});

const FormikForm = withFormik({
  handleSubmit: (values, { props, setSubmitting }) => {
    console.log("Submitted visa:", values.cardnumber);
    props.history.push("/billform");
    // Simulates the delay of a real request
    setTimeout(() => setSubmitting(false), 3 * 1000);
  },
  validationSchema: VisaValidation
})(VisaForm);
export default FormikForm;
