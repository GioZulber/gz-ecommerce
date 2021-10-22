import { useEffect, useState } from "react";
import { Item } from "../Item/item";
import Products from "../../Products.json";
export const ItemList = () => {
  const [products, setProducts] = useState([]);

  const getData = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("Esta vacio");
        }
      }, 2000);
    });
  useEffect(() => {
    getData(Products)
      .then((result) => setProducts(result))
      .catch((err) => console.log(err));
  }, []);

  //De esta manera no anduvo

  // useEffect(() => {
  //   const p = new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(Products);
  //     }, 2000);
  //   });
  //   p.then((result) => {
  //     console.log(result);
  //     setProducts(result);
  //   }).catch((err) => {
  //     console.log("Catch: " + err);
  //   });
  // }, []);

  return (
    <>
      {products.map(({ items }) => (
        <Item items={items} key={items.id} />
      ))}
    </>
  );
};
