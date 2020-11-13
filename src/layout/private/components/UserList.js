import React from "react";
import User from "./User";

const UserList = ({ users }) => {
  return (
    <div>
      <h2>Other beerlovers:</h2>
      <div className="list-item">
        {users.map((user) => (
          <User key={user.username} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
