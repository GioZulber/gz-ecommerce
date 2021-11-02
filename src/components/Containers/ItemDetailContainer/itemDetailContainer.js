import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemDetail } from "../../ItemDetail/itemDetail";

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const getItem = async () => {
      fetch(
        `https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=20/:${itemId}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
            "x-rapidapi-key":
              "0ad7d9e15dmshc74262e27cf3876p1f7f76jsn1c6f9e7d93b1",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setProduct(data.results);
          console.log(data.results);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    if (!product) return null;
    getItem();
  }, [itemId, product]);
  return (
    <>
      <div className="container">
        <ItemDetail key={product.id} item={product} />
      </div>
    </>
  );
};
