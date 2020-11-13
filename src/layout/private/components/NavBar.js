import React from "react";
import { LogOut } from "./LogOut";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <ul className="nav-bar">
        <li>
          <LogOut />
        </li>
        <li className="nav-item">
          <Link to="welcome">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/wishlist">Wishlist</Link>
        </li>
        <li className="nav-item">
          <Link to="/search">Search</Link>
        </li>
        <li className="nav-item">
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};
