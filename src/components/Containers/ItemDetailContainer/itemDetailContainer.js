import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../../ItemDetail/itemDetail";
import Products from "../../../Products.json";
import { Loader } from "../../Loader/loader";
export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState([]);
  const getItem = (data) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  useEffect(() => {
    getItem(Products)
      .then((result) =>
        setProduct(result.find((element) => element.id === itemId))
      )
      .catch((err) => console.log("Catch: " + err));
  }, [itemId]);
  console.log(product);

  if (!product) return null;
  return (
    <>
      <div className="container">
        {product.length ? (
          product.map(<ItemDetail key={product.id} item={product} />)
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};
