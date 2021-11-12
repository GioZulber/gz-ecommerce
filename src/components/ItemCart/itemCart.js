import { Card } from "react-bootstrap";
import { useCartContext } from "../../context/cartContext";

export const ItemCart = ({ id, title, quantity, image, price }) => {
  const { removeItem } = useCartContext();

  //   const handleRemove = () => removeItem(id);
  return (
    <>
      <Card key={id} className="cardItem" style={{ width: "16rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <p className="cardPrice"> ${price}</p>
          <p className="cardPrice"> {quantity}</p>
        </Card.Body>
        <button onClick={() => removeItem(id)}> X </button>
      </Card>
    </>
  );
};
