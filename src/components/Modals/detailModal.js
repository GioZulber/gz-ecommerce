import { Modal, Button } from "react-bootstrap";
export const DetailModal = (props) => {
  return (
    <>
      <Modal show={props.modal} handleClose={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={props.onHide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
