import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { DetailModal } from "../Modals/detailModal";
import { AddCountModal } from "../Modals/addCountModal";
import { SubCountModal } from "../Modals/subCountModal";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalDec, setModalDec] = useState(false);
  const [modal, setModal] = useState(false);

  const handleClose = () => {
    setModalAdd(false);
    setModalDec(false);
    setModal(false);
  };
  const onSum = () => {
    if (count >= 1 && count < stock) {
      setCount(count + 1);
    } else {
      setModalAdd(true);
    }
  };
  const onDecreace = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setModalDec(true);
    }
  };
  const handleAdd = () => {
    onAdd(count);
    setModal(true);
    setCount(initial);
  };

  return (
    <>
      <div className="counter">
        {modalDec && (
          <SubCountModal
            show={modalDec}
            onHide={handleClose}
            animation={false}
          />
        )}
        <Button className="buttonCounter" onClick={onDecreace} variant="dark">
          {" "}
          -{" "}
        </Button>
        <p className="pCounter"> {count} </p>
        {modalAdd && (
          <AddCountModal
            show={modalAdd}
            onHide={handleClose}
            animation={false}
          />
        )}
        <Button className="buttonCounter" onClick={onSum} variant="dark">
          {" "}
          +{" "}
        </Button>
      </div>
      <div className="divButtonCardDetail">
        {modal && (
          <DetailModal show={modal} onHide={handleClose} animation={false} />
        )}

        <button className="buttonCardDetail add" onClick={handleAdd}>
          Add to Cart
        </button>
      </div>
    </>
  );
};
