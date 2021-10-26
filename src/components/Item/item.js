import { Card } from "react-bootstrap";
export const Item = ({ items }) => {
  return (
    <Card className="cardItem" style={{ width: "16rem" }}>
      <Card.Img variant="top" src={items.photo} />
      <Card.Body>
        <Card.Title>{items.title}</Card.Title>
        <Card.Text> {items.description} </Card.Text>
        <p className="cardPrice"> ${items.price}</p>
      </Card.Body>
    </Card>
  );
};
