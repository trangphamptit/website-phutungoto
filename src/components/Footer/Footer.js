import React, { Component } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className=" footer-container col-12">
        <div className="footer-left ">
          <label
            className="introduce"
            style={{ textAlign: "center", marginRight: "15px" }}
          >
            <i className="far fa-copyright" />
            <span> T's OTO</span>
          </label>
          <ul className="about-us">
            <Link to="/aboutus">
              <li>Về chúng tôi</li>
            </Link>
            <Link to="/aboutus">
              <li className="last">Chính sách</li>
            </Link>
          </ul>
        </div>

        <ul className="footer-right">
          <li>
            <a href="https://www.pycogroup.com/">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/pycogroup/">
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
          <li className="last">
            <a href="https://www.youtube.com/channel/UC9FpShheczsVJLxjGZeP21g">
              <i className="fab fa-youtube" />
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
