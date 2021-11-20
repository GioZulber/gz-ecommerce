import { ItemCount } from "../ItemCount/itemCount";
import { Card } from "react-bootstrap";
import { useCartContext } from "../../context/cartContext";

export const ItemDetail = ({ item }) => {
  const { addItem, setCart } = useCartContext();

  const onAdd = (count) => {
    setCart(count);
    addItem(item, count);
  };
  return (
    <div key={item.id} className="containerItem">
      <div className="divCardImg">
        <Card.Img className="imgDetail" variant="top" src={item.image} />
      </div>
      <div className="product">
        <h1 className="h1CardDetail">{item.title}</h1>
        <h2>${item.price}</h2>
        <p className="desc">{item.description}</p>
        <div className="counterDetail">
          <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};
