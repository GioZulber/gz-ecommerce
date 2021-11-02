import { useEffect, useState } from "react";
import { Item } from "../Item/item";
// import Products from "../../Products.json";
export const ItemList = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=20", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
        "x-rapidapi-key": "0ad7d9e15dmshc74262e27cf3876p1f7f76jsn1c6f9e7d93b1",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.results);
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
  console.log(products);
  return (
    <>
      {products?.map((product) => (
        <Item items={product} key={product.id} />
      ))}
    </>
  );
};
