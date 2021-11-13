import { ItemCount } from "../ItemCount/itemCount";
import { Card } from "react-bootstrap";
import { useCartContext } from "../../context/cartContext";

export const ItemDetail = ({ item }) => {
  const { addItem } = useCartContext();

  const onAdd = (count) => {
    // setCart(count);
    addItem(item, count);
  };
  return (
    <div key={item.id} className="containerItem">
      <div>
        <Card.Img className="imgDetail" variant="top" src={item.photo} />
      </div>
      <div className="product">
        <p>{item.brand}</p>
        <h1 className="h1CardDetail">{item.title}</h1>
        <h2>${item.price}</h2>
        <p className="desc">{item.description}</p>
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
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
