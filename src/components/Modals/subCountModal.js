import { Modal } from "react-bootstrap";
export const SubCountModal = (props) => {
  return (
    <Modal className="countModal" show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Modal.Title>No puede agregar 0 productos</Modal.Title>
      </Modal.Body>
      <Modal.Footer>
        <button className="buttonOk" onClick={props.onHide}>
          Ok
        </button>
      </Modal.Footer>
    </Modal>
  );
};
