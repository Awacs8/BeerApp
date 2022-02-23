import React from "react";
const More = ({ beer }) => {
  return (
    <>
      <p>
        <b>Description:</b> {beer.description}
      </p>
      <p>
        <b>Ingredients:</b>
      </p>
      <p>Yeast: {beer.ingredients.yeast}</p>
    </>
  );
};
export default More;
