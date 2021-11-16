import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../context/cartContext";
import styled from "styled-components";
export const ItemCart = ({ id, title, quantity, image, price }) => {
  const { removeItem } = useCartContext();

  return (
    <>
      <Container key={id}>
        <CardCart>
          <CardImg src={image} />
          <CardColumn>
            <Card.Title>{title}</Card.Title>
          </CardColumn>
          <CardDeleteI>
            Cantidad: {quantity}
            <CardPrice>${price * quantity}</CardPrice>
          </CardDeleteI>
          <Buttoncito onClick={() => removeItem(id)}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </Buttoncito>
        </CardCart>
      </Container>
    </>
  );
};

const Buttoncito = styled.button`
  color: #ffffff;
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  background-color: #ff9a01;
  border: 1px solid transparent;
  &:hover {
    background-color: #fab347;
    transition: 1s;
  }
`;

const CardDeleteI = styled.div``;

const CardPrice = styled.p`
  font-weight: bolder;
`;

const CardImg = styled.img`
  width: 15%;
  margin: 0.5rem;
`;
const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardCart = styled.div`
  display: flex;
  width: 45rem;
  justify-content: space-evenly;
  align-items: center;
  margin: 0.2rem;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
