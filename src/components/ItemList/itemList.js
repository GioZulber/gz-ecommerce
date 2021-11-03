import { useEffect, useState } from "react";
import { Item } from "../Item/item";
// import Products from "../../Products.json";
export const ItemList = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
      });
    // const p = new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(Products);
    //   }, 2000);
    // });
    // p.then((result) => {
    //   console.log(result);
    //   setProducts(result);
    // }).catch((err) => {
    //   console.log("Catch: " + err);
    // });
  }, []);
  return (
    <>
      {products?.map((product) => (
        <Item items={product} key={product.id} />
      ))}
    </>
  );
};
