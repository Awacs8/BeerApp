import React, { useState } from "react";
import "../../utils/check.css";

const Beer = ({ beer, handleClick }) => {
  const [checked, setChecked] = useState(false);
  const [more, setMore] = useState(false);

  const seeMore = () => {
    setMore(!more);
  };

  return (
    <>
      <div className="item">
        <h1 className="h2">{beer.name}</h1>
        <p>
          <b>{beer.tagline}</b>
        </p>
        <p>ABV: {beer.abv}%</p>
        <p>IBU: {beer.ibu}</p>
        <p>
          <b>Food pairing:</b>
          <br />
          {beer.food_pairing[0]}
          <br />
          {beer.food_pairing[1]}
          <br />
          {beer.food_pairing[2]}
        </p>
        <button className="button" onClick={seeMore}>
          ...more
        </button>
        <div style={{ display: more ? "block" : "none" }}>
          <p>
            <b>Description:</b> {beer.description}
          </p>
          <p>
            <b>Ingredients:</b>
          </p>
          <p>Yeast: {beer.ingredients.yeast}</p>
        </div>
        <label className="container">
          Tasted
          <input type="checkbox" onChange={() => setChecked(!checked)} />
          <span className="checkmark"></span>
        </label>
        <div>
          <button className="button" onClick={() => handleClick(beer)}>
            Add to wishlist
          </button>
        </div>
      </div>
    </>
  );
};
export default Beer;
