import { Card } from "react-bootstrap";
import Products from "../../Products.json";
export const Item = ({ items }) => {
  return (
    <Card className="cardCounter" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Products.map((foto) => foto.photo)} />
      <Card.Body>
        <Card.Title>{items.title}</Card.Title>
        <Card.Text> {items.description} </Card.Text>
        <p> ${items.price}</p>
      </Card.Body>
    </Card>
  );
};
