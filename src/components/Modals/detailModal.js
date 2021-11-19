import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import ModalHeader from "react-bootstrap/esm/ModalHeader";
export const DetailModal = (props) => {
  return (
    <>
      <Modal className="modalAddToCart" show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <FontAwesomeIcon className="iconCartHeader" icon={faShoppingCart} />
          <Modal.Title>Producto añadido correctamente</Modal.Title>
          Que desea hacer?
        </Modal.Body>
        <Modal.Footer>
          <Link to="/">
            <button className="buttonContinue">Seguir comprando</button>
          </Link>

          <Link to="/cart">
            <button className="buttonGoToCart">
              <FontAwesomeIcon icon={faShoppingCart} /> Ir al carrito
            </button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};
