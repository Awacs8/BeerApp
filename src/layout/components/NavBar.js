import React from "react";
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
    </div>
  );
};
