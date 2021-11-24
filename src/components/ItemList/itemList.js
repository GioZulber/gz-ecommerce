import { useEffect, useState } from "react";
import { Item } from "../Item/item";
import { Loader } from "../Loader/loader";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase";
import { collection, getDocs, query, where } from "@firebase/firestore";
export const ItemList = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const q = categoryId
      ? query(collection(db, "items"), where("categoryId", "==", categoryId))
      : query(collection(db, "items"));
    getDocs(q).then((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => {
          const newDoc = { ...doc.data(), id: doc.id };
          return newDoc;
        })
      );
    });
  }, [categoryId]);
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
