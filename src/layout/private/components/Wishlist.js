import React from "react";
import "../../../utils/style.css";
import Beer2 from "./Beer2";
import Carousel from "react-elastic-carousel";

const Wishlist = ({ wishlist2 }) => {
  let filtered = [...new Set(wishlist2)];

  return (
    <div className="wishlist">
      <h1 className="h3">Wishlist</h1>
      <Carousel itemsToShow={2}>
        {filtered.map((beer) => (
          <Beer2 beer={beer} key={beer.id} />
        ))}
      </Carousel>
      {/* <div className="list-item">
        {filtered.map((beer) => (
          <Beer2 beer={beer} key={beer.id} />
        ))}
      </div> */}
    </div>
  );
};

export default Wishlist;
