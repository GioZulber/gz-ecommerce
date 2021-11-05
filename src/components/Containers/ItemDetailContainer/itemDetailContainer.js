import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../../ItemDetail/itemDetail";
import Products from "../../../Products.json";
export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const getItem = (data) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 500);
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
        {product ? <ItemDetail key={product.id} item={product} /> : null}
      </div>
    </>
  );
};
