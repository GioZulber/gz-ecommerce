import { ItemCount } from "../ItemCount/itemCount";
import { Card } from "react-bootstrap";
import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { DetailModal } from "../Modals/detailModal";

export const ItemDetail = ({ item }) => {
  const [modal, setModal] = useState(false);

  const onAdd = () => {
    setModal(true);
  };

  const handleClose = () => setModal(false);
  return (
    <div className="containerItem">
      <div>
        <Card.Img className="imgDetail" variant="top" src={item.photo} />
      </div>
      <div className="product">
        <p>{item.brand}</p>
        <h1 className="h1CardDetail">{item.title}</h1>
        <h2>${item.price}</h2>
        <p className="desc">{item.description}</p>
        <div className="divButtonCardDetail">
          {modal && (
            <DetailModal
              centered
              className="modalAddToCart"
              show={modal}
              onHide={handleClose}
              animation={false}
            />
          )}

          <button className="buttonCardDetail add" onClick={onAdd}>
            Add to Cart
          </button>
        </div>
        <ItemCount initial={1} stock={5} />
      </div>
      <div className="slideshow-buttons">
        <div className="oneD"></div>
        <div className="twoD"></div>
        <div className="threeD"></div>
        <div className="fourD"></div>
      </div>
      <p className="pick">Choose size</p>
      <div className="sizes">
        <div className="size">5</div>
        <div className="size">6</div>
        <div className="size">7</div>
        <div className="size">8</div>
        <div className="size">9</div>
        <div className="size">10</div>
        <div className="size">11</div>
        <div className="size">12</div>
      </div>
    </div>
  );
};
