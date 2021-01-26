import React, { useState, useEffect } from "react";
import { getUserById, getId } from "../../../services/auth_service";
import "../../../utils/style.css";
import UserList from "./UserList";
import Pagination from "../../../utils/Pagination";
import { getAllUsers } from "../../../services/auth_service";
import icon from "../../../utils/img/icon.png";

const Profile = () => {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((res) => {
      setUsers(res.data.users);
    });
  }, []);

  useEffect(() => {
    let id = getId();
    getUserById(id).then((res) => {
      setUser(res.data.user);
    });
  }, []);
  console.log(user);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirtstItem = indexOfLastItem - itemsPerPage;
  const currentList = users.slice(indexOfFirtstItem, indexOfLastItem);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <div className="profile">
        <h2>{user.username}'s profile</h2>
        <div>
          <img src={icon} className="image" alt="logo" />
        </div>
        <div>
          <label>
            <b>First Name:</b> {user.name}
          </label>
          <br />
          <label>
            <b>Last Name:</b> {user.surname}
          </label>
          <br />
          <label>
            <b>Email:</b> {user.email}
          </label>
          <br />
        </div>
      </div>
      <div>
        <UserList users={currentList} />
      </div>
      <Pagination
        paginate={paginate}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default Profile;
