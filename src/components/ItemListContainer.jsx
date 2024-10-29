import React, { useEffect, useState } from "react";
import pedirProductos from "./pedirProductos";

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
      <h1>Productos</h1>
      {productos.length > 0 &&
        productos.map((producto) => {
          return (
            <div>
              <img src={producto.first_name} alt={producto} />
              <h2>{producto.last_name}</h2>
              <p>{producto.gender}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ItemListContainer;
