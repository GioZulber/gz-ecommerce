import { getFirestore } from "../../firebase";
import { useState } from "react";
import { Form, Col, Row, Container } from "react-bootstrap";
import styled from "styled-components";
import { addDoc, collection } from "@firebase/firestore";
export const FormContact = () => {
  const [dataContact, setDataContact] = useState({
    email: "",
    text: "",
  });
  const inputChange = (e) => {
    setDataContact({ ...dataContact, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    const board = {
      msg: {
        email: dataContact.email,
        text: dataContact.text,
      },
    };
    const db = getFirestore();
    const boardCollection = collection(db, "boards");
    addDoc(boardCollection, board)
      .then(() => {
        alert(`Mucha gracias por contactarnos, le responderemos en breve`);
      })
      .then(
        setDataContact({
          email: "",
          text: "",
        })
      )
      .catch((err) => console.log(err));
  };
  return (
    <Container style={{ width: "40%" }}>
      <h3>Por favor deje su mensaje:</h3>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={inputChange}
              value={dataContact.email}
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            style={{ height: "5rem" }}
            name="text"
            rows={3}
            placeholder="Deje su mensaje"
            onChange={inputChange}
            value={dataContact.text}
          />
        </Form.Group>

        <Buttoncito type="submit" onClick={handleClick}>
          Enviar
        </Buttoncito>
      </Form>
    </Container>
  );
};

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
