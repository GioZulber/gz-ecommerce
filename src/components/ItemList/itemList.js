import { useEffect, useState } from "react";
import { Item } from "../Item/item";
import Products from "../../Products.json";
import { Loader } from "../Loader/loader";
export const ItemList = () => {
  const [products, setProducts] = useState([]);
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
      {products.length ? (
        products?.map((product) => <Item items={product} key={product.id} />)
      ) : (
        <Loader />
      )}
    </>
  );
};
