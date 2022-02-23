import React, { useState } from "react";
import "../../utils/check.css";

const Beer2 = ({ beer }) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div
        className="item2"
        style={{
          opacity: visible ? " 0.936" : "0.636",
        }}
      >
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
        <label className="container">
          Tasted
          <input type="checkbox" onChange={() => setVisible(!visible)} />
          <span className="checkmark"></span>
        </label>
      </div>
    </>
  );
};
export default Beer2;
