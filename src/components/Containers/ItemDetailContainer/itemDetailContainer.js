import { getFirestore } from "../../../firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemDetail } from "../../ItemDetail/itemDetail";
import { Loader } from "../../Loader/loader";
import { getDoc, doc } from "@firebase/firestore";
export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const itemSelect = doc(db, "items", itemId);
    getDoc(itemSelect).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct(snapshot.data());
      }
    });
  }, [itemId]);

  return (
    <>
      <div className="container">
        {product ? (
          <ItemDetail item={product} key={product.title} />
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};
