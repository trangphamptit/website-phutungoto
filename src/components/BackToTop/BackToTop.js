import React, { Component } from "react";
class BackToTop extends Component {
  scrollUp = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 0) {
      window.scrollTo(0, top - 15);
      setTimeout(this.scrollUp, 10);
    }
  };
  render() {
    return (
      <div>
        <button
          className="btn btn-danger move-top"
          onClick={this.scrollUp}
          style={{ right: "15px", bottom: "30px", position: "fixed" }}
        >
          <i className="fas fa-arrow-up" />
        </button>
      </div>
    );
  }
}

export default BackToTop;
