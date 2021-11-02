import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export const Item = ({ items }) => {
  return (
    <Card className="cardItem" style={{ width: "16rem" }}>
      <Card.Img variant="top" src={items.media.smallImageUrl} />
      <Card.Body>
        <Card.Title>{items.title}</Card.Title>
        <p className="cardPrice"> ${items.retailPrice}</p>
        <NavLink className="default-class" to={`/detail/`}>
          <Button variant="danger" className="buttonItem">
            Ver más
          </Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
};
