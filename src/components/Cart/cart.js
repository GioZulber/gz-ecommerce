import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../../context/cartContext";
import { ItemCart } from "../ItemCart/itemCart";

export const Cart = () => {
  const { cart, clearCart, totalPrice } = useCartContext();

  return (
    <>
      <Container>
        {cart.length ? (
          cart.map((i) => (
            <>
              <ItemCart
                key={i.item.id}
                id={i.item.id}
                title={i.item.title}
                image={i.item.photo}
                price={i.item.price}
                quantity={i.quantity}
              />
            </>
          ))
        ) : (
          <>
            <MyContainer>
              <h1>Su carrito esta vacio!</h1>
              <Link to="/">
                <Buttoncito>Ir a Inicio</Buttoncito>
              </Link>
            </MyContainer>
          </>
        )}
        <ButtonsAndTotal>
          <h3 style={{ fontWeight: "bold" }}>Precio Total: ${totalPrice()} </h3>
          <Buttoncito onClick={clearCart}>Vaciar Carrito</Buttoncito>
        </ButtonsAndTotal>
      </Container>
    </>
  );
};

const MyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Buttoncito = styled.button`
  color: #ffffff;
  padding: 0.4rem;
  border-radius: 0.25rem;
  background-color: #b51e1e;
  border: 1px solid transparent;
  margin: 1rem;
  &:hover {
    background-color: #721111;
    transition: 1s;
  }
`;

const ButtonsAndTotal = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
