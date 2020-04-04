import React from "react";
import '../../../utils/style.css';


const User = ({ user }) => {
  return (
    <div className="profile">
      <div></div>
      <div>
        <label><b>Username: </b>{user.username}</label><br/>
        <div>
          <img src="icon.png" className="image" alt="logo"/>
        </div>
        <label><b>Name: </b>{user.name} {user.surname}</label><br/>
        <label><b>Email:</b> {user.email}</label>
      </div>
    </div>
  );
};

export default User;