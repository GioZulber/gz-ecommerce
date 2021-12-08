import styled from "styled-components";
import { Form, Col } from "react-bootstrap";
import { getFirestore } from "../../firebase";
import { useCartContext } from "../../context/cartContext";
import { useState } from "react";
import { addDoc, collection } from "@firebase/firestore";
import { CheckoutModal } from "../Modals/checkoutModal";
export const FormCart = () => {
  const { clearCart, cart, totalPrice, actStock } = useCartContext();
  const [showModal, setShowModal] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleClose = () => {
    setShowModal(false);
    clearCart();
  };

  const totalPriceOrder = totalPrice();

  const [formData, setFormData] = useState({
    orderName: "",
    phone: "",
    email: "",
    city: "",
    address: "",
  });

  const inputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      buyer: {
        orderName: formData.orderName,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        address: formData.address,
      },
      items: [...cart],
      totalPriceOrder,
    };

    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then(({ id }) => {
        setOrderId(id);
        setShowModal(true);
        actStock();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setFormData({
          orderName: "",
          phone: "",
          email: "",
          city: "",
          address: "",
        });
        //Meti este timeout para darle tiempo al usuario de leer el id, sino directamente no abria el modal
        setTimeout(() => {
          clearCart();
        }, 10000);
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

        <Form.Group as={Col}>
          <Form.Label>Ciudad</Form.Label>
          <Form.Control
            required
            name="city"
            type="text"
            onChange={inputChange}
            value={formData.city}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Direccion</Form.Label>
          <Form.Control
            required
            name="address"
            type="text"
            placeholder="Avenida Siempre Viva 742"
            onChange={inputChange}
            value={formData.address}
          />
        </Form.Group>
        <Buttoncito
          type="submit"
          disabled={
            !(
              formData.orderName &&
              formData.email &&
              formData.phone &&
              formData.city &&
              formData.address
            )
          }
          onClick={handleSubmit}
        >
          Finalizar Compra
        </Buttoncito>
      </Form>
      {showModal && (
        <CheckoutModal
          show={showModal}
          onHide={handleClose}
          animation={false}
          id={orderId}
        />
      )}
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
