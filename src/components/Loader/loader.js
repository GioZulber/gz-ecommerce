import styled, { keyframes } from "styled-components";

export const Loader = () => {
  return (
    <Container>
      <Spinner> </Spinner>
    </Container>
    // <div className="containerSpinner">
    //   <div className="spinner"></div>
    // </div>
  );
};

const spin = keyframes`
  0% {
    transform: rotate(0deg);
    border-bottom-color: #b51e1e;
  }
  20% {
    transform: rotate(45deg);
    border-bottom-color: #721111;
  }
  /* 40% {
    transform: rotate(-45deg);
  } */
  80% {
    border-bottom-color: #b51e1e;
  }
  100% {
    transform: rotate(1800deg);
    border-bottom-color: #b51e1e;
  }
`;

const Spinner = styled.div`
  border: 5px solid black;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border-bottom: 6px solid var(--redDark);
  border-top: 6px solid var(--redDark);
  animation: ${spin} 2.5s ease-out infinite forwards;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
