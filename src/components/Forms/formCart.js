import styled from "styled-components";
import { Form, Col } from "react-bootstrap";
import { getFirestore } from "../../firebase";
import { useCartContext } from "../../context/cartContext";
import { useState } from "react";
import { addDoc, collection, updateDoc, doc } from "@firebase/firestore";
export const FormCart = () => {
  const { clearCart, cart, totalPrice } = useCartContext();

  const [formData, setFormData] = useState({
    orderName: "",
    phone: "",
    email: "",
    city: "",
    address: "",
  });

  const totalPriceOrder = totalPrice();

  const inputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cartItems = cart.map((i) => {
      return {
        title: i.item.title,
        quantity: i.quantity,
        price: i.item.price,
      };
    });

    const order = {
      buyer: {
        orderName: formData.orderName,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        address: formData.address,
      },
      items: [{ cartItems }],
      totalPriceOrder,
    };

    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then(({ id }) => {
        alert(
          `Muchas gracias por su compra ${formData.orderName}. Su id de seguimiento es: ${id}`
        );
        cart.forEach((element) => {
          const normalStock = doc(db, "items", element.id);
          updateDoc(normalStock, {
            stock: element.item.stock - element.quantity,
          });
        });
      })
      .then(
        () => {
          setFormData({
            orderName: "",
            phone: "",
            email: "",
            city: "",
          });
        }
        //Seteo la data devuelta en blanco.
      )
      .catch((err) => console.log(err))
      .finally(() => {
        //Si esto lo hacia en el .then anterior quedaba muy feo, preferi utilizar el finally ()
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
