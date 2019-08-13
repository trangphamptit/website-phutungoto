import React, { Component } from "react";
import "./UserProfile.scss";

import useraccount from "../../image/useraccount.jpg";
import { AppContext } from "../../services/AppContext";
class UserProfile extends Component {
  render() {
    const { user } = this.context;
    if (user) {
      console.log("user", user);
    } else {
      console.log("err");
    }

    if (user) {
      return (
        <div className="profile col-8">
          <div label="your profile">
            <img className="user-img" src={useraccount} alt="user" />
            <h4>Họ và tên</h4>
            <label className="name">{user.name}</label>
            <h4>email</h4>
            <label className="email">{user.email}</label>
            <h4>Số điện thoại</h4>
            <label className="phone">{user.phone}</label>
          </div>
        </div>
      );
    } else {
      return (
        <div className="profile col-10">
          <h1>Bạn chưa có tài khoản, vui lòng đăng ký</h1>
        </div>
      );
    }
  }
}
UserProfile.contextType = AppContext;
export default UserProfile;
