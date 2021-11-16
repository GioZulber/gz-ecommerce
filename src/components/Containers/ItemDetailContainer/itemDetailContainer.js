import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../../ItemDetail/itemDetail";
import { Loader } from "../../Loader/loader";
import Products from "../../../data/Products.json";
export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();
  const getItem = (data) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  useEffect(() => {
    getItem(Products)
      .then((result) =>
        setProduct(result.find((element) => element.id === itemId))
      )
      .catch((err) => console.log("Catch: " + err));
  }, [itemId]);

  return (
    <>
      <div className="container">
        {product ? <ItemDetail item={product} key={product.id} /> : <Loader />}
      </div>
    </>
  );
};
