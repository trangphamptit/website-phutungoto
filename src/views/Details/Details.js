import React, { Component } from "react";
import "./Details.scss";
import Axios from "axios";
import { Form, withFormik } from "formik";
import * as yup from "yup";
import { AppContext } from "../../services/AppContext";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      details: {},
      toppings: []
    };
  }
  async componentDidMount() {
    try {
      const { data } = await Axios.get(
        `https://phutungotoapi.glitch.me/products/${this.state.id}`
      );
      this.setState({ details: data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const {
      _id,
      categoryID,
      brandID,
      name,
      description,
      price,
      image,
      quantity,
      discountAmount
    } = this.state.details;
    const { formatMoney } = this.context;
    if (_id) {
      return (
        <div className="detailpage col-12">
          <div className="row">
            <div className="detail-left col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <h1 className="name">{name}</h1>
              <div className="image">
                <img src={image} alt="" className="image" />
              </div>
              <p className="description">{description}</p>
            </div>

            <div className="detail-right col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <Form className="select" onSubmit={this.props.handleSubmit}>
                <h4>Giá: {formatMoney(price)}</h4>
                <h4>Hãng sản xuất:{brandID.name}</h4>
                <h4>Số lượng</h4>
                <div className="quantity">
                  <input
                    type="number"
                    min="1"
                    max="10"
                    name="quantity"
                    onChange={this.props.handleChange}
                  />
                </div>
                <AppContext.Consumer>
                  {value => (
                    <button
                      type="submit"
                      className="btn btn-danger text-uppercase mb-3 px-5"
                      onClick={() => {
                        let orderDetails = [];

                        let quantity = this.props.values;

                        let productID = this.state.details._id;

                        orderDetails.push({
                          productID,
                          quantity
                        });

                        value.addToCart(orderDetails);
                        localStorage.setItem(
                          "details",
                          JSON.stringify(orderDetails)
                        );
                      }}
                    >
                      add to cart
                    </button>
                  )}
                </AppContext.Consumer>
              </Form>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Không tìm thấy sản phẩm</h1>;
    }
  }
}

const FormikForm = withFormik({
  mapPropsToValues: () => {
    return {
      quantity: 1
    };
  },

  validationSchema: yup.object().shape({
    quantity: yup.number().required()
  }),

  handleSubmit: (values, { props, state }) => {
    props.history.push("/cart");
  }
})(Details);
Details.contextType = AppContext;
export default FormikForm;
