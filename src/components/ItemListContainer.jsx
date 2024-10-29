import React, { useEffect, useState } from "react";
import pedirProductos from "./pedirProductos";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  // const pedirProductos = () => {
  //   return new Promise((resolve, reject) => {
  //     resolve(data);
  //   });
  // };

  useEffect(() => {
    pedirProductos().then((res) => {
      setProductos(res);
      console.log(res);
    });
  }, []);

  // const nombres = ["Carla", "Nory", "Laura"];
  // const nombres2 = nombres.map((nombre) => nombre + "1");
  // console.log(nombres2);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
