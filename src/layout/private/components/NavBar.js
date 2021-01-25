import React from "react";
import { LogOut } from "./LogOut";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <button className="nav-item">
        <Link to="welcome">Home</Link>
      </button>
      <button className="nav-item">
        <Link to="/wishlist">Wishlist</Link>
      </button>
      <button className="nav-item">
        <Link to="/search">Search</Link>
      </button>
      <button className="nav-item">
        <Link to="/profile">Profile</Link>
      </button>
      <LogOut />
    </div>
  );
};
