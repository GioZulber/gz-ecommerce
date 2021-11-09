import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../../Item/item";
import { Loader } from "../../Loader/loader";
import Products from "../../../data/Products.json";

export const ItemCategoryContainer = () => {
  const { categoryId } = useParams();
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
        setProduct(result.filter((element) => element.category === categoryId))
      )
      .catch((err) => console.log("Catch: " + err));
  }, [categoryId]);
  console.log(product);

  return (
    <>
      <h1 className="titelCategory">Esta en la categoria de: {categoryId}</h1>
      <div className="itemListContainer container">
        {product.length ? (
          product?.map((product) => <Item items={product} key={product.id} />)
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};
