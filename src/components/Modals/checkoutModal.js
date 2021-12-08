import { Modal } from "react-bootstrap";

export const CheckoutModal = (props) => {
  return (
    <Modal className="countModal" show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Modal.Title>
          Muchas gracias por su compra, su id de seguimiento es: {props.id}
        </Modal.Title>
      </Modal.Body>
      <Modal.Footer>
        <button className="buttonOk" onClick={props.onHide}>
          Ok
        </button>
      </Modal.Footer>
    </Modal>
  );
};
