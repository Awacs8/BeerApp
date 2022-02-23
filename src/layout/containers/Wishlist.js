import React from "react";
import Beer2 from "../components/Beer2";
import Carousel from "react-elastic-carousel";

const Wishlist = ({ wishlist }) => {
  let tmp = [...new Set(wishlist)];
  return (
    <div className="wishlist">
      <h1 className="h3">Wishlist</h1>
      <Carousel itemsToShow={2}>
        {tmp.map((beer) => (
          <Beer2 beer={beer} key={beer.id} />
        ))}
      </Carousel>
    </div>
  );
};

export default Wishlist;
