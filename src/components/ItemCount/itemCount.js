import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { AddCountModal } from "../Modals/addCountModal";
import { SubCountModal } from "../Modals/subCountModal";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalDec, setModalDec] = useState(false);
  const handleClose = () => {
    setModalAdd(false);
    setModalDec(false);
  };
  const handleAdd = () => {
    if (count >= 1 && count < stock) {
      setCount(count + 1);
    } else {
      setModalAdd(true);
      // alert("Alcanzo el limite de stock");
    }
  };
  const onDecreace = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setModalDec(true);
    }
  };

  return (
    <div className="counter">
      {modalDec && (
        <SubCountModal show={modalDec} onHide={handleClose} animation={false} />
      )}
      <Button className="buttonCounter" onClick={onDecreace} variant="dark">
        {" "}
        -{" "}
      </Button>
      <p className="pCounter"> {count} </p>
      {/* probar con un ternario */}
      {modalAdd && (
        <AddCountModal show={modalAdd} onHide={handleClose} animation={false} />
      )}
      <Button className="buttonCounter" onClick={handleAdd} variant="dark">
        {" "}
        +{" "}
      </Button>
    </div>
  );
};
