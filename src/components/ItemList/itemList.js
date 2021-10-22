import { useEffect, useState } from "react";
import { Item } from "../Item/item";
import Products from "../../Products.json";
export const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const p = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Products);
      }, 2000);
    });
    p.then((result) => {
      console.log(result);
      setProducts(result);
    }).catch((err) => {
      console.log("Catch: " + err);
    });
  }, []);

  return (
    <>
      {products.length
        ? products.map(({ id, title, description, price, photo }) => (
            <Item
              title={title}
              description={description}
              price={price}
              photo={photo}
              key={id}
            />
          ))
        : "Loading..."}
    </>
  );
};
