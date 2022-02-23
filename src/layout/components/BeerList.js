import React from "react";
import Beer from "./Beer";

const BeerList = ({ beers, handleClick }) => {
  return (
    <div className="main">
      <h1 className="h3">BeerList</h1>
      <div className="list-item">
        {beers.map((beer) => (
          <Beer beer={beer} handleClick={handleClick} key={beer.id} />
        ))}
      </div>
    </div>
  );
};
export default BeerList;
