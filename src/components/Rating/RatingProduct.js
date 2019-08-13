import React, { Component } from "react";
import Rating from "material-ui-rating";
import { AppContext } from "../../services/AppContext";
class RatingProduct extends Component {
  render() {
    const { user } = this.context;
    // console.log("user", user);
    return (
      <Rating
        value={3.5}
        max={5}
        onChange={value => console.log(`Rated with value ${value}`)}
      />
    );
  }
}
RatingProduct.contextType = AppContext;
export default RatingProduct;
