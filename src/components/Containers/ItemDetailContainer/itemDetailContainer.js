import { getFirestore } from "../../../firebase";
import { useEffect, useState } from "react";
// import { useParams } from "react-router";
import { ItemDetail } from "../../ItemDetail/itemDetail";
import { Loader } from "../../Loader/loader";
import { getDoc, doc } from "@firebase/firestore";
export const ItemDetailContainer = () => {
  // const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const itemSelect = doc(db, "items", "61zSCld6EXSfjeTQz7lD");
    getDoc(itemSelect).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct(snapshot.data());
      }
    });

    // console.log("error arriba");
  }, []);

  return (
    <>
      <div className="container">
        {product ? <ItemDetail item={product} key={product.id} /> : <Loader />}
      </div>
    </>
  );
};
