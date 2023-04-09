import React from "react";

const TShirt = ({ tshirt }) => {
  const { name, picture, gender, index, price, _id } = tshirt;
  return (
    <div>
      <img src={picture} alt="" />
    </div>
  );
};

export default TShirt;
