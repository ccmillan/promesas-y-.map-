import React, { useEffect, useState } from "react";
import data from "../data/productos.json";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  };

  useEffect(() => {
    pedirProductos().then((res) => {
      setProductos(res);
      console.log(res);
    });
  }, []);

  return <div>{productos.length > 0 && productos[0].last_name}</div>;
};

export default ItemListContainer;
