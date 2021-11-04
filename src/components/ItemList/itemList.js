import { useEffect, useState } from "react";
import { Item } from "../Item/item";
import Products from "../../Products.json";
export const ItemList = () => {
  const [products, setProducts] = useState(null);
  const getItem = (data) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
        console.log(data);
      }, 2000);
    });
  useEffect(() => {
    getItem(Products)
      .then((result) => setProducts(result))
      .catch((err) => console.log("Catch: " + err));
  }, []);
  return (
    <>
      {products?.map((product) => (
        <Item items={product} key={product.id} />
      ))}
    </>
  );
};
