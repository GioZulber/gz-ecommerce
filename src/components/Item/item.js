import { Card } from "react-bootstrap";
export const Item = ({ title, description, price, photo }) => {
  return (
    <Card className="cardCounter" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text> {description} </Card.Text>
        <p> ${price}</p>
      </Card.Body>
    </Card>
  );
};
