import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import { ItemCart } from "../ItemCart/itemCart";

export const Cart = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <>
      <Container>
        {cart.length ? (
          cart.map((i) => (
            <ItemCart
              key={i.item.id}
              id={i.item.id}
              title={i.item.title}
              quantity={i.quantity}
              image={i.item.photo}
              price={i.item.price}
            />
          ))
        ) : (
          <>
            <h1>Su carrito esta vacio</h1>
            <Link to="/">
              <button>Ir a home</button>
            </Link>
          </>
        )}
        <button onClick={clearCart}>Vaciar Carrito</button>
      </Container>
      <button onClick={clearCart}>Vaciar Carro</button>
    </>
  );
};
