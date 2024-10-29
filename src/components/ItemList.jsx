import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div>
      <h1>Producto</h1>
      {productos.length > 0 &&
        productos.map((producto) => {
          return (
            <div>
              <Item key={producto.id} producto={producto} />
            </div>
          );
        })}
    </div>
  );
};

export default ItemList;
