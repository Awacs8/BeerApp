import React from "react";
import "../../../utils/style.css";
import icon from "../../../utils/img/icon.png";

const User = ({ user }) => {
  return (
    <div className="profile">
      <div></div>
      <div>
        <label>
          <b>Username: </b>
          {user.username}
        </label>
        <br />
        <div>
          <img src={icon} className="image" alt="logo" />
        </div>
        <label>
          <b>Name: </b>
          {user.name} {user.surname}
        </label>
        <br />
        <label>
          <b>Email:</b> {user.email}
        </label>
      </div>
    </div>
  );
};

export default User;
