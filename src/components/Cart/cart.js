import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../../context/cartContext";
import { FormCart } from "../Forms/formCart";
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
                image={i.item.image}
                price={i.item.price}
                quantity={i.quantity}
              />
            </>
          ))
        ) : (
          <>
            <MyContainer>
              <h1>Su carrito esta vacio!</h1>
            </MyContainer>
          </>
        )}
        {cart.length ? (
          <>
            <ButtonsAndTotal>
              <Buttoncito onClick={clearCart}>Vaciar Carrito</Buttoncito>
              <h3 style={{ fontWeight: "bold" }}>Total: ${totalPrice()} </h3>
            </ButtonsAndTotal>
            <FormCart />
          </>
        ) : (
          <>
            <MyContainer>
              <Link to="/">
                <Buttoncito>
                  {" "}
                  Ir a Inicio <FontAwesomeIcon icon={faHome} />
                </Buttoncito>
              </Link>
            </MyContainer>
          </>
        )}
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
