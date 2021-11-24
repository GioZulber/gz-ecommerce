import styled from "styled-components";
import { Form, Col } from "react-bootstrap";
import { getFirestore } from "../../firebase";
import { useCartContext } from "../../context/cartContext";
import { useState } from "react";
import { addDoc, collection } from "@firebase/firestore";
export const FormCart = () => {
  const { clearCart, cart, totalPrice } = useCartContext();

  const [formData, setFormData] = useState({
    orderName: "",
    phone: "",
    email: "",
  });

  const totalPriceOrder = totalPrice();

  const inputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cartItems = cart.map(
      (i) => ` ${i.item.title} - Cantidad:${i.quantity} Precio: ${i.item.price}`
    );

    const order = {
      buyer: {
        orderName: formData.orderName,
        phone: formData.phone,
        email: formData.email,
      },
      items: [{ cartItems }],
      totalPriceOrder,
    };

    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then((response) =>
        alert(
          `Muchas gracias por su compra ${formData.orderName}. Su id de seguimiento es: ${response.id}`
        )
      )
      .then(
        setFormData({
          orderName: "",
          phone: "",
          email: "",
        })
      )
      .catch((err) => console.log(err))
      .finally(() => {
        clearCart();
      });
  };

  return (
    <MyContainer>
      <Form className="formCart">
        <Form.Group as={Col}>
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control
            required
            name="orderName"
            type="text"
            placeholder="Jhon Doe"
            onChange={inputChange}
            value={formData.orderName}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={inputChange}
            value={formData.email}
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            required
            name="phone"
            type="text"
            placeholder="+54..."
            onChange={inputChange}
            value={formData.phone}
          />
        </Form.Group>

        <Buttoncito
          type="submit"
          disabled={!(formData.orderName && formData.email && formData.phone)}
          onClick={handleSubmit}
        >
          Finalizar Compra
        </Buttoncito>
      </Form>
    </MyContainer>
  );
};

const Buttoncito = styled.button`
  color: #ffffff;
  width: 86%;
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

const MyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
