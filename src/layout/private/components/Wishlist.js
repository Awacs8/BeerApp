import React from "react";
import "../../../utils/style.css";
import Beer2 from "./Beer2";

const Wishlist = ({ wishlist2 }) => {
  let filtered = [...new Set(wishlist2)];

  return (
    <>
      <h1 className="h3">Wishlist</h1>
      <div className="list-item">
        {filtered.map((beer) => (
          <Beer2 beer={beer} key={beer.id} />
        ))}
      </div>
    </>
  );
};

export default Wishlist;
