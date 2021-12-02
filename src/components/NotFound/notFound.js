import { Link } from "react-router-dom";
import styled from "styled-components";
export const NotFound = () => {
  return (
    <MyContainer>
      <h1>Pagina no encontrada.</h1>
      <Link to="/">
        <Buttoncito>Ir a Inicio</Buttoncito>
      </Link>
    </MyContainer>
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
const MyContainer = styled.div`
  width: 100%;
  padding: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
