import { Modal } from "react-bootstrap";

export const AddCountModal = (props) => {
  return (
    <Modal className="countModal" show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Modal.Title>Alcanzo el limite de stock</Modal.Title>
      </Modal.Body>
      <Modal.Footer>
        <button className="buttonOk" onClick={props.onHide}>
          Ok
        </button>
      </Modal.Footer>
    </Modal>
  );
};
