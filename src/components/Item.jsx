import React from "react";

const Item = ({ producto }) => {
  return (
    <div>
      <img src={producto.first_name} alt={producto} />
      <h2>{producto.last_name}</h2>
      <p>{producto.gender}</p>
    </div>
  );
};

export default Item;
