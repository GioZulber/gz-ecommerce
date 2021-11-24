import { Form, Col, Row, Container } from "react-bootstrap";
import styled from "styled-components";
export const FormContact = () => {
  return (
    <Container style={{ width: "40%" }}>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Deje su mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Buttoncito type="submit">Enviar</Buttoncito>
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
