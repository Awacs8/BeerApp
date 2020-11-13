import React from "react";
import Beer from "./Beer";
import "../../../utils/style.css";

const BeerList = ({ beers, setWishlist }) => {
  return (
    <div>
      <h1 className="h3">BeerList</h1>
      <div className="list-item">
        {beers.map((beer) => (
          <Beer beer={beer} setWishlist={setWishlist} key={beer.id} />
        ))}
      </div>
    </div>
  );
};
export default BeerList;
