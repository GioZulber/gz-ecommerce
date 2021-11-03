import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../../ItemDetail/itemDetail";

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    // const getItem = async () => {
    fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.error(err);
      });
    // };
    if (!product) return null;
    // getItem();
  }, [itemId, product]);
  return (
    <>
      <div className="container">
        {product ? <ItemDetail key={product.id} item={product} /> : null}
      </div>
    </>
  );
};
