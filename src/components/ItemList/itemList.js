import { useEffect, useState } from "react";
import { Item } from "../Item/item";
// import Products from "../../data/Products.json";
import { Loader } from "../Loader/loader";
// import { useParams } from "react-router";
import { getFirestore } from "../../firebase";
import { collection, getDocs, query } from "@firebase/firestore";
export const ItemList = () => {
  const [products, setProducts] = useState([]);
  // const { categoryId } = useParams();
  // const getItem = (data) =>
  //   new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(data);
  //       console.log(data);
  //     }, 2000);
  //   });
  // useEffect(() => {
  //   getItem(Products)
  //     .then((result) =>
  //       categoryId
  //         ? setProducts(
  //             result.filter((element) => element.category === categoryId)
  //           )
  //         : setProducts(Products)
  //     )
  //     .catch((err) => console.log("Catch: " + err));
  // }, [categoryId]);
  useEffect(() => {
    const db = getFirestore();

    const q = query(collection(db, "items"));
    getDocs(q).then((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => {
          const newDoc = { ...doc.data() };
          return newDoc;
        })
      );
    });
    // getDocs(collection(db, "items")).then((snapshot) => {
    //   setProducts(snapshot.docs.map((doc) => doc.data()));
    // });
  }, []);
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
